import "../style/ExpenseItems.css"

function ExpenseItems() {
  return (
    <div>
      <div className="row float-center">
        <div className="col text-primary expenseItem">06th April 2023</div>
        <div className="col expenseItemDescription">
          <div className="row">
            <div className="col text-primary">Car Insurance</div>
            <div className="col text-primary">$292.64</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItems;
