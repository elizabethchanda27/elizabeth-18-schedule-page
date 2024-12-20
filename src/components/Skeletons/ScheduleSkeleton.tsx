"use client";

export const ScheduleSkeleton = () => {
  return (
    <div className="w-full flex justify-center items-start py-4">
      {/* Scrollable horizontal container */}
      <div className="flex flex-row overflow-x-scroll space-x-4 w-full">
        {/* Skeleton cards */}
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="relative bg-white border border-gray-200 rounded-lg p-5 overflow-hidden w-80 shadow-lg animate-pulse"
          >
            {/* Skeleton Lines for Title and Details */}
            <div className="animate-pulse h-3 bg-pink-accent rounded-md w-3/4 mb-3"></div>
            <div className="animate-pulse h-3 bg-brown rounded-md w-5/6 mb-3"></div>
            <div className="animate-pulse h-3 bg-brown rounded-md w-1/2 mb-3"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
