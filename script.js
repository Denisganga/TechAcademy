function selectPlan(plan) {
    alert(`Selected ${plan}!`);
    document.getElementById('payment-options').style.display = 'block';
}

function selectPayment(method) {
    alert(`Selected ${method} as the payment method!`);
    // You would typically redirect to the payment gateway here
    // or show a form to collect payment details.
}
