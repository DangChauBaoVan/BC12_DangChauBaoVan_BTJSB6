var tinhSoMu = function (coSo,soMu){
    var ketQua=1;
    for(var i = 1;i<=soMu;i++){
        ketQua *= coSo;
    }
    if((coSo < 0) && (soMu % 2 == 0)){
        return ketQua*(-1);
    }else{
         return ketQua;
    }
}

document.getElementById('btnCal').onclick = function() {
    var x = Number(document.getElementById('inputX').value);
    var n = Number(document.getElementById('inputN').value);
    debugger
    if(n <= 0){
        swal({
            title: "Sai định dạng",
            text: "N phải lớn hơn 0",
            icon: "warning",
          });
          return;
    }
    var sum = 0;
    for(var i=1; i<= n;i++){
        sum+= tinhSoMu(x,i);
    }
    var noti = document.getElementById('noti');
    noti.style.display = 'block';
    noti.innerHTML = 'Kết Quả: ' + sum;
};