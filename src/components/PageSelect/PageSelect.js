export const PageSelect = ({ isFirstPage, onPrev, onNext, isOptionSelected }) => {
    return (
      <div>
        <button className="btn" onClick={onPrev} disabled={!isOptionSelected || isFirstPage}>
          Prev
        </button>
        <button className="btn" onClick={onNext} disabled={!isOptionSelected}>Next</button>
      </div>
    );
  };
  