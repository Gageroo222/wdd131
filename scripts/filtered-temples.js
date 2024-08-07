// document.addEventListener("DOMContentLoaded", function () {
//   const hamburgerMenu = document.getElementById("hamburger-menu");
//   const navLinks = document.getElementById("nav-links");

//   hamburgerMenu.addEventListener("click", function () {
//       navLinks.classList.toggle("show");
//   });

//   window.addEventListener("resize", function () {
//       if (window.innerWidth >= 1050) {
//           navLinks.classList.remove("show");
//       }
//   });

//   const temples = [
//       {
//           templeName: "Aba Nigeria",
//           location: "Aba, Nigeria",
//           dedicated: "2005, August, 7",
//           area: 11500,
//           imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
//       },
      // {
      //     templeName: "Manti Utah",
      //     location: "Manti, Utah, United States",
      //     dedicated: "1888, May, 21",
      //     area: 74792,
      //     imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
      // },
      // {
      //     templeName: "Payson Utah",
      //     location: "Payson, Utah, United States",
      //     dedicated: "2015, June, 7",
      //     area: 96630,
      //     imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
      // },
      // {
      //     templeName: "Yigo Guam",
      //     location: "Yigo, Guam",
      //     dedicated: "2020, May, 2",
      //     area: 6861,
      //     imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
      // },
      // {
      //     templeName: "Washington D.C.",
      //     location: "Kensington, Maryland, United States",
      //     dedicated: "1974, November, 19",
      //     area: 156558,
      //     imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
      // },
      // {
      //     templeName: "Lima Perú",
      //     location: "Lima, Perú",
      //     dedicated: "1986, January, 10",
      //     area: 9600,
      //     imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
      // },
      // {
      //     templeName: "Mexico City Mexico",
      //     location: "Mexico City, Mexico",
      //     dedicated: "1983, December, 2",
      //     area: 116642,
      //     imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
      // },
      // {
      //     templeName: "Mesa Arizona",
      //     location: "Mesa, Arizona",
      //     dedicated: "1927, October, 23",
      //     area: 85204,
      //     imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mesa-arizona/400x250/mesa_arizona_temple_main.jpeg"
      // },
      // {
      //     templeName: "Gilbert Arizona",
      //     location: "Gilbert, Arizona",
      //     dedicated: "2014, March, 2",
      //     area: 85297,
      //     imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/gilbert-arizona/400x250/gilbert-arizona-lds-temple-1172166-wallpaper.jpg"
      // },
      // {
      //     templeName: "Columbia South Carolina",
      //     location: "Columbia, South Carolina",
      //     dedicated: "1999, October, 16",
      //     area: 29061,
      //     imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/columbia-south-carolina/400x250/columbia-temple-768161-wallpaper.jpg"
      // }
//   ];

//   const templeLayout = document.getElementById('temple-layout');
//   const mainTitle = document.getElementById('main-title');

//   function displayTemples(filteredTemples) {
//       templeLayout.innerHTML = ''; // Clear current temple cards
//       filteredTemples.forEach(temple => {
//           const templeCard = document.createElement('div');
//           templeCard.className = 'temple-card';
//           templeCard.innerHTML = `
//               <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
//               <h3>${temple.templeName}</h3>
//               <p>${temple.location}</p>
//               <p>Dedicated: ${temple.dedicated}</p>
//               <p>Area: ${temple.area} sq ft</p>
//           `;
//           templeLayout.appendChild(templeCard);
//       });
//   }

//   // Display all temples by default (Home)
//   displayTemples(temples);

//   document.getElementById('home').addEventListener('click', () => {
//       mainTitle.textContent = 'Home';
//       displayTemples(temples);
//   });

//   document.getElementById('old').addEventListener('click', () => {
//       mainTitle.textContent = 'Old Temples';
//       const filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
//       displayTemples(filteredTemples);
//   });

//   document.getElementById('new').addEventListener('click', () => {
//       mainTitle.textContent = 'New Temples';
//       const filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
//       displayTemples(filteredTemples);
//   });

//   document.getElementById('large').addEventListener('click', () => {
//       mainTitle.textContent = 'Large Temples';
//       const filteredTemples = temples.filter(temple => temple.area > 90000);
//       displayTemples(filteredTemples);
//   });

//   document.getElementById('small').addEventListener('click', () => {
//       mainTitle.textContent = 'Small Temples';
//       const filteredTemples = temples.filter(temple => temple.area < 10000);
//       displayTemples(filteredTemples);
//   });
// });



document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navLinks = document.getElementById("nav-links");

  hamburgerMenu.addEventListener("click", function () {
      navLinks.classList.toggle("show");
  });

  window.addEventListener("resize", function () {
      if (window.innerWidth >= 1050) {
          navLinks.classList.remove("show");
      }
  });

  const temples = [
      {
          templeName: "Aba Nigeria",
          location: "Aba, Nigeria",
          dedicated: "2005, August, 7",
          area: 11500,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
      },
      {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Mesa Arizona",
        location: "Mesa, Arizona",
        dedicated: "1927, October, 23",
        area: 85204,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mesa-arizona/400x250/mesa_arizona_temple_main.jpeg"
    },
    {
        templeName: "Gilbert Arizona",
        location: "Gilbert, Arizona",
        dedicated: "2014, March, 2",
        area: 85297,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/gilbert-arizona/400x250/gilbert-arizona-lds-temple-1172166-wallpaper.jpg"
    },
    {
        templeName: "Columbia South Carolina",
        location: "Columbia, South Carolina",
        dedicated: "1999, October, 16",
        area: 29061,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/columbia-south-carolina/400x250/columbia-temple-768161-wallpaper.jpg"
    }
  ];

  const templeLayout = document.getElementById('temple-layout');
  const mainTitle = document.getElementById('main-title');

  function displayTemples(filteredTemples) {
      templeLayout.innerHTML = ''; // Clear current temple cards
      filteredTemples.forEach(temple => {
          const templeCard = document.createElement('div');
          templeCard.className = 'temple-card';
          templeCard.innerHTML = `
              <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
              <h3>${temple.templeName}</h3>
              <p>${temple.location}</p>
              <p>Dedicated: ${temple.dedicated}</p>
              <p>Area: ${temple.area} sq ft</p>
          `;
          templeLayout.appendChild(templeCard);
      });
  }

  // Display all temples by default (Home)
  displayTemples(temples);

  document.getElementById('home').addEventListener('click', () => {
      mainTitle.textContent = 'Home';
      displayTemples(temples);
  });

  document.getElementById('old').addEventListener('click', () => {
      mainTitle.textContent = 'Old Temples';
      const filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
      displayTemples(filteredTemples);
  });

  document.getElementById('new').addEventListener('click', () => {
      mainTitle.textContent = 'New Temples';
      const filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
      displayTemples(filteredTemples);
  });

  document.getElementById('large').addEventListener('click', () => {
      mainTitle.textContent = 'Large Temples';
      const filteredTemples = temples.filter(temple => temple.area > 90000);
      displayTemples(filteredTemples);
  });

  document.getElementById('small').addEventListener('click', () => {
      mainTitle.textContent = 'Small Temples';
      const filteredTemples = temples.filter(temple => temple.area < 10000);
      displayTemples(filteredTemples);
  });
});