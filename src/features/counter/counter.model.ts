import { action, Action, thunk, Thunk } from "easy-peasy";

interface CounterState {
  count: number;
}

interface CounterAction {
  increment: Action<this, void>;
  decrement: Action<this, void>;
  amountBy: Action<this, number | undefined>;
}

interface CounterThunk {
  incrementAsync: Thunk<this, void>;
}

export interface CounterModel
  extends CounterState,
    CounterAction,
    CounterThunk {}

export const counterModel: CounterModel = {
  count: 0,
  increment: action((state: any) => {
    state.count++;
  }),
  decrement: action((state: any) => {
    state.count--;
  }),
  amountBy: action((state: any, payload: number) => {
    state.count += payload;
  }),
  incrementAsync: thunk(async (actions, _) => {
    setTimeout(() => {
      actions.increment();
    }, 2000);
  }),
};
