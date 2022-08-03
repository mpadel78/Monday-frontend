import React from "react";
import Typography from "@mui/material/Typography";

function VerticalText(props) {
  return (
    <>
      <p
        style={{
          transform: [{ rotate: "90deg" }],
          position: "fixed",
          top: "30px",
        }}
      >
        hehe
      </p>
    </>
  );
}

export default VerticalText;
