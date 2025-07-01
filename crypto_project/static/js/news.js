const movers = [
  { coin: "Bitcoin", price: "$70,342", change: "+5.2%" },
  { coin: "Ethereum", price: "$3,120", change: "-2.1%" },
  { coin: "Solana", price: "$165", change: "+8.6%" },
];
const topMovers = document.getElementById("topMovers");
movers.forEach((m) => {
  const li = document.createElement("li");
  const cls = m.change.startsWith("+") ? "price-up" : "price-down";
  li.innerHTML = `<strong>${m.coin}</strong> — ${m.price} <span class="${cls}">(${m.change})</span>`;
  topMovers.appendChild(li);
});

// ✅ Search Filter for news
const searchInput = document.getElementById("newsSearch");
const searchList = document.getElementById("searchResults");
searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  searchList.innerHTML = "";
  if (query === "") return;
  document.querySelectorAll(".card ul li").forEach((item) => {
    if (item.textContent.toLowerCase().includes(query)) {
      const li = document.createElement("li");
      li.textContent = item.textContent;
      searchList.appendChild(li);
    }
  });
});

// ✅ Candlestick Chart Data
const candlestickData = {
  btc: [
    { x: new Date(2024, 5, 1), y: [70500, 71000, 70000, 70800] },
    { x: new Date(2024, 5, 2), y: [70800, 71500, 70500, 71000] },
    { x: new Date(2024, 5, 3), y: [71000, 71200, 70700, 70950] },
    { x: new Date(2024, 5, 4), y: [70950, 71500, 70800, 71200] },
    { x: new Date(2024, 5, 5), y: [71200, 71700, 71000, 71600] },
  ],
  eth: [
    { x: new Date(2024, 5, 1), y: [3050, 3120, 3000, 3090] },
    { x: new Date(2024, 5, 2), y: [3090, 3150, 3070, 3100] },
    { x: new Date(2024, 5, 3), y: [3100, 3160, 3090, 3120] },
    { x: new Date(2024, 5, 4), y: [3120, 3180, 3100, 3150] },
    { x: new Date(2024, 5, 5), y: [3150, 3200, 3130, 3180] },
  ],
  sol: [
    { x: new Date(2024, 5, 1), y: [150, 160, 145, 158] },
    { x: new Date(2024, 5, 2), y: [158, 165, 155, 160] },
    { x: new Date(2024, 5, 3), y: [160, 168, 158, 165] },
    { x: new Date(2024, 5, 4), y: [165, 172, 160, 170] },
    { x: new Date(2024, 5, 5), y: [170, 175, 168, 172] },
  ],
};

// ✅ Chart Rendering Logic
let currentChart;

function renderChart(coin) {
  if (currentChart) currentChart.destroy();

  currentChart = new ApexCharts(document.querySelector("#candlestickChart"), {
    chart: {
      type: "candlestick",
      height: 400,
      background: "transparent",
      toolbar: { show: false },
    },
    series: [
      {
        data: candlestickData[coin],
      },
    ],
    xaxis: {
      type: "datetime",
      labels: { style: { colors: "#ccc" } },
    },
    yaxis: {
      tooltip: { enabled: true },
      labels: { style: { colors: "#ccc" } },
    },
    tooltip: {
      theme: "dark",
    },
    grid: {
      borderColor: "rgba(255,255,255,0.05)",
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#00ffa2",
          downward: "#ff4d4d",
        },
      },
    },
  });

  currentChart.render();
}

// ✅ Dropdown Control
document.getElementById("coinSelector").addEventListener("change", function () {
  renderChart(this.value);
});

// ✅ Load default chart
renderChart("btc");
