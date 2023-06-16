// В post-details.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в post-details.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку post-details.html, котра має детальну інфорацію про об'єкт на який клікнули

fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) =>res.json())
    .then((users) => {
let block = document.getElementsByClassName('wrap')[0];
        for (const user of users) {
            let user_block = document.createElement('div');
            user_block.innerText=`#${user.id} - ${user.name}`
            user_block.classList.add('user')
            block.appendChild(user_block);

            let button = document.createElement('button');
            button.innerText='More info'
            user_block.appendChild(button)

            button.onclick = () => {
             location.href=`../user-info/user-details.html?userId=${user.id}`
            }
        }
})