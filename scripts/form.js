// Product data array
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// Function to populate product select options
function populateProductSelect() {
    const productSelect = document.getElementById('product');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        // Capitalize first letter of each word in product name
        const formattedName = product.name
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        option.textContent = formattedName;
        productSelect.appendChild(option);
    });
}

// Function to handle form submission
function handleFormSubmit(event) {
    // Get current review count from localStorage
    let reviewCount = parseInt(localStorage.getItem('reviewCount') || '0');
    // Increment review count
    reviewCount++;
    // Save back to localStorage
    localStorage.setItem('reviewCount', reviewCount);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Populate product select
    populateProductSelect();

    // Add form submission handler
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }

    // If on review page, display review count
    const totalReviewsElement = document.getElementById('totalReviews');
    if (totalReviewsElement) {
        const reviewCount = localStorage.getItem('reviewCount') || '0';
        totalReviewsElement.textContent = reviewCount;
    }
});
