document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the current submission count from localStorage
    let submissionCount = localStorage.getItem('submissionCount');
    
    // Initialize submissionCount to 0 if it doesn't exist in localStorage
    if (submissionCount === null || submissionCount === undefined) {
        submissionCount = 0;
    } else {
        // Convert submissionCount from string to number
        submissionCount = parseInt(submissionCount);
    }
    
    // Increment the submission count for each form submission
    submissionCount += 1;
    
    // Update localStorage with the new submission count
    localStorage.setItem('submissionCount', submissionCount.toString());
    
    // Display the updated submission count on the page
    const submissionCounter = document.getElementById('submissionCounter');
    if (submissionCounter) {
        submissionCounter.textContent = submissionCount;
    }
});