import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

type PaginationControlProps = {
  onClick: (direction: "next" | "previous") => void;
  currentPage: number;
  totalNumberOfPages: number;
};

export default function Pagination({
  onClick,
  currentPage,
  totalNumberOfPages,
}: PaginationControlProps) {
  return (
    <section className="pagination">
      {currentPage > 1 && (
        <PaginationButton
          onClick={() => onClick("previous")}
          direction="previous"
          currentPage={currentPage}
        />
      )}

      {currentPage < totalNumberOfPages && (
        <PaginationButton
          onClick={() => onClick("next")}
          direction="next"
          currentPage={currentPage}
        />
      )}
    </section>
  );
}

type PaginationButtonProps = {
  onClick: () => void;
  direction: "next" | "previous";
  currentPage: number;
};

function PaginationButton({
  direction,
  currentPage,
  onClick,
}: PaginationButtonProps) {
  return (
    <>
      <button
        onClick={(e) => {
          onClick();
          e.currentTarget.blur();
        }}
        className={`pagination__button pagination__button--${direction} `}
      >
        {direction === "previous" && (
          <>
            <ArrowLeftIcon />
            Page {currentPage - 1}
          </>
        )}

        {direction === "next" && (
          <>
            Page {currentPage + 1}
            <ArrowRightIcon />
          </>
        )}
      </button>
    </>
  );
}
