import { Star } from "lucide-react";

const ratings = [
  { stars: 5, count: 2823 },
  { stars: 4, count: 38 },
  { stars: 3, count: 4 },
  { stars: 2, count: 0 },
  { stars: 1, count: 0 },
];

const totalReviews = ratings.reduce((acc, r) => acc + r.count, 0);
const averageRating = 4.5;

export default function ProductReviews() {
  return (
    <div className="p-6 max-w-full border rounded-lg border-dashed border-gray-200 space-y-4">
      <h2 className="text-left text-xl font-semibold text-gray-900">Product Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center space-x-6">
          <div className="relative w-16 h-16 flex items-center justify-center rounded-full border-[3px] border-orange-400 bg-orange-50">
            <span className="text-xl font-bold text-gray-900">{averageRating}</span>
          </div>
          <div className="space-y-1">
            <div className="flex items-center space-x-1">
              {Array(5).fill(0).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />
              ))}
            </div>
            <p className="text-sm text-gray-500 font-medium">from 1,25k reviews</p>
          </div>
        </div>
        <div className="space-y-2 pt-4">
          {ratings.map((rating, idx) => {
            const percentage = (rating.count / totalReviews) * 100;
            return (
              <div key={idx} className="flex items-center space-x-3">
                <div className="flex items-center space-x-1 w-14">
                  <span className="text-sm font-medium">{rating.stars}.0</span>
                  <Star className="w-3.5 h-3.5 text-orange-400 fill-orange-400" />
                </div>
                <div className="flex-1 bg-gray-100 h-2.5 rounded-full relative">
                  <div
                    className="absolute top-0 left-0 h-2.5 bg-gray-900 rounded-full"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <div className="w-10 text-right text-sm text-gray-600">{rating.count}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
