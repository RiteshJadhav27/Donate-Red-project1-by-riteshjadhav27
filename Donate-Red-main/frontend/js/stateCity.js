// State and City data stored directly in JS file
const stateCityData = {
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad", "Solapur"],
    "Karnataka": ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum", "Davangere"],
    "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar"],
    "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Siliguri", "Asansol", "Kharagpur"],
    "Rajasthan": ["Jaipur", "Udaipur", "Jodhpur", "Kota", "Bikaner", "Ajmer"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra", "Allahabad", "Noida"]
};

// Function to populate state and city dropdowns
function populateStateAndCity(stateSelectId, citySelectId) {
    const stateSelect = document.getElementById(stateSelectId);
    const citySelect = document.getElementById(citySelectId);

    if (!stateSelect || !citySelect) {
        console.error('State or City dropdown not found in DOM!');
        return;
    }

    // Populate state options
    for (const state in stateCityData) {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        stateSelect.appendChild(option);
    }

    // Event listener for state selection
    stateSelect.addEventListener('change', () => {
        citySelect.innerHTML = '<option value="">Select Your City</option>'; // Reset city options
        
        const selectedState = stateSelect.value;
        const cities = stateCityData[selectedState];

        if (!cities) {
            citySelect.innerHTML = '<option value="">No cities available</option>';
            return;
        }

        for (const city of cities) {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        }
    });
}

// Call function when DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
    populateStateAndCity('state', 'city');
});


