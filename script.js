// Your business WhatsApp number (use international format, without '+')
const businessNumber = '27739226892'; // Example: 073 922 6892 becomes 27739226892

// Select all order buttons
const buttons = document.querySelectorAll('.order-btn');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Find the parent menu-item div and get its data-name
        const menuItem = this.closest('.menu-item');
        const itemName = menuItem.dataset.name;
        const itemPrice = menuItem.dataset.price;

        // Create the message
        const message = `Hello, I would like to order the ${itemName} (R${itemPrice}).`;

        // Encode for URL
        const encodedMessage = encodeURIComponent(message);

        // Create WhatsApp URL
        const whatsappUrl = `https://wa.me/${businessNumber}?text=${encodedMessage}`;

        // Open in a new tab
        window.open(whatsappUrl, '_blank');
    });
});

// Optional: make phone numbers clickable to call
const phoneNumbers = document.querySelectorAll('.contact p:nth-child(2), .contact p:nth-child(3), .contact p:nth-child(4)');
phoneNumbers.forEach(phone => {
    phone.addEventListener('click', function() {
        // Extract digits only
        const number = this.innerText.replace(/\s/g, '');
        window.location.href = `tel:${number}`;
    });
});