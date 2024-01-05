import { useState } from "react";
import Rating from "./components/Rating";
import ThankYou from "./components/ThankYou";

function App() {
  const [submit, setSubmit] = useState(false);
  const [rating, setRating] = useState("");

  return (
    <>
      {submit ? (
        <ThankYou rating={rating} />
      ) : (
        <Rating setSubmit={setSubmit} rating={rating} setRating={setRating} />
      )}
    </>
  );
}

export default App;
