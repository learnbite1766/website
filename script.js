document.querySelector(".confirm-btn").addEventListener("click", () => {
    let selectedServices = [];
    document.querySelectorAll(".service-card input:checked").forEach((checkbox) => {
        selectedServices.push(checkbox.nextElementSibling.querySelector("h3").innerText);
    });

    if (selectedServices.length > 0) {
        alert("You have selected: " + selectedServices.join(", ") + ". Proceeding to booking.");
        // Redirect to appointment page (to be developed)
        // window.location.href = "appointment-form.html";
    } else {
        alert("Please select at least one service before proceeding.");
    }
});
