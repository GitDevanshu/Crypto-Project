const ctx = document.getElementById("allocationChart").getContext("2d");
      new Chart(ctx, {
        type: "pie",
        data: {
          labels: ["BTC", "ETH", "SOL", "SHIB"],
          datasets: [
            {
              data: [50, 30, 15, 5],
              backgroundColor: ["#00ffa2", "#00d9ff", "#ffb700", "#ff4d4d"],
              borderWidth: 1,
            },
          ],
        },
        options: {
          plugins: { legend: { labels: { color: "#fff" } } },
        },
      });

      const calcForm = document.getElementById("calcForm");
      const calcResult = document.getElementById("calcResult");

      calcForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const coin = document.getElementById("coin").value.trim();
        const buy = parseFloat(document.getElementById("buyPrice").value);
        const current = parseFloat(
          document.getElementById("currentPrice").value
        );
        const qty = parseFloat(document.getElementById("quantity").value);

        if (
          !coin ||
          isNaN(buy) ||
          isNaN(current) ||
          isNaN(qty) ||
          buy <= 0 ||
          current <= 0 ||
          qty <= 0
        ) {
          calcResult.innerHTML = `<p class="loss">❌ Please enter all valid inputs.</p>`;
          return;
        }

        const totalCost = buy * qty;
        const currentValue = current * qty;
        const difference = currentValue - totalCost;
        const percent = ((difference / totalCost) * 100).toFixed(2);

        if (difference > 0) {
          calcResult.innerHTML = `<p class="profit">🟢 Profit: $${difference.toFixed(
            2
          )} (+${percent}%)</p>`;
        } else if (difference < 0) {
          calcResult.innerHTML = `<p class="loss">🔻 Loss: $${Math.abs(
            difference
          ).toFixed(2)} (${percent}%)</p>`;
        } else {
          calcResult.innerHTML = `<p>No profit, no loss.</p>`;
        }
      });

      document
        .getElementById("clearBtn")
        .addEventListener("click", function () {
          document.getElementById("coin").value = "";
          document.getElementById("buyPrice").value = "";
          document.getElementById("currentPrice").value = "";
          document.getElementById("quantity").value = "";
          calcResult.innerHTML = "";
        });