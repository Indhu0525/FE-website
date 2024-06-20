document.getElementById('transitionButton').addEventListener('click', function() {
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
        content.classList.toggle('transition');
    });
});