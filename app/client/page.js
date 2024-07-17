"use client";

import { useState } from "react";

const Client = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-7xl font-bold mb-4">{count}</h1>
      <button onClick={() => setCount(count + 1)} className="btn btn-primary">
        increase
      </button>
    </div>
  );
};

export default Client;
