import React, { useState } from "react";
import starsvg from "../../SvgDump/Star.png";
import Rates from "../atoms/Rates";
import SubmiteBtn from "../atoms/SubmiteBtn";

const CardModul = ({ active, setActive, setCount }) => {
  return (
    <div className="p-[32px_40px_32px_32px] bg-[#1f2630] gap-[30px] rounded-[30px] flex flex-col justify-start items-start">
      <div className="flex rounded-[50%] p-[16px] bg-[#262E38] justify-center items-center">
        <img src={starsvg} alt="" />
      </div>
      <div className="flex flex-col gap-[10px]">
        <span className="text-white text-[28px]">How did we do?</span>
        <span className="text-[#969FAD] text-[15px]">
          Please let us know how we did with your support <br /> request. All
          feedback is appreciated to help us improve our offering!
        </span>
      </div>
      <div className="flex w-[100%] justify-center items-center flex-col gap-[21px]">
        <Rates active={active} setActive={setActive} setCount={setCount} />
      </div>
    </div>
  );
};

export default CardModul;
