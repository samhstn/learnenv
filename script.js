var input = ["leftone", "rightone", "lefttwo", "righttwo", "leftthree", "rightthree", "leftfour", "rightfour", "leftfive", "rightfive"];
var nums = ["one", "two", "three", "four", "five"];
var numbers = [];
for(i=0;i<nums.length;i++){
    numbers.push(nums[i]);
    numbers.push(nums[i]);
}
function show(){
    for(i=0;i<5;i++){
        document.getElementsByClassName("right")[i].classList.add("hide");
    }
    document.getElementById("hide").classList.remove("hide");
    document.getElementById("show").classList.add("hide");
}
function hide(){
    for(i=0;i<5;i++){
        document.getElementsByClassName("right")[i].classList.remove("hide");
    }
    document.getElementById("show").classList.remove("hide");
    document.getElementById("hide").classList.add("hide");
}
function createDivs(){
    var x = 1;
    for(i=0;i<numbers.length;i++){
        var node = document.createElement('div');
        node.innerHTML=input[i];
        node.className='word';
        document.body.appendChild(node);
        document.getElementsByTagName('div')[i+5].classList.add(numbers[i]);
        if(x>0){
            document.getElementsByClassName(numbers[i])[0].classList.add('left');
        }
        else{
            document.getElementsByClassName(numbers[i])[1].classList.add('right');
            document.getElementsByClassName(numbers[i])[1].classList.add('hide');
        }
        x*=-1;
    }
    document.getElementsByClassName("left")[0].onclick=function(){hideone();};
    document.getElementsByClassName("left")[1].onclick=function(){hidetwo();};
    document.getElementsByClassName("left")[2].onclick=function(){hidethree();};
    document.getElementsByClassName("left")[3].onclick=function(){hidefour();};
    document.getElementsByClassName("left")[4].onclick=function(){hidefive();};
}

function hideone(){document.getElementsByClassName("right")[0].classList.toggle("hide");}
function hidetwo(){document.getElementsByClassName("right")[1].classList.toggle("hide");}
function hidethree(){document.getElementsByClassName("right")[2].classList.toggle("hide");}
function hidefour(){document.getElementsByClassName("right")[3].classList.toggle("hide");}
function hidefive(){document.getElementsByClassName("right")[4].classList.toggle("hide");}
