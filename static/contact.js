window.onkeydown=function(event){
    if(event.keyCode === 13){
        let form = document.getElementById("center");
        form.submit();

        return false; // prevent default behavior if ENTER key
    }

    return true;
}