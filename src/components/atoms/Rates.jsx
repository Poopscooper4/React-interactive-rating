import React, { useState } from "react";
import "../../App.css";
import SubmiteBtn from "./SubmiteBtn";

const Rates = ({ setCount, setActive, active }) => {
  const [count, setLocalCount] = useState(0);

  function handleButtonClick(event) {
    setLocalCount(event);
    setCount(event);
  }

  return (
    <div className="w-full flex flex-col gap-[15px]">
      <div className="w-full flex items-center justify-center gap-[21px]">
        {[1, 2, 3, 4, 5].map((event) => (
          <button
            key={event}
            onClick={() => handleButtonClick(event)}
            style={{ backgroundColor: count === event ? "#7C8798" : "#262E38" }}
            className={`cursor-pointer  bg-[#262E38] transition-all duration-[0.5s] p-[20px_30px] text-white text-[16px] rounded-[50%] hover:bg-[#FC7614]`}
          >
            {event}
          </button>
        ))}
      </div>
      <div className="w-full"></div>
      <SubmiteBtn count={count} active={active} setActive={setActive} />
    </div>
  );
};

export default Rates;