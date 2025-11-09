function FullStarRating({ rating }) {
  const totalStars = 5;

  return (
    <div className="flex gap-1 text-yellow-400 text-sm">
      {Array.from({ length: totalStars }, (_, i) => {
        const starValue = i + 1;

        if (starValue <= rating) {
          // full star
          return <span key={i}>★</span>;
        } else if (starValue - 0.5 === rating) {
          // half star
          return (
            <span key={i} className="relative">
              <span className="absolute left-0 w-1/2 overflow-hidden">★</span>
              <span className="text-gray-300">★</span>
            </span>
          );
        } else {
          // empty star
          return <span key={i} className="text-gray-300">★</span>;
        }
      })}
    </div>
  );
}

export default FullStarRating;
