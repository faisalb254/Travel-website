function nav1(){
    var toggle = document.getElementById("navlist");
    if (toggle.style.display === 'none') {
    toggle.style.display = 'block';
} else {
    toggle.style.display = 'none';
}
}
function func1(){
    document.getElementById("but1").style.backgroundColor='#ffa500';
    document.getElementById("but2").style.backgroundColor='#5d5d5d';
    document.getElementById("but3").style.backgroundColor='#5d5d5d';

    document.getElementById("t1").style.display= "block";
    document.getElementById("t2").style.display= "none";
    document.getElementById("t3").style.display= "none";

}
function func2(){
    document.getElementById("but1").style.backgroundColor='#5d5d5d';
    document.getElementById("but2").style.backgroundColor='#ffa500';
    document.getElementById("but3").style.backgroundColor='#5d5d5d';

    document.getElementById("t1").style.display= "none";
    document.getElementById("t2").style.display= "block";
    document.getElementById("t3").style.display= "none";
}
function func3(){
    document.getElementById("but1").style.backgroundColor='#5d5d5d';
    document.getElementById("but2").style.backgroundColor='#5d5d5d';
    document.getElementById("but3").style.backgroundColor='#ffa500';

    document.getElementById("t1").style.display= "none";
    document.getElementById("t2").style.display= "none";
    document.getElementById("t3").style.display= "block";
}