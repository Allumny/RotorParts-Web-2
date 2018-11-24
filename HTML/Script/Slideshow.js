var myIndex = 1;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("ehoSlide");
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 1250);
}
