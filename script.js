function calculateBudget() {
  const income = parseFloat(document.getElementById("income").value);
  if (isNaN(income) || income <= 0) {
    alert("Please enter a valid income.");
    return;
  }

  const budget = {
    rent: income * 0.30,
    utilities: income * 0.10,
    transportation: income * 0.10,
    groceries: income * 0.10,
    phoneInternet: income * 0.05,
    subscription: income * 0.05,
    clothes: income * 0.05,
    insurance: income * 0.05,
    emergency: income * 0.05,
    partyMovies: income * 0.05,
    investment: income * 0.10
  };

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
    <h3>Here’s your suggested budget:</h3>
    <p>🏠 Rent: ₹${budget.rent.toFixed(2)}</p>
    <p>💡 Utilities: ₹${budget.utilities.toFixed(2)}</p>
    <p>🚗 Transportation: ₹${budget.transportation.toFixed(2)}</p>
    <p>🛒 Food & Groceries: ₹${budget.groceries.toFixed(2)}</p>
    <p>📱 Phone & Internet: ₹${budget.phoneInternet.toFixed(2)}</p>
    <p>🎞️ Subscriptions: ₹${budget.subscription.toFixed(2)}</p>
    <p>👕 Clothes: ₹${budget.clothes.toFixed(2)}</p>
    <p>🛡️ Insurance: ₹${budget.insurance.toFixed(2)}</p>
    <p>🆘 Emergency Fund: ₹${budget.emergency.toFixed(2)}</p>
    <p>🎉 Parties & Movies: ₹${budget.partyMovies.toFixed(2)}</p>
    <p>📈 Investment: ₹${budget.investment.toFixed(2)}</p>
  `;
  resultDiv.style.display = "block";
}
document.getElementById("calculate").addEventListener("click", calculateBudget);
document.getElementById("income").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    calculateBudget();
  }
});