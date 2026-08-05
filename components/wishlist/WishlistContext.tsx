"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface WishlistContextType {
  wishlist: string[];
  addToWishlist: (slug: string) => void;
  removeFromWishlist: (slug: string) => void;
  toggleWishlist: (slug: string) => void;
  isWishlisted: (slug: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

export function WishlistProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [wishlist, setWishlist] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("wishlist");

    if (stored) {
      setWishlist(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );
  }, [wishlist]);

  const addToWishlist = (slug: string) => {
    setWishlist((prev) => {
      if (prev.includes(slug)) return prev;
      return [...prev, slug];
    });
  };

  const removeFromWishlist = (slug: string) => {
    setWishlist((prev) =>
      prev.filter((item) => item !== slug)
    );
  };

  const toggleWishlist = (slug: string) => {
    if (wishlist.includes(slug)) {
      removeFromWishlist(slug);
    } else {
      addToWishlist(slug);
    }
  };

  const isWishlisted = (slug: string) =>
    wishlist.includes(slug);

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        isWishlisted,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error(
      "useWishlist must be used inside WishlistProvider"
    );
  }

  return context;
}