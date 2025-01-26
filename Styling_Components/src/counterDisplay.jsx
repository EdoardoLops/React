import React from 'react';

export function CounterDisplay({ count }) {

  return (
    <div style={{ fontSize: "24px", color: "blue" }}>
      <p>Count: {count}</p>
    </div>
  );
}