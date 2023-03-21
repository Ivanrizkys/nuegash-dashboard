import { useCallback } from "react";

const HelpCenter = () => {
  const handleCTA = useCallback(() => {
    window.open("https://wa.me/6285702330305");
  }, []);

  return (
    <div className="relative z-10">
      <div className="w-full h-full flex flex-col bg-secondary-500 text-primary-0 hover:bg-primary-500 peer pointer-events-none rounded-default relative overflow-hidden px-4 pb-4 text-center transition-all duration-500">
        <button
          className="bg-primary-0 w-full py-3 rounded-default hover:mt-[45px] pointer-events-auto text-secondary-500 hover:text-primary-500 peer text-xs font-semibold relative cursor-pointer z-20 transition-all duration-500 order-3"
          onClick={() => handleCTA()}
        >
          Go To Help Center
        </button>
        <div className="order-1 mt-9 max-h-0 peer-hover:max-h-[84px] overflow-hidden transition-[max-height] duration-500 ">
          <p className="font-semibold text-base">Help Center</p>
          <p className="font-medium text-xs mt-3">
            Having Trouble in Learning. Please contact us for more questions.
          </p>
        </div>
        <div className="w-40 h-40 bg-[#262733] peer-hover:bg-primary-300 rounded-[50%] absolute -top-[100px] -left-[94px] transition-all duration-500"></div>
        <div className="w-40 h-40 bg-[#262733] peer-hover:bg-primary-300 rounded-[50%] absolute -bottom-[100px] -right-[94px] transition-all duration-500"></div>
      </div>
      <div className="flex items-center justify-center w-12 h-12 rounded-[48px] bg-secondary-500 peer-hover:bg-primary-500 transition-all duration-500 border-4 border-solid border-primary-0 absolute -top-6 left-1/2 right-1/2 -translate-x-1/2 shadow-[0_0_24px_1px_#54577A] peer-hover:shadow-[0_0_24px_1px_#546FFF] z-20">
        <p className="text-[28px] font-bold text-primary-0">?</p>
      </div>
    </div>
  );
};

export default HelpCenter;
