
document.addEventListener("keydown", (e)=>{
    audio.play();
    let name = document.getElementById("key-name");
    name.innerText = e.key;


    let keyNo = document.querySelector("#number");
    keyNo.innerText = e.keyCode;

    keyNo.classList.add("animate");
    setTimeout(()=>{
        keyNo.classList.remove("animate");
    }, 500);
})

let audio = new Audio("audio.mp3");
