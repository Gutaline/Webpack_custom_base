import { useState } from "react";
import * as styles from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const incr = () => setCount((prev) => prev + 1);
  console.log(styles);
  return (
    <div>
      <h1 className={styles.gg}>{count}</h1>
      <button onClick={incr}>increment</button>
    </div>
  );
};
