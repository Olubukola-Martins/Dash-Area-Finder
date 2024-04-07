export interface IPostBody {
    amenities: string[]; review: string; anonymous: boolean;rating:number
}
let reviews: any[] = []

export const getReviews = () => reviews;

export const addReview = (newReview: IPostBody) => {reviews.push(newReview)}