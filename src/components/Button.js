import React from "react";

function Button({ color, borderColor, children }) {
  return (
    <button
      style={{
        border: "2px solid",
        color,
        borderColor,
        background: "white",
        borderRadius: 4,
        padding: 16,
        margin: 8,
      }}
    >
      {children}
    </button>
  );
}

export function Buttons() {
  return (
    <div>
      <Button color="red" borderColor="red" children="Cancel Me" />
      <Button color="green" borderColor="green" children="Confirm Me" />
    </div>
  );
}
