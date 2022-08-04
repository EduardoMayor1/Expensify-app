import React from 'react';
import { connect } from 'react-redux';
import { useNavigate  } from "react-router-dom";
import { addExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';
 
const AddExpensePage = (props) => {
 
    const navigate = useNavigate();
 
    return (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm
            onSubmit={(expense)=> {
                if (expense.description && expense.amount) {
                    props.dispatch(addExpense(expense));
                    navigate('/');
                }
            }}
        />
    </div>
)}
 
export default connect()(AddExpensePage);