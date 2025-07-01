const alertForm = document.getElementById("alertForm");
const alertMsg = document.getElementById("alertMsg");

alertForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const coin = document.getElementById("coin").value;
  const condition = document.getElementById("condition").value;
  const target = parseFloat(document.getElementById("target").value);

  if (isNaN(target) || target <= 0) {
    alert("❌ Please enter a valid price in USD (greater than 0).");
    return;
  }

  const currentPrice = {
    BTC: 42100,
    ETH: 2193,
    SOL: 98.14,
    DOGE: 0.187,
  };

  let triggered = false;
  if (condition === "above" && currentPrice[coin] > target) triggered = true;
  if (condition === "below" && currentPrice[coin] < target) triggered = true;

  if (triggered) {
    alertMsg.style.display = "block";
    setTimeout(() => {
      alertMsg.style.display = "none";
    }, 4000);
  } else {
    alert("✅ Alert created, waiting to trigger.");
  }
});
