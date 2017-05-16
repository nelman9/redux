import React from 'react';



class Count extends React.Component {
  constructor(props){
    super(props);
    this.counterMinus = this.counterMinus.bind(this);
    this.counterAdd = this.counterAdd.bind(this);
    this.state = { count: 0 };
  }

  counterAdd() {
      this.setState({
          count: this.state.count + 1,
      });
  }

  counterMinus() {
      this.setState({
          count: this.state.count - 1,
      });
  }


  render() {
      return (
          <div>
              <h1>Counter</h1>
              <button onClick={this.counterAdd}>Add</button>
              <button onClick={this.counterMinus}>Minus</button>
              <Display
                      value is:={this.state.count}
                  />
          </div>
      );
  }
  }
export default Count;
