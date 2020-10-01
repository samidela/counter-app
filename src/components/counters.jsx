import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onIncrement, onDelete, onDecrement } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-danger btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
