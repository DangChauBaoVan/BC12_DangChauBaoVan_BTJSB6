var tinhGiaiThua= function (n){
    var ketQua=1;
    if (n == 1 || n ==0) return 1;
    for(var i =1; i<= n;i++){
        ketQua*=i;
    }
    return ketQua;
}

document.getElementById('btnCal').onclick = function() {
    var n = Number(document.getElementById('inputX').value);
    debugger
    if(n < 0){
        swal({
            title: "Sai định dạng",
            text: "N không được là số âm",
            icon: "warning",
          });
          return;
    }
    var ketQua = tinhGiaiThua(n);
    var noti = document.getElementById('noti');
    noti.style.display = 'block';
    noti.innerHTML = 'Kết Quả: ' + n +'! = '+ ketQua;
};