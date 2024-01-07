function Clear(){
    document.getElementById('result').value = '';
}
function del(){
    var result = document.getElementById("result").value;
    document.getElementById("result").value=result.substring(0,result.length-1);
}

function display(value){
    document.getElementById("result").value += value;
}

function operator(symbol){
    var result = document.getElementById('result').value;
    if (result !== ''){
        document.getElementById('result').value += symbol;
    }
}

function Calculate() {
    var result = document.getElementById('result').value;
    if (result !== '') {
        document.getElementById('result').value = eval(result);
    }
}