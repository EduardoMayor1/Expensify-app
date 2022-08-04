import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './AppRouter';
import configureStore from '../store/configureStore';
import { addExpense } from '../actions/expenses';
import { setTextFilter} from '../actions/filters';
import getVisibleExpenses from '../selectors/expenses'


const expenseStore = configureStore()
expenseStore.dispatch(addExpense({ description: 'Water bill', amount: 4500}))
expenseStore.dispatch(addExpense({ description: 'Rent', amount: 30000 }))




function Mainjsx() {
    return (
        <Provider store={expenseStore}>
            <AppRouter />
        </Provider>
    )
}


export default Mainjsx