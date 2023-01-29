import React from "react";

export default function ActionButton({ tooltip, onClickAction, children }) {
  return (
    <button xdata={`{ tooltip: ${tooltip} }`} onClick={onClickAction}>
      {children}
    </button>
  );
}
