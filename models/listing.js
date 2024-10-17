const mongoose=require("mongoose");
const Review=require("./review.js");
const Schema=mongoose.Schema;


const listingSchema=new Schema({
    title:{
        type: String,
        required: true
    },
    author:String,
    image:{
        type:String,        
        default:"https://unsplash.com/photos/a-pool-of-water-surrounded-by-rocks-and-trees-zo_udYMcaVc",
        set: (v)=>v===""?"https://unsplash.com/photos/a-pool-of-water-surrounded-by-rocks-and-trees-zo_udYMcaVc":v,
    },
    price:Number,
    publisher:String,
    isbn:String,
    reviews:[{
        type: Schema.Types.ObjectId,
        ref:"Review",
    },
    ],
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
});
listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
    await Review.deleteMany({_id:{$in:listing.reviews}});
}
});
const Listing=mongoose.model("Listing",listingSchema);


module.exports=Listing;