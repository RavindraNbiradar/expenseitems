import ExpenseDate from './ExpenseDate';
import React, { useState } from 'react';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [amount,addamount]=useState(props.amount)

  const addExpense=()=>{
      addamount(amount+100);
      
  }
  console.log(addExpense,'addexpense')
  
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      {/* <button onClick={()=>props.delete(props.amount)}>delete</button> */}
      <button onClick={addExpense}>AddEXpense</button>
    </Card>
  );
}

export default ExpenseItem;
