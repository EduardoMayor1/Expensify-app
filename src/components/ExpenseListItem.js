import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses"
import moment from 'moment';


const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
         <Link to={`/edit/${id}`}>
           <h3>{description}</h3>
        </Link>
        <p>{amount}
         - 
        {moment(createdAt).format('MMMM Do, YYYY')}</p>
    </div>
)

export default ExpenseListItem