const priceElement = document.getElementById('item-price');
  const updatePriceButton = document.getElementById('update-price-button');

  updatePriceButton.addEventListener('click', async () => {
    let currentPrice = parseFloat(priceElement.textContent.replace('$', ''));

    try {
      const response = await fetch('/api/prices/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ price: currentPrice })
      });

      if (!response.ok) {
        throw new Error('Failed to update price');
      }

      const { updatedPrice } = await response.json();
      currentPrice = updatedPrice;
      priceElement.textContent = ${currentPrice.toFixed(2)};
    } catch (error) {
      console.error(error);
      alert('Failed to update price. Please try again later.');
    }
  })