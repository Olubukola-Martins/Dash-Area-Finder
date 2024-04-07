"use client";

import React, { useEffect, useState } from "react";
import NavBarOtherPgs from "../components/nav/NavBarOtherPgs";
import ReviewsCardSetion from "./components/ReviewsCardSetion";
import ReviewsPictureSetion from "./components/ReviewsPictureSetion";
import LeaveReviewModal from "./components/LeaveReviewModal";

const AllReviewsPage = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [postSucess, setPostSucess] = useState(false);
  const [reviews, setReviews] = useState<any[]>();

  useEffect(() => {
    // Define the async function inside the effect
    const fetchReviews = async () => {
      const res = await fetch("http://localhost:3000/api/reviews", {
        next: { revalidate: 5000 },
      });
      const data = await res.json();
      console.log("reviews", data.reviews);
      if (data && data.reviews) {
        setReviews(data.reviews); // Update state with fetched data
      }
    };

    // Call the async function
    fetchReviews();
  }, [postSucess]);

  useEffect(() => {
    console.log("allRevInEffect", reviews);
  }, [reviews]);

  useEffect(() => {}, [postSucess]);

  return (
    <div className="h-screen overflow-y-auto">
      <LeaveReviewModal
        onClose={() => {
          setModalOpen(false);
        }}
        setPostSuccess={(success) => {
          setPostSucess(success);
        }}
        onSubmitExtra={() => {
          setModalOpen(false);
        }}
        isOpen={modalOpen}
      />
      <NavBarOtherPgs
        onlickReview={() => {
          setModalOpen(true);
        }}
      />
      <section className="flex justify-between flex-col xl:flex-row mt-10 w-[86.11%] mx-auto">
        {/* <div className="mx-auto"> */}
          <ReviewsCardSetion data={reviews} />
        {/* </div> */}
        <div className="  max-xl:order-first max-xl:mx-auto">
          <ReviewsPictureSetion />
        </div>
      </section>
    </div>
  );
};

export default AllReviewsPage;
