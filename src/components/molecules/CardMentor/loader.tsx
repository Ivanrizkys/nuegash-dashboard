import Profile from "@/src/assets/icons/Profile";

interface CardMentorLoaderProps {
  autoWidth?: boolean;
  withDescription?: boolean;
}

const CardMentorLoader = ({
  autoWidth,
  withDescription,
}: CardMentorLoaderProps) => {
  return (
    <div
      className={`${
        autoWidth ? "w-auto" : "w-full max-w-[328px] min-w-[327px]"
      } bg-primary-0 rounded-default cursor-pointer p-6`}
    >
      <div className="flex items-center w-full">
        <Profile loading />
        <div className="ml-2 w-full max-w-[135.3px]">
          <div className="w-full h-6 bg-primary-200 rounded-skeleton-text animate-pulse"></div>
          <div className="w-full max-w-[90px] h-4 bg-primary-100 rounded-skeleton-text animate-pulse mt-1"></div>
        </div>
        <div className="w-full max-w-[55.4px] h-4 bg-primary-200 rounded-skeleton-text animate-pulse ml-auto"></div>
      </div>
      {withDescription && (
        <div className="w-full my-6">
          <div className="w-full h-5 bg-primary-100 rounded-skeleton-text animate-pulse"></div>
          <div className="w-full h-5 bg-primary-100 rounded-skeleton-text animate-pulse mt-1"></div>
          <div className="w-full max-w-[100px] h-5 bg-primary-100 rounded-skeleton-text animate-pulse mt-1"></div>
        </div>
      )}
      <div className="flex items-center justify-between text-sm font-medium mt-5 w-full">
        <div className="flex items-center gap-x-2 w-full">
          <div className="w-6 h-6 rounded-full bg-primary-200 animate-pulse"></div>
          <div className="w-full max-w-[51px] h-5 bg-primary-200 rounded-skeleton-text animate-pulse"></div>
        </div>
        <div className="flex items-center gap-x-2 w-full justify-end">
          <div className="w-6 h-6 rounded-full bg-primary-200 animate-pulse"></div>
          <div className="w-full max-w-[100px] h-5 bg-primary-200 rounded-skeleton-text animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default CardMentorLoader;
