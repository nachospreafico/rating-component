const RatingButtons = ({ rating, setRating }) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <button
        onClick={(e) => {
          setRating(e.target.innerHTML);
        }}
        className={`flex items-center ${
          rating === "1" && "text-white bg-[#959eac]"
        } justify-center text-[#959eac] bg-[#252d37] w-[55px] h-[55px] rounded-full cursor-pointer lg:hover:bg-[#fb7413] lg:hover:text-white duration-200`}
      >
        1
      </button>
      <button
        onClick={(e) => {
          setRating(e.target.innerHTML);
        }}
        className={`flex items-center ${
          rating === "2" && "text-white bg-[#959eac]"
        } justify-center text-[#959eac] bg-[#252d37] w-[55px] h-[55px] rounded-full cursor-pointer lg:hover:bg-[#fb7413] lg:hover:text-white duration-200`}
      >
        2
      </button>
      <button
        onClick={(e) => {
          setRating(e.target.innerHTML);
        }}
        className={`flex items-center ${
          rating === "3" && "text-white bg-[#959eac]"
        } justify-center text-[#959eac] bg-[#252d37] w-[55px] h-[55px] rounded-full cursor-pointer lg:hover:bg-[#fb7413] lg:hover:text-white duration-200`}
      >
        3
      </button>
      <button
        onClick={(e) => {
          setRating(e.target.innerHTML);
        }}
        className={`flex items-center ${
          rating === "4" && "text-white bg-[#959eac]"
        } justify-center text-[#959eac] bg-[#252d37] w-[55px] h-[55px] rounded-full cursor-pointer lg:hover:bg-[#fb7413] lg:hover:text-white duration-200`}
      >
        4
      </button>
      <button
        onClick={(e) => {
          setRating(e.target.innerHTML);
        }}
        className={`flex items-center ${
          rating === "5" && "text-white bg-[#959eac]"
        } justify-center text-[#959eac] bg-[#252d37] w-[55px] h-[55px] rounded-full cursor-pointer lg:hover:bg-[#fb7413] lg:hover:text-white duration-200`}
      >
        5
      </button>
    </div>
  );
};

export default RatingButtons;
