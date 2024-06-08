//U20026580
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('feedbackForm');
    const displayArea = document.getElementById('displayArea');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
//Validate all fields are complete
        const name = document.getElementById('name').value.trim();
        const rating = document.getElementById('rating').value.trim();
        const comments = document.getElementById('comments').value.trim();

        if (name === '' || rating === '' || comments === ''){
            alert('Please fill out all fields.');
            return;
        }
//Append feedback to display area
        const feedbackItem = document.createElement('div');
        feedbackItem.className = 'feedback-item';
        feedbackItem.innerHTML = '<strong>Name:</strong> ${name}<br>'
        '<strong>Rating:</strong> ${email} <br>'
        '<strong?Comments:</strong> ${comments}';
        displayArea.appendChild(feedbackItem);
// Clear the form fields
        form.reset();
    });
})

//Elements to display feedback
const feedbackItem = document.createElement('div');
feedbackItem.className = 'feedback-item';

const nameElement = document.createElement('p');
nameElement.innerHTML = '<strong>Name:</strong> ${name}';
feedbackItem.appendChild(nameElement);

const ratingElement = document.createElement('p');
ratingElement.innerHTML = '<strong>Rating:</strong> ${rating}'
feedbackItem.appendChild(ratingElement);

const commentsElement = document.createElement('p');
commentsElement.innerHTML = '<strong>Comments:</strong> ${comments}'
feedbackItem.appendChild(commentsElement)
