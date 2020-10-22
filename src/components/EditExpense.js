import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpense extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }

  onClickRemove = () => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onClickRemove}>
          Remove
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {  
  const subjectExpense = state.expenses.find((expense) => expense.id === props.match.params.id);
  return {
    expense: subjectExpense
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (expense) => dispatch(removeExpense(expense))
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);