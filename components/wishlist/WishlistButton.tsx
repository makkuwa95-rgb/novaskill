"use client";

import { Heart } from "lucide-react";
import { useWishlist } from "./WishlistContext";

interface WishlistButtonProps {
  slug: string;
}

export default function WishlistButton({
  slug,
}: WishlistButtonProps) {
  const { isWishlisted, toggleWishlist } = useWishlist();

  const active = isWishlisted(slug);

  return (
    <button
      type="button"
      onClick={() => toggleWishlist(slug)}
      className="absolute right-4 top-4 z-20 rounded-full border border-white/10 bg-black/70 p-2 backdrop-blur transition hover:scale-110"
      aria-label="Toggle Wishlist"
    >
      <Heart
        className={`h-5 w-5 transition ${
          active
            ? "fill-red-500 text-red-500"
            : "text-white"
        }`}
      />
    </button>
  );
}