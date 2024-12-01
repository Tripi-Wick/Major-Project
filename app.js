if(process.env.NODE_ENV!="production"){
    require('dotenv').config();
}

const express = require('express');
const path = require('path');
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const flash = require("connect-flash");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("passport");                 // It uses session
const localStrategy = require("passport-local");
const User = require("./models/user.js");

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

const app = express();
const port = 8080;
const dbUrl = process.env.ATLASDB_URL;
// const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';
// const MONGO_URL = 'mongodb+srv://kimmu1370:TOfI3A2FpKY6Uzkr@cluster0.th74p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const store = MongoStore.create({
    mongoUrl:dbUrl,
    crypto:{
        secret: process.env.SECRET,
    },
    touchAfter: 24* 3600,
})
store.on("error", ()=>{
    console.log("Error in Mongo Session Store", err);
})

const sessionOptions = {
    // store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 1000 * 60 * 60 * 24 * 3,  //Gotta specify exact milliseconds here
        maxAge: 100 * 60 * 60 * 24 * 3,
        httpOnly: true    //Prevents of xss attacks
    }
};

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);



async function main() {
    await mongoose.connect(dbUrl);
    // await mongoose.connect(MONGO_URL);
}

main()
    .then(() => {
        console.log("Connected to DB")
    })
    .catch((err) => {
        console.log(err);
    });

app.listen(port, () => {
    console.log("Server is listening to port 8080")
});

// Root Route 
app.get("/", (req, res) => {
    res.redirect("/listings");
});



app.use(session(sessionOptions));
app.use(flash());                                // Gotta use this prior routes
app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



// Locals to be used in ejs files
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});


// For Routing to listings routes
app.use("/listings", listingRouter);

// For Routing to review routes
app.use("/listings/:id/reviews", reviewRouter);

// For Routing to User routes
app.use("/", userRouter);


app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
});

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong!" } = err;
    res.status(statusCode).render("layouts/errors.ejs", { err });
    // res.status(statusCode).send(message);
});