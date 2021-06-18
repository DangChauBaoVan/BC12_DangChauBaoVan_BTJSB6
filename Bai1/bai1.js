var sum = 0;
var n = 0;
while(sum <=10000){
    n++;
    sum+=n;
    
};

console.log(sum);

document.getElementById('btnCheck').onclick = function(){
    var noti = document.getElementById('noti');
    noti.style.display = 'block';
    noti.innerHTML = 'Số nguyên dương nhỏ nhất: ' + n;
}