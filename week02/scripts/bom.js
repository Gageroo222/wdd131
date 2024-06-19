const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function() {
    const inputValue = input.value.trim();
    if (inputValue !== '') {
        const li = document.createElement('li');
        li.textContent = inputValue;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';

        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', function () {
             list.removeChild(li);
             input.focus();
        });
    }

    input.value = '';
    input.focus();

});