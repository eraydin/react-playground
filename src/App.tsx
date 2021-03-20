import React from "react";
import { Heading } from "./Heading";
import Counter from "./Counter";

const initialState = { count: 0 };
export type CounterState = Readonly<typeof initialState>;

class App extends React.Component<object, CounterState> {
  readonly state: CounterState = initialState;

  increment = (isShiftPressed: boolean) => {
    const incr = isShiftPressed ? 10 : 1;
    return this.setState({ count: this.state.count + incr });
  };

  render() {
    return (
      <div>
        <Heading />
        <Counter
          label={"Current"}
          count={this.state.count}
          onCounterIncrease={this.increment}
        />
      </div>
    );
  }
}

export default App;
