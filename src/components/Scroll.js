import React from "react";

export default function Scroll(props) {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "3px solid grey",
        height: "1000px",
      }}
    >
      {props.children}
    </div>
  );
}
