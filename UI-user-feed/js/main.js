// feed = {
//     user,
//     value,
//     id,
//     timestamp,
//     timeZoneOffset,
//     likes
// }

$(document).ready(() => {
    let addCommentBtn = document.querySelector('.add-comment-btn')
    let commentInputContainer = document.querySelector('.comment-input__container');
    let commentInput = document.querySelector('.comment-input__form-input');
    let commentInputSubmitBtn = document.querySelector('.comment-input__form-input-btn');
    
    addCommentBtn.addEventListener('click', () => {
        // console.log('added');
        // commentInputContainer.style.display = 'block';

        // commentInputContainer.classList('d-block');

        $('.commentInputContainer').removeClass('d-none').addClass('d-block');
    })

    commentInputSubmitBtn.addEventListener('click', (e) => {
        console.log('added');

        e.preventDefault();
        let newComment = commentInput.value;
        console.log(newComment);

        // commentInputContainer.style.display = 'none';
        // commentInputContainer.classList('d-none');
        $('.commentInputContainer').removeClass('d-block').addClass('d-none');


    })
});