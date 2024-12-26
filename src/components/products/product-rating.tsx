import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  //   faStarHalfAlt,
  //   faStar as faStarOutline,
} from "@fortawesome/free-solid-svg-icons";

type ProductRatingProps = {
  rating: number; // Rating from 0 to 5
};

const ProductRating = ({ rating }: ProductRatingProps) => {
  const fullStars = Math.floor(rating);
  //   const halfStar = rating % 1 !== 0;
  //   const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center justify-center space-x-1">
      {/* {[...Array(fullStars)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          className="text-yellow-500"
        />
      ))}
      {halfStar && (
        <FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-500" />
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStarOutline}
          className="text-yellow-500"
        />
      ))} */}
      {[...Array(fullStars)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          className="text-yellow-500 text-sm"
        />
      ))}
    </div>
  );
};

export default ProductRating;
