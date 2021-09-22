var myBtn = document.getElementById('humberger-menu');
var myDiv1 = document.getElementById('div1');
var myDiv2 = document.getElementById('div2');
var myDiv3 = document.getElementById('div3');
myBtn.onclick = function () {
    myDiv1.classList.toggle('div1');
    myDiv2.classList.toggle("div2");
    myDiv3.classList.toggle("div3")

}