function myFunction(x) {
    x.classList.toggle("change");
}

// // Elements selection
// const hamburgerMenu = document.querySelector('.container');
// const navLinks = document.querySelector('nav');
// const header = document.querySelector('header');

// // Event listener for hamburger menu click
// hamburgerMenu.addEventListener('click', function () {
//     // Call myFunction to toggle the menu animation
//     myFunction(this);

//     // Toggle visibility of header elements
//     header.querySelector('h1').style.display = 'none';
//     header.querySelector('.container').style.display = 'none';

//     // Toggle showNav class on header and show class on nav
//     header.classList.toggle('showNav');
//     navLinks.classList.toggle('show');

//     // Create a close button
//     createCloseButton();
// });

// // Event listener for window resize
// window.addEventListener('resize', function () {
//     if (this.window.innerWidth >= 1050) {
//         // Show nav links and hide the hamburger menu on wide screens
//         header.querySelector('.container').style.display = 'none';
//         navLinks.classList.add('show');
//         header.classList.remove('showNav');
//         header.querySelector('h1').style.display = 'block';
//     } else {
//         // Show the hamburger menu and hide nav links on smaller screens
//         header.querySelector('.container').style.display = 'block';
//         navLinks.classList.remove('show');
//     }
// });

// // Function to create a close button dynamically
// function createCloseButton() {
//     // Check if the close button already exists
//     if (document.querySelector('.close-btn')) return;

//     // Create a new button element
//     const closeButton = document.createElement('button');
//     closeButton.textContent = 'Close';
//     closeButton.classList.add('close-btn');
//     closeButton.style.position = 'absolute';
//     closeButton.style.top = '10px';
//     closeButton.style.right = '20px';
//     closeButton.style.backgroundColor = '#333';
//     closeButton.style.color = '#fff';
//     closeButton.style.border = 'none';
//     closeButton.style.padding = '10px';
//     closeButton.style.cursor = 'pointer';

//     // Append the close button to the header
//     header.appendChild(closeButton);

//     // Event listener for the close button click
//     closeButton.addEventListener('click', function () {
//         // Toggle visibility of header elements
//         header.querySelector('h1').style.display = 'block';
//         header.querySelector('.container').style.display = 'block';

//         // Toggle showNav class on header and show class on nav
//         header.classList.remove('showNav');
//         navLinks.classList.remove('show');

//         // Remove the close button
//         closeButton.remove();
//     });
// }


function myFunction(x) {
    x.classList.toggle("change");
}

// Elements selection
const hamburgerMenu = document.querySelector('.container');
const navLinks = document.querySelector('nav');
const header = document.querySelector('header');

// Event listener for hamburger menu click
hamburgerMenu.addEventListener('click', function () {
    // Call myFunction to toggle the menu animation
    myFunction(this);

    // Toggle the visibility of the navigation links
    navLinks.classList.toggle('show');
});

// Event listener for window resize
window.addEventListener('resize', function () {
    if (this.window.innerWidth >= 1050) {
        // Show nav links and hide the hamburger menu on wide screens
        header.querySelector('.container').style.display = 'none';
        navLinks.classList.add('show');
    } else {
        // Show the hamburger menu and hide nav links on smaller screens
        header.querySelector('.container').style.display = 'block';
        navLinks.classList.remove('show');
    }
});