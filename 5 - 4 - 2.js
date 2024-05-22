(function () {
    var count = 0;
    var button = document.createElement('button');
    button.innerText = 'click';
    button.addEventListener('click', function() {
        console.log(++count, 'time clicked');
    });
    document.body.appendChild(button);
})();