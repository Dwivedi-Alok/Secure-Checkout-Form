document.addEventListener("DOMContentLoaded", function () {

    const cardNumberInput = document.getElementById('cardnumber');
    const expiryMonthInput = document.getElementById('expiry-month');
    const expiryYearInput = document.getElementById('expiry-year');
    const cvvInput = document.getElementById('cvv');
    const nameInput = document.getElementById('name');
    const submitButton = document.querySelector('.checkout-btn');

    cardNumberInput.addEventListener('input', function (e) {
        let cardNumber = e.target.value.replace(/\D/g, '');
        cardNumber = cardNumber.replace(/(\d{4})(?=\d)/g, '$1 ');
        e.target.value = cardNumber;
    });

    function validateCardNumber(cardNumber) {
        return /^[0-9]{16}$/.test(cardNumber.replace(/\s/g, ''));
    }

    function validateExpiryDate(month, year) {
        const currentDate = new Date();
        const expiryDate = new Date(`20${year}-${month}-01`);
        return expiryDate >= currentDate;
    }

    function toggleSubmitButton() {
        const isValidCardNumber = validateCardNumber(cardNumberInput.value);
        const isValidExpiryDate = validateExpiryDate(expiryMonthInput.value, expiryYearInput.value);
        const isValidCVV = cvvInput.value.length === 3;
        const isValidName = nameInput.value.trim() !== '';

        if (isValidCardNumber && isValidExpiryDate && isValidCVV && isValidName) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }

    cardNumberInput.addEventListener('input', toggleSubmitButton);
    expiryMonthInput.addEventListener('change', toggleSubmitButton);
    expiryYearInput.addEventListener('change', toggleSubmitButton);
    cvvInput.addEventListener('input', toggleSubmitButton);
    nameInput.addEventListener('input', toggleSubmitButton);

    toggleSubmitButton();
    
});
document.getElementById("expiry").addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (value.length >= 3) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4); // Insert '/' after MM
    }
    e.target.value = value;
});

