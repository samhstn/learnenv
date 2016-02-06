var counter = 10;

function eng(){
    document.getElementById("home").classList.remove("hide");
    document.getElementById("show").classList.remove("hide");
    document.getElementById("next").classList.remove("hide");
    document.getElementById("prev").classList.remove("hide");
    document.getElementById("ende").classList.add("hide");
    document.getElementById("deen").classList.add("hide");
    document.getElementsByTagName("h1")[0].classList.add("hide");
    document.getElementsByTagName("h2")[0].classList.add("hide");
}
function de(){
    document.getElementById("home").classList.remove("hide");
    document.getElementById("show").classList.remove("hide");
    document.getElementById("next").classList.remove("hide");
    document.getElementById("prev").classList.remove("hide");
    document.getElementById("ende").classList.add("hide");
    document.getElementById("deen").classList.add("hide");
    document.getElementsByTagName("h1")[0].classList.add("hide");
    document.getElementsByTagName("h2")[0].classList.add("hide");
    for(i=0;i<5;i++){
        document.getElementsByClassName("german")[i].classList.remove("hide");
    }
    document.getElementById("counter").classList.remove("hide");
}
function next(){
    document.getElementsByClassName("german")[0].innerHTML=vocab[(0+counter)%400];
    document.getElementsByClassName("german")[1].innerHTML=vocab[(2+counter)%400];
    document.getElementsByClassName("german")[2].innerHTML=vocab[(4+counter)%400];
    document.getElementsByClassName("german")[3].innerHTML=vocab[(6+counter)%400];
    document.getElementsByClassName("german")[4].innerHTML=vocab[(8+counter)%400];
    document.getElementsByClassName("english")[0].innerHTML=vocab[(1+counter)%400];
    document.getElementsByClassName("english")[1].innerHTML=vocab[(3+counter)%400];
    document.getElementsByClassName("english")[2].innerHTML=vocab[(5+counter)%400];
    document.getElementsByClassName("english")[3].innerHTML=vocab[(7+counter)%400];
    document.getElementsByClassName("english")[4].innerHTML=vocab[(9+counter)%400];
    for(i=0;i<5;i++){
        document.getElementsByClassName("english")[i].classList.add("hide");
    }
    counter=(counter+10)%400;
    document.getElementById("counter").innerHTML=counter/2-4 + " - " + counter/2 + " of 200";
}
function prev(){
    if(counter>10){
        counter=(counter-20)%400;
        next();
    }
}
