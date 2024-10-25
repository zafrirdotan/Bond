import { memo } from "react";
import "./Paginator.css";

const Paginator = memo(function Paginator({
  setPage,
  page,
  nextDisabled,
  prevDisabled,
}: {
  setPage: (page: number) => void;
  page: number;
  nextDisabled: boolean;
  prevDisabled: boolean;
}) {
  return (
    <div className="paginator-container">
      <button
        className="paginator-button"
        onClick={() => setPage(page - 1)}
        disabled={prevDisabled}
      >
        Previous
      </button>
      <button
        className="paginator-button"
        onClick={() => setPage(page + 1)}
        disabled={nextDisabled}
      >
        Next
      </button>
      <label className="paginator-label">Page: {page}</label>
    </div>
  );
});

export default Paginator;
