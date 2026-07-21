const box = document.getElementById("box");

let x = 100;
let y = 100;

// Move Functions
function moveright() {
    x += 20;
    updatePosition();
}

function moveleft() {
    x -= 20;
    updatePosition();
}

function moveup() {
    y -= 20;
    updatePosition();
}

function movedown() {
    y += 20;
    updatePosition();
}

function updatePosition() {
    box.style.left = x + "px";
    box.style.top = y + "px";
}

// -----------------------------
// 1. Keydown Event
// -----------------------------
document.addEventListener("keydown", function(event){

    if(event.key=="ArrowUp"){
        y-=30;
    }

    if(event.key=="ArrowDown"){
        y+=30;
    }

    if(event.key=="ArrowLeft"){
        x-=30;
    }

    if(event.key=="ArrowRight"){
        x+=30;
    }

    updatePosition();
});

// -----------------------------
// 2. Mouseover Event
// -----------------------------
box.addEventListener("mouseover",function(){
    box.style.backgroundColor="orange";
});

// -----------------------------
// 3. Mouseout Event
// -----------------------------
box.addEventListener("mouseout",function(){
    box.style.backgroundColor="skyblue";
});

// -----------------------------
// 4. Double Click Event
// -----------------------------
box.addEventListener("dblclick",function(){
    box.style.borderRadius="50%";
});

// -----------------------------
// 5. Context Menu (Right Click)
// -----------------------------
box.addEventListener("contextmenu",function(event){

    event.preventDefault();

    box.style.borderRadius="10px";
    box.style.backgroundColor="lightgreen";

    alert("Right Click Detected!");
});

// -----------------------------
// 6. Wheel Event
// -----------------------------
box.addEventListener("wheel",function(event){

    event.preventDefault();

    let size = box.offsetWidth;

    if(event.deltaY < 0){
        size += 20;
    }
    else{
        size -= 20;
    }

    if(size<100){
        size=100;
    }

    box.style.width=size+"px";
});