"use client";

export const EventInfoSkeleton = () => {
  return (
    <div className="w-full flex justify-center items-start py-4">
      {/* Scrollable vertical container */}
      <div className="flex flex-col gap-4 w-full">
        {[...Array(1)].map((_, index) => (
          <div
            key={index}
            className="relative w-full bg-white rounded-lg p-5 animate-pulse"
          >
            {/* Skeleton Lines for Content */}
            <div className="animate-pulse h-3 bg-brown rounded-md w-5/6 mb-3"></div>
            <div className="animate-pulse h-3 bg-brown rounded-md w-1/2 mb-3"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
