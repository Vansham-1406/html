var toggled = false;


var circle = document.getElementById("circle");
var hTag = document.getElementsByTagName("h1")[0];
var bodytag = document.getElementsByTagName("body")[0];

document.getElementById('toggle').onclick = function()
{
    if(!toggled)
    {
     circle.style.marginLeft = "100px";
     hTag.classList.add("color-white");
     bodytag.classList.add("background-color-black");

     toggled=true;
    }
    else{
        circle.style.marginLeft = "1px";
        hTag.classList.remove("color-white");
        bodytag.classList.remove("background-color-black");

        toggled = false;
    }
}


// var toggled = false;

// var hTag = document.getElementsByTagName("h1")[0];
// var bodyTag = document.getElementsByTagName("body")[0];
// var circle = document.getElementById("circle");

// document.getElementById("toggle").onclick = function () {
        
//     if(!toggled) {
        
//         hTag.classList.add("color-white");
//         bodyTag.classList.add("bck-color-black");
//         circle.style.marginLeft = "100px";
        
//         toggled = true;
        
//     } else {
        
//         hTag.classList.remove("color-white");
//         bodyTag.classList.remove("bck-color-black");
//         circle.style.marginLeft = "1px";
        
//         toggled = false;
        
//     }
    
// }