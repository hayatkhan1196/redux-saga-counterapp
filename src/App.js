import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { increament } from './component/actionMethod'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { age, increament } = this.props

    return (
      <div className="App">
        <div className="Age-label">
          your Age: <span>{age}</span>
        </div>
        <button onClick={() => increament(age)}>takeEvery</button>   {/* send to action Method */}


      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { age: state.reducer.age }
};

const mapDispatchToProps = {
  increament: increament,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
