import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = ({ onAddExpense }) => {
  const [formState, updateFormState] = useState({
    itemName: "",
    price: "",
    date: "",
    show: false,
  });

  const itemNameChangeHandler = (e) => {
    updateFormState((prev) => {
      return { ...prev, itemName: e.target.value };
    });
  };

  const priceChangeHandler = (e) => {
    updateFormState((prev) => {
      return { ...prev, price: e.target.value };
    });
  };

  const dateChangeHandler = (e) => {
    updateFormState((prev) => {
      return { ...prev, date: e.target.value };
    });
  };

  const initAndShowForm = () => {
    updateFormState({ itemName: "", price: "", date: "", show: true });
  };

  const resetAndHideForm = () => {
    updateFormState({ itemName: "", price: "", date: "", show: false });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    onAddExpense({
      title: formState.itemName,
      price: Number(formState.price),
      date: new Date(formState.date),
    });
    resetAndHideForm();
  };

  const addExpenseHandler = () => {
    initAndShowForm();
  };

  const cancelHandler = () => {
    resetAndHideForm();
  };

  return (
    <div className="expense-form">
      {!formState.show && (
        <button onClick={addExpenseHandler}>Add new expense</button>
      )}
      {formState.show && (
        <form onSubmit={formSubmitHandler}>
          <div className="expense-form__controls">
            <div className="expense-form__control">
              <label>Item Name</label>
              <input
                type="text"
                value={formState.itemName}
                onChange={itemNameChangeHandler}
              />
            </div>
            <div className="expense-form__control">
              <label>Price</label>
              <input
                type="number"
                value={formState.price}
                min="0.01"
                step="0.01"
                onChange={priceChangeHandler}
              />
            </div>
            <div className="expense-form__control">
              <label>Date</label>
              <input
                type="date"
                value={formState.date}
                min="2019-01-01"
                max="2022-12-31"
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className="expense-form__actions">
            <button onClick={cancelHandler}>Cancel</button>
            <button type="submit">Add expense</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ExpenseForm;
