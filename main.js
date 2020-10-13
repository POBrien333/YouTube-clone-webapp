
const downTickButton = document.getElementById('comment-downtick');
const upTickButton = document.getElementById('comment-uptick');
const commentListContainer = document.getElementById('comment-list-container');
const seeReponseButtons = document.querySelectorAll('.see-response-container button');

// Show/Hide comments section
downTickButton.addEventListener('click', () => {
    downTickButton.style.display = 'none';
    upTickButton.style.display = 'block';
    commentListContainer.style.display = 'block';
});

upTickButton.addEventListener('click', () => {
    downTickButton.style.display = 'block';
    upTickButton.style.display = 'none';
    commentListContainer.style.display = 'none';
});

// See responses script

seeReponseButtons.forEach(button => {
    button.addEventListener('click', () => {
        const container = button.parentElement;
        const responseList = container.nextElementSibling;

        container.style.display = 'none';
        responseList.style.display = 'block';
    });
});
