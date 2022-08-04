import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import EditExpensePage from "./EditExpensePage";
import AddExpensePage from "./AddExpensePage";
import HelpPage from "./HelpPage";
import ExpenseDashboardPage from "./ExpenseDashboardPage";
import NotFoundPage from './NotFoundPage'
import Header from "./Header";



class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<ExpenseDashboardPage exact={true}/>} />
                <Route path='/create' element={<AddExpensePage />} />
                <Route path='/edit' element={<EditExpensePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
      </Router>
    )
  }
}

export default AppRouter;