var links = document.getElementsByTagName('a');
var modal = document.getElementById('modal');

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
        modal.style.display = 'block';
    });
}

var close = document.getElementById('close');

close.addEventListener('click', function () {
    modal.style.display = 'none';
});