import React, { Component } from "react";

export type CounterProps = { label?: string; start?: number };

const initialState = { count: 0 };
export type CounterState = Readonly<typeof initialState>;

class Counter extends Component<CounterProps, CounterState> {
  readonly state: CounterState = initialState;

  componentDidMount() {
    if (this.props.start) {
      this.setState({
        count: this.props.start,
      });
    }
  }

  incrementCounter = (event: React.MouseEvent<HTMLElement>) => {
      const incr = event.shiftKey ? 10 : 1;
      return this.setState({ count: this.state.count + incr });
  }

  render() {
    const { label = "Count" } = this.props;

    return (
      <div>
        <label htmlFor="counter">{label}</label>

        <button
          type="submit"
          id="counter"
          role="counter"
          onClick={this.incrementCounter}
        >
          {this.state.count}
        </button>
      </div>
    );
  }
}

export default Counter;
