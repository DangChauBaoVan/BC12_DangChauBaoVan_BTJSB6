
document.getElementById('btnCreateDiv').onclick = function() {
    var mainDiv = document.getElementById('divMain');
    mainDiv.innerHTML ='';
    for( var i = 1 ; i <= 10 ; i++){
        if( i % 2 == 0){
            mainDiv.innerHTML += `<div class='bg-primary' style='line-height:35px;'>Div chẵn ${i}</div>`
        }else{
            mainDiv.innerHTML += `<div class='bg-danger' style='line-height:35px;'>Div lẻ ${i}</div>`;
        }
    }
};