// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = post-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

function getUsers() {
    fetch('http://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            let userList = document.getElementById('users-list');
            users.forEach(user => {
                let listItem = document.createElement('li');
                let link = document.createElement('a');

                link.href = `https://jsonplaceholder.typicode.com/users/${user.id}`;
                link.textContent = `${user.id} - ${user.name}`;
                listItem.appendChild(link);
                userList.appendChild(listItem);
            });
        })
}

getUsers();