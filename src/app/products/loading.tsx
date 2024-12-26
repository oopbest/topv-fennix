export default function ProductSkeletonFlex() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="bg-white shadow-lg flex items-center justify-center rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col text-center gap-3 rounded-lg animate-pulse w-full p-4">
              {/* Image Placeholder */}
              <div className="bg-gray-300 h-40 lg:h-80 w-full rounded-lg"></div>

              {/* Title Placeholder */}
              <div className="mt-4 h-4 bg-gray-300 rounded w-3/4"></div>

              {/* Price Placeholder */}
              <div className="mt-2 h-4 bg-gray-300 rounded w-1/2"></div>

              {/* Button Placeholder */}
              <div className="mt-4 h-10 bg-gray-300 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
