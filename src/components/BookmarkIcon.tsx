import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useContext } from "react";
import { BookmarksContext } from "../contexts/BookMarksContextProvider";

type BookMarkProps = {
  id: number;
};

export default function BookmarkIcon({ id }: BookMarkProps) {
  const { bookMarkedIds, handleBookMark } = useContext(BookmarksContext);
  console.log("bookmarkIcon", bookMarkedIds);
  return (
    <button
      onClick={(e) => {
        handleBookMark(id);
        e.stopPropagation();
        e.preventDefault()
      }}
      className="bookmark-btn"
    >
      <BookmarkFilledIcon
        className={`${bookMarkedIds.includes(id) ? "filled" : ""}`}
      />
    </button>
  );
}
