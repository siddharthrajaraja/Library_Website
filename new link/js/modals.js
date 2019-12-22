
        
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function(){
        location.reload();
    }
     
    window.onclick = function(event){
        if (event.target == document.getElementById('myModal')) {
            location.reload();
        }
    }