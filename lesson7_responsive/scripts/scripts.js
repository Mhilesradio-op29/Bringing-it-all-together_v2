// Display current time and date in header
document.addEventListener("DOMContentLoaded", () => {
  const dt = new Date();
  const formatted = dt.toLocaleString();
  document.getElementById("datetime").textContent = `Current time: ${formatted}`;
});
