let picture=document.getElementById('img');
function init(){
    picture=document.getElementById('img');
    picture.style.position='relative';
    picture.style.left='0px';
    picture.style.top='0px';
}
function totheleft(){
    picture.style.left=parseInt(picture.style.left)+10+'px';
}
function totheright(){
    picture.style.left=parseInt(picture.style.left)-10+'px';
}
function goup(){
    picture.style.top=parseInt(picture.style.top)-10+'px';
}
function down(){
    picture.style.top=parseInt(picture.style.top)+10+'px';
}
window.onload=init;