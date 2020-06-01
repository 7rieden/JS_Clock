const form = document.querySelector(".js-form"),
    input = document.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("summit", handleSubmit)
}


function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        //she is not
    } else {
        paintGreeting(currentUser);
        //she is
    }

function init(){

}
init();
