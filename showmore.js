const certificate = document.querySelectorAll('.certi-item');
const btn = document.querySelector('.but');
const btntwo = document.querySelector('.show-less');
var currentimg = 2;
btn.addEventListener('click',function(){
    for(var i=currentimg;i<currentimg+2;i++){
        if(certificate[i]){
            certificate[i].style.display = 'flex';
        }
    }
    currentimg+=2;
    if(currentimg>=certificate.length){
        btntwo.style.display = 'flex';
        btn.style.display = 'none';
    }
})

btntwo.addEventListener('click',function(){
    for(var j=currentimg;j>=2;j--){
        if(certificate[j]){
            certificate[j].style.display = 'none';
            certificate[j].classList.remove('show');
        }
    }
    btn.style.display = 'flex';
    btntwo.style.display = 'none';
    currentimg = 2;
})