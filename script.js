
// function getRandomDelay() {
//   return Math.floor(Math.random() * 5000) + 1000; // Random time between 1 and 5 seconds
// }
window.promises = [new Promise((resolve) => setTimeout(() => resolve("Promise 1 resolved"), getRandomDelay())),
  new Promise((resolve) => setTimeout(() => resolve("Promise 2 resolved"), getRandomDelay())),
  new Promise((resolve) => setTimeout(() => resolve("Promise 3 resolved"), getRandomDelay())),
  new Promise((resolve) => setTimeout(() => resolve("Promise 4 resolved"), getRandomDelay())),
  new Promise((resolve) => setTimeout(() => resolve("Promise 5 resolved"), getRandomDelay()))];

Promise.any(promises)
  .then((result) => {
    // Print the result to the output div
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = result;
  })
  .catch((error) => {
    console.error("All promises rejected:", error);
  });
// Do not change the code above this
// add your promises to the array `promises`
