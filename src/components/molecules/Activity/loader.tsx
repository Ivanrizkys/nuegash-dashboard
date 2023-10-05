const ActivityLoader = () => {
  return (
    <div className="w-full md:w-10/12 bg-[#F5F5F7] rounded-default p-5">
      <div className="flex items-center justify-between text-secondary-500 animate-pulse">
        <div className="w-full max-w-[59px] h-6 bg-primary-200 rounded-skeleton-text"></div>
        <div className="w-full max-w-[77px] h-4 bg-primary-200 rounded-skeleton-text"></div>
      </div>
      <div className="pt-6 pb-5 w-full h-full">
        <div className="bg-white w-full h-full rounded-default flex items-center justify-center">
          <svg
            width="362"
            height="83"
            viewBox="0 0 362 83"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="animate-pulse"
              d="M2 81L46.5556 57.1899C55.1341 52.6056 65.4026 52.4648 74.1036 56.8121L104.901 72.1997C115.595 77.5426 128.44 76.0269 137.596 68.3418L166.389 44.1759C176.437 35.7419 190.801 34.8153 201.85 41.8884L229.53 59.6082C238.517 65.3609 249.882 65.9076 259.379 61.0439L293.692 43.4713C299.273 40.6133 305.609 39.5756 311.81 40.5042L360 47.7203"
              stroke="#EBEDF7"
              stroke-width="3"
              stroke-linecap="round"
            />
            <path
              className="animate-pulse"
              d="M2 72.5323L45.075 44.9568C55.8587 38.0533 69.8354 38.755 79.8735 46.7037L99.7027 62.4056C112.678 72.6798 131.522 70.5059 141.816 57.5474L162.794 31.1414C173.599 17.5411 193.66 15.9306 206.496 27.633L228.418 47.6201C237.45 55.8537 250.572 57.7861 261.593 52.5055L293.3 37.3134C298.601 34.7734 304.532 33.8468 310.355 34.6486L360 41.4839"
              stroke="#141522"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ActivityLoader;
