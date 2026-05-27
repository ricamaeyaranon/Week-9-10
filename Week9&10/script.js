const orderForm = document.getElementById('orderForm');
const orderInput = document.getElementById('orderInput');
const orderList = document.getElementById('orderList');
const popup = document.getElementById('popup');
const closePopupBtn = document.getElementById('closePopupBtn');

orderForm.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const orderText = orderInput.value.trim();

  if (orderText !== "") {
    const newOrder = document.createElement('li');
    newOrder.textContent = orderText;

    orderList.appendChild(newOrder);

    orderInput.value = "";

    // 4. Ipakita ang popup confirmation
    popup.style.display = "block";
  }
});

closePopupBtn.addEventListener('click', function() {
  popup.style.display = "none";
});