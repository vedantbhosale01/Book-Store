const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js");

const Listing=require("../models/listing.js");
const {isLoggedIn}=require("../middleware.js");
const {isOwner,validateListing}=require("../middleware.js");
router.get("/",async (req,res)=>{
    const allListings= await Listing.find({});
    res.render("listings/index.ejs",{allListings});
 });

 router.get("/new", isLoggedIn,(req,res)=>{
   
    res.render("listings/new.ejs");
});

router.get("/:id",wrapAsync(async (req,res)=>{
    const {id}=req.params;
    const listing=await Listing.findById(id).populate({path:"reviews",
        populate:{path:"author",},}).populate("owner");
    if(!listing){
        req.flash("error","Listing does not exists!"); 
        res.redirect("/listings");
    }else{
         res.render("listings/show.ejs",{listing});
    }
   
})
);

router.post("/",isLoggedIn,validateListing,wrapAsync(async (req,res,next)=>{
    
    const newListing= new Listing(req.body.listing);
    newListing.owner=req.user._id;
    await newListing.save();
    req.flash("success","Successfully made a new listing!");
    res.redirect("/listings");
})
);

router.get("/:id/edit", isLoggedIn,isOwner,wrapAsync(async (req,res)=>{
    const {id}=req.params;
    const listing=await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing does not exists!"); 
        res.redirect("/listings");
    }else{
        res.render("listings/edit.ejs",{listing});
    }
   
})
);

router.put("/:id",isLoggedIn,isOwner,validateListing,wrapAsync(async (req,res)=>{
    const {id}=req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    req.flash("success","Successfully updated listing!");
    res.redirect(`/listings/${id}`);
})
);

router.delete("/:id/delete",isLoggedIn,isOwner,wrapAsync(async (req,res)=>{
    const {id}=req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success","Successfully deleted listing!");
    res.redirect("/listings");
})
);

module.exports=router;