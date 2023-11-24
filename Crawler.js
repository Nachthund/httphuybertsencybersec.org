document.addEventListener('DOMContentLoaded', function() {
    var contentElement = document.getElementById('content');
    var contentCrawlerElement = document.getElementById('content-crawler');

    // Hide the content element from users
    contentElement.style.display = 'none';

    // Show the content crawler element to users
    contentCrawlerElement.style.display = 'block';
});