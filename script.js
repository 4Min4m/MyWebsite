document.getElementById('recommendation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const recommendationText = document.querySelector('textarea').value;
    if (recommendationText) {
        const newRecommendation = document.createElement('p');
        newRecommendation.textContent = recommendationText;
        document.querySelector('.recommendation-list').appendChild(newRecommendation);
        alert('Thank you for your recommendation!');
        document.querySelector('textarea').value = '';
    }
});
