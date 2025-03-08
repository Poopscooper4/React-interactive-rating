import React from 'react';

const SubmiteBtn = ({ active, setActive ,count }) => {
  return (
    <div className="flex items-center justify-center w-[100%]">
      <button
        onClick={() => setActive(!active, count)}
        className="text-[16px] w-[100%] tracking-tighter-[2px]
         text-white bg-[#FC7614] p-[12px_132px] 
         rounded-[22.5px] hover:bg-[white] transition-all 
         duration-[0.5s] cursor-pointer hover:text-[#FC7614]"
        type="submit"
      >
        SUBMIT
      </button>
    </div>
    
  );
};

export default SubmiteBtn;