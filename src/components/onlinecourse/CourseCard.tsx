import Image from "next/image";

interface CourseProps {
  course: {
    id: number;
    title: string;
    category: string;
    price: number;
    oldPrice?: number;
    rating: number;
    reviews: number;
    lessons: number;
    duration: string;
    lastUpdated: string;
    sales: number;
    image: string;
  };
  viewMode: "grid" | "list";
}

export default function CourseCard({ course, viewMode }: CourseProps) {
  return (
    <div
      className={`rounded-lg shadow-2xl bg-white overflow-hidden ${
        viewMode === "list" ? "flex items-center space-x-4 p-4" : "p-4"
      }`}
    >
      {/* Course Image */}
      <div className={`${viewMode === "list" ? "w-1/3" : ""}`}>
        <Image
          src={course.image}
          alt={course.title}
          width={viewMode === "list" ? 250 : 400}
          height={viewMode === "list" ? 150 : 200}
          className="rounded-md w-full object-cover"
        />
      </div>

      {/* Course Details */}
      <div className={`flex-1 ${viewMode === "grid" ? "mt-4" : ""}`}>
        <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
        <p className="text-sm text-gray-500 mt-1">Category: {course.category}</p>
        <p className="text-xs text-gray-500">Last Updated: {course.lastUpdated}</p>

        {/* Lessons & Duration */}
        <div className="flex items-center space-x-2 text-sm mt-2 text-gray-600">
          <span>{course.lessons} Lesson{course.lessons > 1 ? "s" : ""}</span>
          <span>•</span>
          <span>{course.duration} Hrs</span>
        </div>

        {/* Price & Rating */}
        <div className="mt-3">
          <div className="flex items-center space-x-2">
            {course.oldPrice && (
              <span className="text-gray-400 line-through">${course.oldPrice.toFixed(2)}</span>
            )}
            <span className="text-red-500 font-bold">${course.price.toFixed(2)}</span>
          </div>
          <div className="text-yellow-500 text-sm mt-1">
            ⭐ {course.rating} ({course.reviews} Reviews)
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-1">{course.sales} Sales</p>

        {/* Add to Cart Button */}
        <div className="mt-4">
          <button className="w-full bg-red-500 text-white px-4 py-2 rounded-md text-sm hover:bg-red-600 transition">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
