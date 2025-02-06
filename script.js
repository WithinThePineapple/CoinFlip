function flipCoin() {
  const coinImage = document.getElementById("coin-image");
  
  // Start the flipping animation by adding the "flipping" class
  coinImage.classList.add("flipping");
  
  // Wait 1 second for the animation to complete
  setTimeout(function() {
    // Remove the animation class so it can be triggered again later
    coinImage.classList.remove("flipping");
    
    // Determine the result: 50% chance for heads or tails
    const result = Math.random() < 0.5 ? "heads" : "tails";
    
    // Update the coin image source based on the random result
    coinImage.src = "images/" + result + ".png";
  }, 1000);
}
