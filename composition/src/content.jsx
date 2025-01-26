import React, { useState } from "react";

export function Container({ title, children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleTitleClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  const containerStyle = {
    backgroundColor: "white",
    border: "2px solid red",
    padding: "10px",
    marginBottom: "10px",
    color: "black",
  };

  return (
    <div style={containerStyle}>
      <h2 onClick={handleTitleClick} style={{ cursor: "pointer" }}>
        {title}
      </h2>
      {!isCollapsed && <div>{children}</div>}
    </div>
  );
}
