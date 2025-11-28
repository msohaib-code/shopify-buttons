// custom-third-button.js
document.addEventListener("DOMContentLoaded", () => {
    // Only run on product pages
    if (!window.location.pathname.includes("/products/")) return;
  
    // Avoid creating duplicate buttons
    if (document.querySelector(".custom-third-button")) return;
  
    // Target the product form container or fallback to body
    const container =
      document.querySelector(".product-form") ||
      document.querySelector(".product-form__container") ||
      document.body;
  
    // Create the button
    const button = document.createElement("button");
    button.className = "button button-tertiary custom-third-button";
    button.textContent = "Special Button";
  
    // Inline styles
    button.style.marginTop = "10px";
    button.style.backgroundColor = "#555";
    button.style.color = "#fff";
    button.style.padding = "10px 16px";
    button.style.border = "none";
    button.style.borderRadius = "4px";
    button.style.cursor = "pointer";
  
    button.addEventListener("mouseover", () => (button.style.backgroundColor = "#333"));
    button.addEventListener("mouseout", () => (button.style.backgroundColor = "#555"));
  
    // Click action
    button.addEventListener("click", () => {
      console.log("Special Button clicked!");
      alert("Special Button Clicked!");
      // Optional: redirect or call API
      // window.location.href = "/collections/all";
    });
  
    // Append the button to the container
    container.appendChild(button);
  
    // Optional: API check to hide/show button
    const productId = container.dataset.productId || new URLSearchParams(window.location.search).get("product_id");
    if (productId) {
      fetch(`https://your-valid-api.com/check-condition?product_id=${productId}`)
        .then(res => res.json())
        .then(data => {
          if (!data.showButton) button.style.display = "none";
        })
        .catch(err => {
          console.error("API error:", err);
          // fallback: show button if API fails
          button.style.display = "inline-block";
        });
    }
  });
  