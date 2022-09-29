const certificate = document.querySelectorAll('.certi-item');
const btn = document.querySelector('.but');
var currentimg = 2;
btn.addEventListener('click',function(){
    for(var i=currentimg;i<currentimg+2;i++){
        if(certificate[i]){
            certificate[i].style.display = 'flex';
        }
    }
    currentimg+=2;
    if(currentimg>=certificate.length){
        event.target.style.display = 'none';
    }
})