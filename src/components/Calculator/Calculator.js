/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
// import css file for styling
import './Calculator.css';

export default class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      num1: '',
      num2: '',
      operation: '',
    };
  }

  // Theses 3 methods are for handling cahanges in the input field.
  // Make sure to convert it to  a number
  changeNum1(num1) {
    console.log('num1 hit-------------', this.state.num1);
    this.setState({ num1: `${this.state.num1}${num1}` });
  }

  changeNum2(num2) {
    this.setState({ num2: `${this.state.num2}${num2}` });
  }

  clearInput(e) {
    e.preventDefault();
    // Destruct num1 and num2
    const { num1, num2 } = this.state;
    if (num1 && !num2) {
      this.setState({ num1: '' });
    } else {
      this.setState({ num1: '', num2: '', operation: '' });
    }
  }

  // IN your equal method that where you will assign the result based on if it's add or not. Set the result to num1
  equal() {
    console.log(this.state);
    // Destruct num1, and num2, operation from state.
    const { operation, num1, num2 } = this.state;
    // Have a if else statement to determine whetehr to add, divide, multiply, and subtract
    if (operation === 'add') {
      // USe a return statement to return out the function., use shorthand + to convert num1, and num2 to number so we can add them.
      return this.setState({ num1: +num1 + +num2, num2: '', operation: '' });
    }
    console.log(this.state);
  }

  // Define your add method.
  add() {
    // So we are gonna
    const { num1, num2 } = this.state;
    this.setState({ operation: 'add' });
  }

  render() {
    // Destruct values from state
    const { num1, num2, operation } = this.state;
    return (
      <div className="container">
        <div className="wrapper">
          <input value={operation ? num2 : num1} aria-label="result" />
          <button onClick={e => this.clearInput(e)} className="btn">CE</button>
          <button className="btn">% Remainder</button>
        </div>
        <div className="wrapper">
          <button onClick={e => (operation ? this.changeNum2('7') : this.changeNum1('7'))} className="btn">7</button>
          <button onClick={e => (operation ? this.changeNum2('8') : this.changeNum1('8'))} className="btn">8</button>
          <button onClick={e => (operation ? this.changeNum2('9') : this.changeNum1('9'))} className="btn">9</button>
          <button className="btn">/</button>
        </div>
        <div className="wrapper">
          <button onClick={e => (operation ? this.changeNum2('4') : this.changeNum1('4'))} className="btn">4</button>
          <button onClick={e => (operation ? this.changeNum2('5') : this.changeNum1('5'))} className="btn">5</button>
          <button onClick={e => (operation ? this.changeNum2('6') : this.changeNum1('6'))} className="btn">6</button>
          <button className="btn">x</button>
        </div>
        <div className="wrapper">
          <button onClick={e => (operation ? this.changeNum2('1') : this.changeNum1('1'))} aria-label="one" className="btn">1</button>
          <button onClick={e => (operation ? this.changeNum2('2') : this.changeNum1('2'))} aria-label="two" className="btn">2</button>
          <button onClick={e => (operation ? this.changeNum2('3') : this.changeNum1('3'))} aria-label="three" className="btn">3</button>
          <button className="btn">-</button>
        </div>
        <div className="wrapper">
          <button onClick={e => (operation ? this.changeNum2('.') : this.changeNum1('.'))} className="btn">.</button>
          <button onClick={e => (operation ? this.changeNum2('0') : this.changeNum1('0'))} className="btn">0</button>
          <button onClick={() => this.equal()} className="btn" aria-label="equal">=</button>
          <button onClick={() => this.add()} className="btn" aria-label="plus">+</button>
        </div>
      </div>
    );
  }
}
