const { ref, required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js")
const DefaultUrl = "https://fps.cdnpk.net/images/ai/image-generator/gallery/resource-tti-15.webp";

const listingSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: String,
        image: {
            url: String,
            filename: String,
        },
        price: Number,
        location: String,
        country: String,
        reviews: [
          {
            type : Schema.Types.ObjectId,
            ref:"Review"
          },
        ],
        owner :{
          type : Schema.Types.ObjectId,
          ref:"User"
        },
        geometry:{
          type:{
            type : String,
            enum:['Point'],
            required:true
          },
          coordinates :{
            type:[Number],
            required: true
          }
        },
    }
);

listingSchema.post("findOneAndDelete", async(listing) =>{
  if(listing){
    await Review.deleteMany({_id:{$in: listing.reviews}});
  }
});

const Listing = mongoose.model("Listing", listingSchema)
module.exports = Listing

// Here we are creating our first collection Listing.