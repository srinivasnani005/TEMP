var btn = document.querySelector('.btn');
var btnvalue = document.querySelector('.btnvalue');
let count = 0;
btn.addEventListener('click', function() {
    count++;
    btnvalue.innerHTML = count;
})