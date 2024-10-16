// Counter.tsx
import React, { Component } from "react";

// Define the interface for the component's state
interface CounterState {
  count: number; // 'count' should be of type number
}

// Class component definition using TypeScript
class Counter extends Component<{}, CounterState> {
  // No props in this component, hence empty object
  // Initialize state
  state: CounterState = {
    count: 0,
  };

  // Method to increment the count
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Render method
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
