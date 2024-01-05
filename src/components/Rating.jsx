import StarIcon from "./../assets/images/icon-star.svg";
import RatingButtons from "./RatingButtons";
import { useEffect, useState } from "react";

const Rating = ({ setSubmit, rating, setRating }) => {
  return (
    <main className="w-[325px] h-[360px]  p-6 rounded-2xl flex flex-col justify-between">
      <div className="flex rounded-full w-fit items-center justify-center bg-[#252d37] p-3">
        <img src={StarIcon} alt="" />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-white font-bold text-2xl">How did we do?</h1>
        <p className="text-[14px] text-[#959eac]">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      {/* Ratings buttons container */}
      <RatingButtons setRating={setRating} rating={rating} />
      <button
        onClick={() => {
          if (rating != "") {
            setTimeout(() => setSubmit(true), 2000);
          }
        }}
        className="w-full rounded-full py-3 text-white font-medium tracking-widest bg-[#fb7413] lg:hover:bg-white lg:hover:text-[#fb7413] duration-200"
      >
        SUBMIT
      </button>
    </main>
  );
};

export default Rating;
