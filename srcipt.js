let textarea =document.getElementById("text");
let result=document.getElementById("result");
let select =document.getElementById("select");
var app=document.getElementById("app");

//if(screen.height>600)
function make_result(){
    if(select.value=="encode"){
        result.value= btoa(textarea.value);

    }
    else{
        result.value= atob(textarea.value);
    }

}
textarea.addEventListener("input",()=>{
make_result();
});
select.addEventListener("change",()=>{
    make_result();
});

