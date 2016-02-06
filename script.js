var input = ["leftone", "rightone", "lefttwo", "righttwo", "leftthree", "rightthree", "leftfour", "rightfour", "leftfive", "rightfive"];
var nums = ["one", "two", "three", "four", "five"];
var numbers = [];
for(i=0;i<nums.length;i++){
    numbers.push(nums[i]);
    numbers.push(nums[i]);
}
function show(){
    for(i=0;i<5;i++){
        document.getElementsByClassName("english")[i].classList.add("hide");
    }
    document.getElementById("hide").classList.remove("hide");
    document.getElementById("show").classList.add("hide");
}
function hide(){
    for(i=0;i<5;i++){
        document.getElementsByClassName("english")[i].classList.remove("hide");
    }
    document.getElementById("show").classList.remove("hide");
    document.getElementById("hide").classList.add("hide");
}
function createDivs(){
    var x = 1;
    for(i=0;i<10;i++){
        var node = document.createElement('div');
        node.innerHTML=vocab[i];
        node.className='word';
        document.body.appendChild(node);
        document.getElementsByTagName('div')[i+8].classList.add(numbers[i]);
        if(x>0){
            document.getElementsByClassName(numbers[i])[0].classList.add('german');
            document.getElementsByClassName(numbers[i])[0].classList.add('hide');
        }
        else{
            document.getElementsByClassName(numbers[i])[1].classList.add('english');
            document.getElementsByClassName(numbers[i])[1].classList.add('hide');
        }
        x*=-1;
    }
    document.getElementById("counter").innerHTML=counter/2-4 + " - " + counter/2 + " of 200";
    document.getElementsByClassName("german")[0].onclick=function(){hideone();};
    document.getElementsByClassName("german")[1].onclick=function(){hidetwo();};
    document.getElementsByClassName("german")[2].onclick=function(){hidethree();};
    document.getElementsByClassName("german")[3].onclick=function(){hidefour();};
    document.getElementsByClassName("german")[4].onclick=function(){hidefive();};
}

function hideone(){document.getElementsByClassName("english")[0].classList.toggle("hide");}
function hidetwo(){document.getElementsByClassName("english")[1].classList.toggle("hide");}
function hidethree(){document.getElementsByClassName("english")[2].classList.toggle("hide");}
function hidefour(){document.getElementsByClassName("english")[3].classList.toggle("hide");}
function hidefive(){document.getElementsByClassName("english")[4].classList.toggle("hide");}

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
    if(counter<10){
        counter+=380;
        next();
    }
    else if(counter>400) {
        counter-=420;
        next();
    }
    else {
        counter-=20;
        next();
    }
}
