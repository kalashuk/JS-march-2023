// В post-details.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в post-details.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку post-details.html, котра має детальну інфорацію про об'єкт на який клікнули
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)


let userId = new URL(location.href).searchParams.get('userId');
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((res) => res.json())
    .then((user) => {
        console.log(user)


        let block = document.getElementsByClassName('wrap')[0];
        let ul = document.createElement('ul');
        // let button = document.createElement('button');
        // button.innerText = 'post of details'

        recursiveBuild(user, ul)

        block.appendChild(ul);



    })

function displayTitles(posts) {
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    posts.forEach(post => {
        let title = post.title;
        let titleDiv = document.createElement('div');
        titleDiv.textContent = title;
        resultDiv.appendChild(titleDiv);
    });
}

let postTitleId = new URL(location.href).searchParams.get('postTitleId');


function liCreator(key, value, parent) {
    let li = document.createElement('li');
    li.innerHTML = `<b>${key}:</b> ${value}`;
    parent.appendChild(li);

}

function ulBuilder(key, object, parent) {
    let li = document.createElement('li');
    let ul = document.createElement('ul');
    li.innerHTML = `<b>${key}:</b>`;

    parent.appendChild(li)
    li.appendChild(ul)
    recursiveBuild(object, ul, displayTitles)

}

function recursiveBuild(object, parent) {
    for (const key in object) {
        typeof object[key] === 'object'
            ? ulBuilder(key, object[key], parent)
            : liCreator(key, object[key], parent)
    }
}


let btnDiv = document.createElement('div')
btnDiv.classList.add('buttonDiv')
let btn = document.createElement('button')
btn.classList.add('button')
btn.innerText = 'Post of current user'
btnDiv.appendChild(btn)
document.body.appendChild(btnDiv)

btn.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(response => response.json())
        .then(posts => {

            let ul = document.createElement('ul')
            ul.classList.add('wrapPosts')

            for (const post of posts) {
                let li = document.createElement('li')
                let a = document.createElement('a')

                a.innerText = 'Info of post'
                a.href = `../post-info/post-details.html?id=${post.id}`
                a.classList.add("a")
                li.innerHTML = 'Title: ' + post.title
                li.classList.add('post')
                li.appendChild(a)
                ul.append(li)

            }
            document.body.appendChild(ul)
        })
}

