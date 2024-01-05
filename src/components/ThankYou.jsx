import ThankYouImg from "./../assets/images/illustration-thank-you.svg";

const ThankYou = ({ rating }) => {
  return (
    <section className="w-[325px] h-[360px] md:w-[410px] md:h-[410px]  p-8 rounded-2xl flex flex-col items-center justify-between">
      <img
        src={ThankYouImg}
        alt="thank you image"
        className="w-[148px] h-[97px] md:w-[167px] md:h-[108px]"
      />
      <div className="flex rounded-full w-fit items-center justify-center bg-[#252d37] px-3 py-2">
        <p className="text-[15px] text-[#fb7413]">
          You selected {rating} out of 5
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-white font-bold text-2xl md:text-3xl text-center">
          Thank you!
        </h1>
        <p className="text-[14px] text-[#959eac] text-center">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </section>
  );
};

export default ThankYou;
