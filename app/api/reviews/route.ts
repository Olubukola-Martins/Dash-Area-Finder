import { addReview, getReviews } from "@/app/lib/data"
import { NextResponse } from "next/server"

export const GET = async (req: Request, res: Response) => { try {
    const reviews = getReviews();
    return NextResponse.json({message:"ok", reviews},{status:200})
} catch (error) {
   return NextResponse.json({message:error},{status: 500}) 
}}
export const POST = async (req: Request, res: Response) => {
    const {rating, anonymous, amenities,review} = await req.json();
    try {
        const newReview = { rating, anonymous, amenities,review,id:new Date().toString(), date: new Date() } 
        addReview(newReview);
        //  NextResponse.redirect('/')
    return NextResponse.json({message:"success", newReview},{status:200})
   
} catch (error) { return NextResponse.json({message:"Error",res},{status: 500})
    
} }