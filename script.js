window.onload = function() {
    // Get the URL parameter for cake code
    const urlParams = new URLSearchParams(window.location.search);
    const cakeCode = urlParams.get('cake_code');
    
    // Set the cake code in the form
    if (cakeCode) {
        document.getElementById('cake_code').value = cakeCode;
    }
};