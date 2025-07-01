 const ctx = document.getElementById("priceChart").getContext("2d");
          new Chart(ctx, {
            type: "line",
            data: {
              labels: ["1D", "1W", "1M", "3M", "1Y", "ALL"],
              datasets: [
                {
                  label: "BTC Price",
                  data: [36000, 41000, 40000, 39000, 42000, 43800],
                  borderColor: "#00ffa2",
                  tension: 0.4,
                  fill: false,
                },
              ],
            },
            options: {
              plugins: { legend: { display: false } },
              scales: {
                x: { ticks: { color: "#ccc" } },
                y: { ticks: { color: "#ccc" } },
              },
            },
          });
