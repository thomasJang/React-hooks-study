import * as React from "react";

function Counter(props) {
  const [count, setCount] = React.useState(0);
  const countRef = React.useRef(null);

  React.useEffect(() => {
    countRef.current.style.height = `${count}px`;
  });

  return (
    <div style={{ background: "#ccc" }}>
      <button onClick={() => setCount(state => state + 1)}>Like</button>
      <h1 ref={countRef}>{count}</h1>
    </div>
  );
}

export default Counter;
