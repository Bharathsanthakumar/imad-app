
var button=document.getElementById('2');
var counter=0;

button.onclick = function () {
    counter=counter+1;
    var span=document.getElementById('1');
    span.innerHTML(counter.toString());
}
