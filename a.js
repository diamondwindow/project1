let codes = document.getElementById("codes");
let play = document.getElementById("play");
let remove = document.getElementById("remove");
let result = document.getElementById("result");

play.onclick = () =>{
    result.innerHTML=codes.value ;
    localStorage.setItem("result",codes.value)
};

remove.onclick = () =>{
    result.innerHTML= "" ;
    codes.value= "";
};
onload = ()=>{
    codes.value=localStorage.getItem("result");
    result.innerHTML=codes.value ;
}