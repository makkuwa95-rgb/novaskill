import { Heart } from "lucide-react";

const wishlist = [
  {
    title: "Machine Learning Masterclass",
    category: "Artificial Intelligence",
  },
  {
    title: "AWS Cloud Engineer",
    category: "Cloud Computing",
  },
  {
    title: "UI/UX Design Bootcamp",
    category: "Design",
  },
];

export default function WishlistPreview() {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <div className="mb-6 flex items-center gap-3">
        <Heart className="text-pink-500" />
        <h2 className="text-2xl font-bold text-white">
          Wishlist
        </h2>
      </div>

      <div className="space-y-4">
        {wishlist.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-zinc-800 bg-black p-4"
          >
            <h3 className="font-semibold text-white">
              {item.title}
            </h3>

            <p className="mt-1 text-sm text-zinc-400">
              {item.category}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}