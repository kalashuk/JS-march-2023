// В post-details.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в post-details.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку post-details.html, котра має детальну інфорацію про об'єкт на який клікнули
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let url = new URL(location.href)
let id = url.searchParams.get('id')
fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(post => {
            for (const postKey in post) {
                let mainDiv = document.createElement('div')
                mainDiv.classList.add("mainDiv")
                mainDiv.innerHTML = `<b>${postKey}:</b> ${post[postKey]}`
                document.body.append(mainDiv)
            }
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
                .then(response => response.json())
                .then(comments => {

                        let div = document.createElement('div')
                        div.classList.add("div")
                        let h2 = document.createElement('h2')
                        h2.classList.add('title')
                        div.append(h2)
                        document.body.append(div)

                        let postWrap = document.createElement('div')
                            postWrap.classList.add('postWrap')
                        for (const comment of comments) {
                            let div = document.createElement('div')
                            div.innerHTML = `<b>${comment.email}: </b> ${comment.name}`
                            div.classList.add('comment')
                            postWrap.append(div)
                            document.body.append(postWrap)
                        }
                    }

                )

        }
    )