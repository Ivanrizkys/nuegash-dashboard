const HelpCenter = () => {
  return (
    <div className="relative">
      <div className="w-full h-full bg-secondary-500 text-primary-0 hover:bg-primary-500 peer pointer-events-none rounded-[10px] relative overflow-hidden px-4 pb-4 text-center transition-all duration-500">
        <p className="font-semibold text-base mt-[71px]">
          Help Center
        </p>
        <p className="font-medium text-xs mt-3">
          Having Trouble in Learning. Please contact us for more questions.
        </p>
        <button className="bg-primary-0 w-full py-3 rounded-[10px] mt-[45px] pointer-events-auto text-secondary-500 hover:text-primary-500 peer text-xs font-semibold relative cursor-pointer z-20 transition-all duration-500">
          Go To Help Center
        </button>
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
