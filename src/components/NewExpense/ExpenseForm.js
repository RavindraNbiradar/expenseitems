import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setenteredTitle] = useState("");
  const [enteredAmounnt, setenteredAmount] = useState("");
  const [enteredDate, setenteredDate] = useState("");

   
  const titleChangeHandler = (event) => {
    setenteredTitle(event.target.value);
    console.log(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setenteredAmount(event.target.value);
    console.log(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setenteredDate(event.target.value);
    console.log(event.target.value);
  };

  const submitHandler=(event)=>{
    event.preventDefault();
    const expenseData ={
      title:enteredTitle,
      amount:enteredAmounnt,
      date:new Date(enteredDate)
    }
    props.onSaveExpenseData(expenseData);
    setenteredTitle('');
    setenteredAmount('');
    setenteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>title</label>
          <input type="text"  value={enteredTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmounnt}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
        <div className='new-expense__actions'>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
