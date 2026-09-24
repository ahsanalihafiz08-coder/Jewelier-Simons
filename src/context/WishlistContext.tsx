import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export interface SavedWishlistItem {
  id: string;
  title: string;
  category: string;
  price: string;
  image: string;
  description?: string;
}

interface WishlistContextType {
  savedItems: SavedWishlistItem[];
  savedIds: string[];
  isSaved: (id: string) => boolean;
  toggleSave: (item: {
    id: string;
    title: string;
    category: string;
    price?: string;
    image: string;
    description?: string;
  }) => void;
  removeSave: (id: string) => void;
  clearWishlist: () => void;
  wishlistOpen: boolean;
  setWishlistOpen: (open: boolean) => void;
}

const STORAGE_KEY = 'juwelier_simons_wishlist_v1';
const SYNC_EVENT = 'juwelier_simons_wishlist_sync';

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [savedItems, setSavedItems] = useState<SavedWishlistItem[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // ignore
    }
    return [];
  });

  const [wishlistOpen, setWishlistOpen] = useState(false);

  // Sync with localStorage and cross-component/cross-tab broadcast
  const syncItems = useCallback((items: SavedWishlistItem[]) => {
    setSavedItems(items);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore
    }
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent(SYNC_EVENT, { detail: items }));
    }
  }, []);

  // Listen to cross-window or custom events
  useEffect(() => {
    const handleSync = (e: Event) => {
      try {
        const customEvt = e as CustomEvent<SavedWishlistItem[]>;
        if (customEvt.detail) {
          setSavedItems(customEvt.detail);
        } else {
          const stored = localStorage.getItem(STORAGE_KEY);
          if (stored) {
            setSavedItems(JSON.parse(stored));
          }
        }
      } catch {
        // ignore
      }
    };

    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        try {
          setSavedItems(JSON.parse(e.newValue));
        } catch {
          // ignore
        }
      }
    };

    window.addEventListener(SYNC_EVENT, handleSync);
    window.addEventListener('storage', handleStorage);
    return () => {
      window.removeEventListener(SYNC_EVENT, handleSync);
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  const savedIds = savedItems.map((item) => item.id);

  const isSaved = useCallback(
    (id: string) => savedItems.some((item) => item.id === id),
    [savedItems]
  );

  const toggleSave = useCallback(
    (item: {
      id: string;
      title: string;
      category: string;
      price?: string;
      image: string;
      description?: string;
    }) => {
      setSavedItems((prev) => {
        const exists = prev.some((p) => p.id === item.id);
        let next: SavedWishlistItem[];
        if (exists) {
          next = prev.filter((p) => p.id !== item.id);
        } else {
          next = [
            ...prev,
            {
              id: item.id,
              title: item.title,
              category: item.category,
              price: item.price || 'Boutique Atelier',
              image: item.image,
              description: item.description || '',
            },
          ];
        }
        syncItems(next);
        return next;
      });
    },
    [syncItems]
  );

  const removeSave = useCallback(
    (id: string) => {
      setSavedItems((prev) => {
        const next = prev.filter((p) => p.id !== id);
        syncItems(next);
        return next;
      });
    },
    [syncItems]
  );

  const clearWishlist = useCallback(() => {
    syncItems([]);
  }, [syncItems]);

  return (
    <WishlistContext.Provider
      value={{
        savedItems,
        savedIds,
        isSaved,
        toggleSave,
        removeSave,
        clearWishlist,
        wishlistOpen,
        setWishlistOpen,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = (): WishlistContextType => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
