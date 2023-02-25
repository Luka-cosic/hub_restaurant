// SIGN UP
let closeHolder = document.querySelector(".closeHolderr");
setTimeout(()=>{
    document.querySelector(".signUp").style.display = "flex";
},6000)

closeHolder.addEventListener("click",()=>{
    closeHolder.parentElement.parentElement.style.display = "none";
    
})
//END OF SIGN UP


// Top
let topFixed = document.querySelector(".top-fixed");
window.addEventListener("scroll", ()=>{
    if(window.pageYOffset > 0){
        topFixed.classList.add("change");
    }else{
        topFixed.classList.remove("change");
    }
       
});
// End Of Top
// Section 1
    let video = document.querySelector("video");
    let volOn = document.querySelector(".vol-on");
    let volOff = document.querySelector(".vol-off");
    
    volOff.addEventListener("click", ()=>{
        video.muted = false;
        volOn.style.display = "block";
        volOff.style.display = "none";
    })
    volOn.addEventListener("click", ()=>{
        video.muted = true;
        volOn.style.display = "none";
        volOff.style.display = "block";
    })
     
// End of secton-1

// Section-2

let section2 = document.querySelector(".section-2");
let events = document.querySelector(".events");

window.addEventListener("scroll", ()=>{
    if(window.pageYOffset > window.outerHeight / 3){
        section2.classList.add("change")
    }
    if(window.pageYOffset > window.outerHeight){
        section2.classList.add("changeEvent")
    }    
});

//End of Section-2

// Section-4
let section4 = document.querySelector(".section-4");
window.addEventListener("scroll",()=>{
    if(window.pageYOffset > 2 * window.outerHeight){
        section4.classList.add("change");
    }
})
// End Of Section-4

// Section-5
let loop;
let circle = document.querySelectorAll(".circle");
let allPictures = document.querySelectorAll(".section-5-picture-wrapper");
let pause = document.querySelector(".fa-pause");
let play = document.querySelector(".fa-play");

let n = allPictures.length;

pause.addEventListener("click", stopInterval);
play.addEventListener("click", playInterval)
function movePicture() {
    document.querySelector(`.picture-${n}`).style.left = "-100%";
    document.querySelector(`.picture-${n}`).style.zIndex = "100";
    Array.from(allPictures).forEach((el,index,arr)=>{
        if(index != n){
            el.style.zIndex = "0"
        }
    })
    n--;
   
    
    if(n === 0){
        n = allPictures.length;
        Array.from(allPictures).forEach((el,index,arr)=>{
            el.style.left = "0"
        })
    }
    
    pagination();
}
loop = setInterval(movePicture, 3000);

function stopInterval(){
    pause.style.display = "none";
    play.style.display = "block";
    clearInterval(loop)
}
function playInterval(){
    pause.style.display = "block";
    play.style.display = "none";
    setInterval(movePicture, 6000);
}

const pagination = ()=>{
    Array.from(circle).forEach((el)=>{
        el.style.backgroundColor = "#808080";
    })
    circle[n - 1].style.backgroundColor = "white";  
}
//End Of Section-5

// Section-7
let videoPlay = document.querySelector(".video-play");
let video2 = document.querySelector(".video-2");
let videoAdress = document.querySelector(".video-adress")
videoPlay.addEventListener("click",()=>{
    video2.play();
    videoAdress.style.display = "none";
})
//End of Section-7

// Section-8
let items = document.querySelectorAll(".item");
let module = document.querySelector(".module");
let currentImg = document.querySelector(".current-img");
let modulePictureWrapper = document.querySelector(".module-picture-wrapper");
let j = 0;


Array.from(items).forEach((el)=>{
    el.addEventListener("mouseover",(k)=>{
        k.target.style.transform = "scale(1.2)";   
    });
    el.addEventListener("mouseout",(k)=>{
        k.target.style.transform = "scale(1)";   
    });
    
    el.addEventListener("click", openModule);
})

function openModule(){
    
    j = Array.from(items).indexOf(this) + 1;
    
    module.style.display = "block";
    let getSrc = `pictures/imageSec/img${j}.jpg`;

    let text = `<div class="module-img-holder">
    <div class="close">
        <i class="fa-regular fa-circle-xmark close-icon"></i>
    </div>
    <div class="left">
        <i class="fa-regular fa-circle-left left-arrow"></i>
    </div>
    <div class="right">
        <i class="fa-regular fa-circle-right right-arrow"></i>
    </div>
    <img src="${getSrc}" class="current-img">
</div>`;

    modulePictureWrapper.innerHTML = text;

    closeModule();
    moveRight();
    
}

let closeModule = () => {
    let closeM = document.querySelector(".close-icon");
    closeM.addEventListener("click",()=>{
        module.style.display = "none";
    });
}

let moveRight = ()=>{
    let rightArrow = document.querySelector(".right-arrow");
    let leftArrow = document.querySelector(".left-arrow");

    leftArrow.addEventListener("click",leftRightArrowFunc);
    rightArrow.addEventListener("click",leftRightArrowFunc);
}

function leftRightArrowFunc(){

    if(this.classList[2] == 'right-arrow'){
        j++;
        this.parentNode.parentNode.classList.add("changePictureRight");
        prev = "prevRight";
        if( j === items.length + 1 ){ j = 1 }
    }else{
        j--;
        this.parentNode.parentNode.classList.add("changePictureLeft");
        prev = "prevLeft";
        if(j === 0){j = items.length}; 
    }

    let getSrc = `pictures/imageSec/img${j}.jpg`;
   
    let text = `<div class="module-img-holder ${prev}">
    <div class="close">
        <i class="fa-regular fa-circle-xmark close-icon"></i>
    </div>
    <div class="left">
        <i class="fa-regular fa-circle-left left-arrow"></i>
    </div>
    <div class="right">
        <i class="fa-regular fa-circle-right right-arrow"></i>
    </div>
    <img src="${getSrc}" class="current-img">
</div>`;


setTimeout(function(){
    modulePictureWrapper.innerHTML = text;
   closeModule();  
   moveRight();
},300);  
}
// Module
//End of Module
//End of Section-8


// Section-10
let moveCardWrapper = document.querySelector(".move-card-wrapper");
let circlee = document.querySelectorAll(".circlee");

circlee.forEach((el, i)=>{
    el.addEventListener("click", ()=>{
        let r = i * 90
        moveCardWrapper.style.right = `${r}rem`;

        circlee.forEach((el)=>{
            el.classList.remove("change")
        })
        el.classList.add("change");
    })
    
})

// End Of Section-10

// Section-11


// End of Section-11



