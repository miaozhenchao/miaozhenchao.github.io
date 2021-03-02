<script  language = "JavaScript"> 
document.oncontextmenu = function() {
    return false;
}
document.onkeydown = function() {
    if (event.ctrlKey && window.event.keyCode == 67) {
        return false;
    }
}
document.body.oncopy = function() {
    return false;
}
document.onselectstart = function() {
    //return false; 
} </script>