import { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 4 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.findIndex((count) => count.id === counter.id);

    counters[index].value++;

    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.findIndex((count) => count.id === counter.id);

    if (counters[index].value === 0) {
      return 0;
    }

    counters[index].value--;

    this.setState({ counters });
  };

  resetAll = () => {
    const counters = [...this.state.counters];

    for (let count in counters) {
      counters[count].value = 0;
    }
    this.setState({ counters });
  };

  allProducts = () => {
    const counters = [...this.state.counters];

    const len = counters.filter((count) => count.value > 0);

    return len.length;
  };

  render() {
    return (
      <div>
        <button onClick={this.resetAll} className='btn btn-info'>
          Reset
        </button>
        <h4>Product Selected: {this.allProducts()} </h4>

        {this.state.counters.map((counter) => (
          <Counter
            handleIncrement={this.handleIncrement}
            handleDecrement={this.handleDecrement}
            key={counter.id}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
