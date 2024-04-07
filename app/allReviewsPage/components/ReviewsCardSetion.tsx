import { Key } from "react";
import ReviewCard from "./ReviewCard";

const ReviewsCardSetion = ({ data }: { data: any }) => {
  return (
    <div className="xl:w-3/5 max-xl:grid max-xl:grid-cols-2 max-xl:gap-7 max-xl:mt-3 max-sm:grid-cols-1">
      {data &&
        data
          .sort(
            (a: any, b: any) =>
              new Date(b.date).getTime() - new Date(a.date).getTime()
          )
          .map(
            (review: {
              id: Key | null | undefined;
              anonymous: boolean | undefined;
              rating: number | undefined;
              review: string | undefined;
            }) => (
              <ReviewCard
                key={review.id}
                anonymous={review.anonymous}
                rating={review.rating}
                review={review.review}
              />
            )
          )}
      {Array(7)
        .fill(null)
        .map((_, index) => (
          <ReviewCard key={index} />
        ))}
    </div>
  );
};

export default ReviewsCardSetion;
