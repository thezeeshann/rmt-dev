import { TriangleDownIcon } from "@radix-ui/react-icons";
import BookmarksPopover from "./BookmarksPopover";
import { useState } from "react";

export default function BookmarksButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bookmarks-btn"
      >
        Bookmarks <TriangleDownIcon />
      </button>

      {isOpen && <BookmarksPopover />}
    </section>
  );
}
