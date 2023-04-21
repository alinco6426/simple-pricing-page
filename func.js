let changing = document.querySelector("#toggle-box");
 changing.addEventListener("click", function change(){
    let i = document.getElementById("change1");
    let j = document.getElementById("change2");
    let k = document.getElementById("change3");
    if(i.innerText === "$199.99"){
        i.innerText="$19.99";
    }else{
        i.innerText= "$199.99";
    }if(j.innerText === "$249.99"){
        j.innerText="$24.99";
    }else{
        j.innerText= "$249.99";
    }if(k.innerText === "$399.99"){
        k.innerText="$39.99";
    }else{
        k.innerText= "$399.99";
    }
 });