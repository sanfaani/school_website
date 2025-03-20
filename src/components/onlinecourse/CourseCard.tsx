import Image from "next/image";

interface CourseProps {
  course: {
    id: number;
    title: string;
    category: string;
    price: number;
    rating: number;
    sales: number;
    image: string;
  };
  viewMode: string;
}

export default function CourseCard({ course, viewMode }: CourseProps) {
  return (
    <div className={`border rounded-md shadow-md p-4 ${viewMode === "list" ? "flex space-x-4" : ""}`}>
      <Image src={course.image} alt={course.title} width={250} height={150} className="rounded-md" />

      <div className="flex flex-col justify-between flex-1">
        <h3 className="text-lg font-semibold">{course.title}</h3>
        <p className="text-sm text-gray-500">{course.category}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-red-500 font-bold">${course.price}</span>
          <span className="text-yellow-500">⭐ {course.rating} Rating</span>
        </div>
        <p className="text-sm text-gray-500">{course.sales} Sales</p>
        <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md">Add To Cart</button>
      </div>
    </div>
  );
}
