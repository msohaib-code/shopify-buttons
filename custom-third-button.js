// custom-third-button.js
document.addEventListener("DOMContentLoaded", () => {
    // Find the accelerated checkout container
    const container = document.querySelector(".accelerated-checkout-block");
    if (!container) return;
  
    // Prevent duplicates
    if (container.querySelector(".custom-third-button")) return;
  
    // Create the button
    const button = document.createElement("button");
    button.className = "custom-third-button";
    button.textContent = "Special Button";
  
    // Optional: get product ID from data attribute
    const productId = container.dataset.productId || null;
  
    button.addEventListener("click", () => {
      console.log("Third button clicked!", productId);
      alert("Special Button Clicked!");
      // Optional: call API or redirect
      // window.location.href = '/collections/all';
    });
  
    // Append the button
    container.appendChild(button);
  });
  