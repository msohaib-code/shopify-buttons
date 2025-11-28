// Wait for Shopify sections & AJAX to render
function appendThirdButton() {
    const container = document.querySelector(".accelerated-checkout-block");
    if (!container) return;
  
    // Prevent duplicates
    if (container.querySelector(".custom-third-button")) return;
  
    const button = document.createElement("button");
    button.className = "custom-third-button";
    button.textContent = "Special Button";
  
    const productId = container.dataset.productId || null;
  
    button.addEventListener("click", () => {
      console.log("Third button clicked!", productId);
      alert("Special Button Clicked!");
      // Example: call your API or redirect
      // fetch(`https://your-api.com/action?product_id=${productId}`);
    });
  
    container.appendChild(button);
  }
  
  // Use DOMContentLoaded + Shopify's section:load events
  document.addEventListener("DOMContentLoaded", appendThirdButton);
  document.addEventListener("shopify:section:load", appendThirdButton);
  document.addEventListener("shopify:section:reorder", appendThirdButton);
  document.addEventListener("shopify:section:select", appendThirdButton);
  document.addEventListener("shopify:section:deselect", appendThirdButton);
  