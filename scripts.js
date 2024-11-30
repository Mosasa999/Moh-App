function showMenu(restaurentId) {
    document.getElementById('menu').style.display = "block";

    
}
function calculateTotal() {
    const quantity = document.getElementById("quantity1").ariaValueMax;
    const pricePerItem = 5000;
    const totalAmount = quantity * pricePerItem;
    document.getElementById("totalAmount").textContent = "Total: Tsh" + totalAmount;
    
}

function bookingDelivery() {
    const paymentMethod = document.getElementById("paymentMethod").ariaValueMax;
    alert("Umefanikiwa kuweka booking kwa malipo kupitia " + paymentMethod);
    
}