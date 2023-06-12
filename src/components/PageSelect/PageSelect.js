export const PageSelect = ({ isFirstPage, onPrev, onNext }) => {
    return (
      <div>
        <button className="btn" onClick={onPrev} disabled={isFirstPage}>
          Prev
        </button>
        <button className="btn" onClick={onNext}>Next</button>
      </div>
    );
  };
  