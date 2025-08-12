var a,b,c,op;
function display(val){
    document.getElementById("res").value+=val;
}
function clean(){
    document.getElementById("res").value="";
}
function operation(o){
    a=Number(document.getElementById("res").value);
    op=o;
    clean();
}
function result(){
    b=Number(document.getElementById("res").value);
    switch(op){
        case '+' : c=a+b;
        break;
        case '-' : c=a-b;
        break;
        case '*' : c=a*b;
        break;
        case '/' : c=a/b;
        break;

    }
    document.getElementById("res").value=c;
}

