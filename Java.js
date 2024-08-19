document.querySelectorAll('.case-study').forEach(function(div) {
    div.addEventListener('mouseover', function() {
        div.classList.add('highlight');
    });
    div.addEventListener('mouseout', function() {
        div.classList.remove('highlight');
    });
});