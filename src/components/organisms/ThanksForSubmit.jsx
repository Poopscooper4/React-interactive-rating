import React from "react";
import payment from "../../SvgDump/payment.png";

const ThanksForSubmit = ({count}) => {
  return (
    <div className="p-[34px_24px]  bg-[#1d242d] flex flex-col gap-[24px] justify-center items-center rounded-[15px]">
      <div>
        <img src={payment} alt="" />
      </div>
      <div className="p-[5px_12px] bg-[#262E38] rounded-[22.5px]">
        <span className="text-[#FC7614] text-[14px]">
          You selected {count} out of 5
        </span>
      </div>
      <div className="flex flex-col gap-[10px] text-center">
        <span className="text-white text-[24px]">Thank you!</span>
        <span className="text-[14px] text-[#969FAD]">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </span>
      </div>
    </div>
  );
};

export default ThanksForSubmit;
