const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `<span>${today.getFullYear()}</span> `;

document.addEventListener('DOMContentLoaded', function() {
    var lastModifiedElement = document.getElementById('lastModified');
    var lastModifiedDate = document.lastModified;
    lastModifiedElement.textContent = 'Last Modified: ' + lastModifiedDate;});