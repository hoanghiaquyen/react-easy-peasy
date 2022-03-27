import { useStoreActions, useStoreState } from "../../app/hooks";

const Counter = () => {
  const counter = useStoreState((store) => store.counter.count);
  const increment = useStoreActions((actions) => actions.counter.increment);
  const decrement = useStoreActions((actions) => actions.counter.decrement);
  const amountBy = useStoreActions((actions) => actions.counter.amountBy);
  const incrementAsync = useStoreActions(
    (actions) => actions.counter.incrementAsync
  );
  return (
    <>
      <div>Counter: {counter}</div> <br />
      <button onClick={() => increment()}>Increment</button>
      &nbsp;
      <button onClick={() => decrement()}>Decrement</button>
      &nbsp;
      <button onClick={() => amountBy(5)}>Amount by 5</button>
      &nbsp;
      <button onClick={() => incrementAsync()}>Increment Async</button>
    </>
  );
};

export default Counter;
