let defaultText = 'I am default Text';
let changedText = 'I am new Text';
function changeTExt() {
    var id = document.getElementById('demo');
    var id = document.getElementById('text');
    // if(id.innerHTML) {
    //     if(id.innerHTML == changedText)
    //     id.innerHTML = defaultText;
    //     else
    //     id.innerHTML = changedText;
        

    // } 
    if(id.innerHTML) {}
    else {
        id.innerHTML = defaultText;

    }
}
// function changeTExt() {
//     var id = document.getElementById('demo');
//     let text;
//     text = (id.innerHTML) ? ((id.innerHTML == changedText) ? defaultText : changedText) : defaultText
//     id.innerHTML = text;
// }
changeTExt();
