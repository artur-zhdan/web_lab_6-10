function ExpenseCounter(props) {
    return (
        <div class="expense-counter">
            <button onclick="updateTotalPriceDisplay()">Count total daily expenses:</button>
            <p class="total-expenses"></p>
        </div>
    );
}

export default ExpenseCounter;