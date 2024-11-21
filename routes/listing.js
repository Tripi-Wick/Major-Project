const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js")
const { isLoggedIn, isOwner, validateListing } = require("../utils/middleware.js")
const listingController = require("../controllers/listings.js")
const multer = require("multer");

const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

// const upload = multer({dest:"uploads/"});


router.route("/")
    .get(wrapAsync(listingController.index))                                                                                          // Index Route
    .post(isLoggedIn, upload.single("listing[image]"), validateListing, wrapAsync(listingController.createListing));        // Create Route
  
// New Route (Creating new Listing)  -->Gotta put it above show as it takes new as id check
router.get("/new", isLoggedIn, listingController.renderNewForm);

router.route("/:id")
    .get(wrapAsync(listingController.showListing))                                          // Show Route (Showing listing in detail)
    .put(isLoggedIn, isOwner, upload.single("listing[image]"), validateListing, wrapAsync(listingController.updateListing))   // Update Route
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));              // Delete Route


// Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));



module.exports = router;


















// Previous way of writing
// router.delete("/:id", isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));