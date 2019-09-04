// feed = {
//     user,
//     value,
//     id,
//     timestamp,
//     timeZoneOffset,
//     likes
// }

$(document).ready(() => {
    // const addCommentBtn = document.querySelector('.add-comment-btn')
    // const commentInputContainer = document.querySelector('.comment-input__container');
    // const commentInput = document.querySelector('.comment-input__form-input');
    // const commentInputSubmitBtn = document.querySelector('.comment-input__form-input-btn');
    // const feedCount = document.querySelector('.feed__count');
    // const likeBtn = document.querySelector('.like-btn');

    const $addCommentBtn = $('.add-comment-btn');
    const $commentInputContainer = $('.comment-input__container');
    const $commentInput = $('.comment-input__form-input');
    const $commentInputSubmitBtn = $('.comment-input__form-input-btn');
    const $feedCardWrapper = $('.feed-card__wrapper');
    const $feedCount = $('.feed__count');
    // let userData, userImgs;

    const fetchData = (url, obj) => {
        return fetch(url).then(res => res.json()); //.then(data => data.feed); //.then(data => data.feed[1]); // JSON.stringify(data)).then(dataFeed => dataFeed);
    }

    // const likeBtnClick = () => {
    //     const $likeBtn = $('.like-btn');

    //     $likeBtn.click(() => {
    //         // console.log('liked!');
    //         let liked = '<i class="fas fa-thumbs-up"></i>';
    //         let notLiked = '<i class="far fa-thumbs-up"></i>';
    //         let dataPrefix = this.children('svg').data('prefix');
    //         console.log(this.children('svg').data('prefix') == 'far' ? 'not liked' : 'liked') //.firstChild.at('prefix') == 'fas');

    //         // dataPrefix == 'far' ? likeBtn.children('svg').data('prefix', 'fas') : likeBtn.children('svg').data('prefix', 'far');
    //         dataPrefix === 'far' ? this.html(liked) : this.html(notLiked);
    //         console.log(this.children('svg').data('prefix') == 'far' ? 'not liked' : 'liked') //.firstChild.at('prefix') == 'fas');
    //     })
    // }

    const buildList = () => {

        // let avatar = fetchData('https://randomuser.me/api/?inc=picture').then(data => data.results[0].picture.thumbnail)
        
        fetchData('./data.json').then(data => {
            console.log(data.feed)
            let feed = data.feed;
            feed.map(user => $feedCardWrapper.append(buildListItem(user)));
            
        })

        // .then(feed => {
        //     console.log(feed.length())
        //     $feedCount.html(feed.len);
            
        // });

        // likeBtnClick();
        // fetchData('./data.json').then(data => data.feed);
    }

    // fetchData('https://randomuser.me/api/?inc=picture').then(data => console.log(data.results[0].picture.thumbnail))

    const buildListItem = (obj,) => {
        console.log(obj);
        let user = {
            ...obj,
            thumb: `https://randomuser.me/api/portraits/thumb/men/${Math.floor((Math.random() * 99) + 1)}.jpg`
        };
        console.log(user);

        // let {
        //     thumbnail
        // } = fetchData('https://randomuser.me/api/?inc=picture');

        // console.log(fetchData('./data.json'));
        // console.log(thumbnail);

        return `
            <div class="card my-4 feed-card">
                <h5 class="card-header feed-card__header">
                    <img src="${user.thumb}" alt="Avatar for ${user.user}" class="feed-card__user-avatar">
                    <span class="feed-card__user-name">${user.user}</span>
                </h5>
                <div class="card-body feed-card__body">
                    <h5 class="card-title feed-card__title">Special title treatment</h5>
                    <p class="card-text feed-card__body-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div class="card-footer text-muted feed-card__footer">
                    <p class="feed-item__likes py-0 my-0">
                        <button class="like-btn">
                            <i class="far fa-thumbs-up"></i>
                        </button>
                    </p>
                </div>
            </div>
        `;
    }

    buildList();
    // buildComponent();

    // fetchData('./data.json').then(data => console.log(data.feed));

    // fetchData('./data.json').then(data => userData = data);
    // console.log(userData);
    // let userImgs = fetchData('https://randomuser.me/api/');

    

    $addCommentBtn.click(() => {
        $($commentInputContainer).removeClass('d-none slide-out').addClass('d-block slide-in');
    })

    $commentInputSubmitBtn.click((e) => {
        e.preventDefault();
        let newComment = $commentInput.value;
        console.log(newComment);

        let user = {
            user: fetchData('https://randomuser.me/api/?inc=name'),
            value: $commentInput.value,
            id: fetchData('https://randomuser.me/api/?inc=id'),
            timestamp: new Date().getTime(),
            timeZoneOffset: new Date().getTimezoneOffset(),
            likes: 0,
            thumb: fetchData('https://randomuser.me/api/?inc=picture')
        }


        $commentInputContainer.removeClass('d-block slide-in').addClass('d-none slide-out');
        buildListItem(user);
    });

    $feedCardWrapper.on('click', '.like-btn', () => {
        const $likeBtn = $('.like-btn');
        let liked = '<i class="fas fa-thumbs-up"></i>';
        let notLiked = '<i class="far fa-thumbs-up"></i>';
        let dataPrefix = $likeBtn.children('svg').data('prefix');
        dataPrefix === 'far' ? $likeBtn.html(liked) : $likeBtn.html(notLiked);
    })
    
});