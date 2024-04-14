import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useBookmarksContext } from "../lib/hooks";

type BookMarkProps = {
  id: number;
};

export default function BookmarkIcon({ id }: BookMarkProps) {
  const { bookmarkedIds, handleToggleBookmark } = useBookmarksContext();
  const isBookmarked =
    Array.isArray(bookmarkedIds) && bookmarkedIds.includes(id);

  return (
    <button
      onClick={(e) => {
        handleToggleBookmark(id);
        e.stopPropagation();
        e.preventDefault();
      }}
      className="bookmark-btn"
    >
      <BookmarkFilledIcon className={`${isBookmarked ? "filled" :  ""}`} />
    </button>
  );
}
