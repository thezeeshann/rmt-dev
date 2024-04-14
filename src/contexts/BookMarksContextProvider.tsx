import { createContext } from "react";
import { useLocalStorage } from "../lib/hooks";
import { JobItemExpanded } from "../lib/types";
import { useJobItems } from "../lib/hooks";

type BookmarksContext = {
  bookmarkedIds: number[];
  handleToggleBookmark: (id: number) => void;
  bookmarkedJobItems: JobItemExpanded[];
  isLoading: boolean;
};

export const BookmarksContext = createContext<BookmarksContext | null>(null);

function BookmarksContextProvider({ children }: { children: React.ReactNode }) {
  const [bookmarkedIds, setBookmarkedIds] = useLocalStorage<number[]>(
    "bookmarkedIds",
    []
  );


  const idsArray = Array.isArray(bookmarkedIds) ? bookmarkedIds : [];

  const { jobItems: bookmarkedJobItems, isLoading } = useJobItems(idsArray);

  const handleToggleBookmark = (id: number) => {
    const prevArray = Array.isArray(bookmarkedIds) ? bookmarkedIds : [];
    if (prevArray.includes(id)) {
      setBookmarkedIds((prev) => {
        const prevArray = Array.isArray(prev) ? prev : [];
        return prevArray.filter((item) => item !== id);
      });
    } else {
      setBookmarkedIds((prev) => {
        const prevArray = Array.isArray(prev) ? prev : [];
        return [...prevArray, id];
      });
    }
  };

  return (
    <BookmarksContext.Provider
      value={{
        bookmarkedIds,
        handleToggleBookmark,
        bookmarkedJobItems,
        isLoading,
      }}
    >
      {children}
    </BookmarksContext.Provider>
  );
}

export default BookmarksContextProvider;
