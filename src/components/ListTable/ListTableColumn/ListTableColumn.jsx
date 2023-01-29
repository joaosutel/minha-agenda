import React from "react";

export default function ListTableColumn({ className, children }) {
  return (
    <td className="px-6 py-4 text-center">
      <div className={className && "flex gap-2 justify-center"}>{children}</div>
    </td>
  );
}
