import ReactShallowRenderer from 'react-test-rendere/shallow';
import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from "./actions/filters";
import selectExpenses from '../src/selectors/expenses';
import moment from 'moment';
import filtersReducer from '../src/reducers/filters';
import expenses, { editExpense, removeExpense } from '../src/actions/expenses';
import Header from '../src/components/Header';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import { ExpenseList } from '../src/components/ExpenseList'
import ExpenseListItem from './components/ExpenseListItem';
import AddExpensePage from './components/AddExpensePage';



test('should generate setStartDate object', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    }) 
})


test('should generate setEndDate object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    }) 
})


test('should generate setTextFilter object', () => {
    const action = setTextFilter(text)
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })
})

test('should generate action object for sort by date', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    })
})


test ('should filter by text value', () => {
    const filters = {
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined,
        text
    }
})

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, {
        type: '@@INIT'
    })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})


test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY__AMOUNT'})
    expect(state.sortBy).toBe('amount')
})


test('should set startDate filter', () => {
    const startDate = moment()
    const action = {
        type: 'SET_START_DATE',
        startDate
    }
    const state = filtersReducer(undefined, action)
    expect(state.startDate).toEqual(startDate)
})


test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})


test('should render Header', () => {
    const renderer = new ReactShallowRenderer()
    renderer.render(<Header />)
})

test('should render expense list item', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />)
    expect(wrapper)
})


test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
})


test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    })
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    })
})


test('should handle on submit', () => {
    const onSubmit = jest.fn()
    const history = { push: jest.fn() }
    const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />)
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[1])
})


beforeEach(() => {
    editExpense = jest.fn()
    removeExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<editExpensePage editExpense={editExpense} removeExpense={removeExpense} history={history} expenses={expenses[2]} />)
})


test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2])
})


const mapDispatchToProps = (dispatch) => ({
    setTextFilter:(text) => dispatchEvent(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
})


beforeEach(() => {
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(<ExpenseListFilters filters={filters} setTextFilter={setTextFilter} sortByDate={sortByDate} sortByAmount={sortByAmount} setStartDate={setStartDate} setEndDate={setEndDate} />)
})


test('should handle text change', () => {
    const value = 'rent'
    wrapper.find('input').simulate('change', {
        target: { value }
    })
    expect(sortByDate).toHaveBeenCalled()
})





