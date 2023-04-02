const todo = document.querySelector("#todo");
const noLoginAlert = document.querySelector("#noLoginAlert");

const todoListSpan = document.querySelector("#todoList span");

const loginToggleBtn = document.querySelector("#loginToggle button");
const loginInput = document.querySelector("#loginToggle input");

const joinInput = document.querySelector("#join input");
const joinBtn = document.querySelector("#join button");

const HIDDENCLASS = "hidden";
const USERNAMEKEY = "username";
let usernames = [];

function join(){
    getUsername();
    if(joinInput.value === ""){
        alert("가입할 이름을 입력해주세요.");
        joinInput.focus();
        return;
    }

    if(usernames.length === 0) {
        saveUser();
    }else{
        let check = "NoExist";
        usernames.every(username => {
            if(username === joinInput.value){
                check = "exist";
                return false; 
            }
            return true;
        });

        if(check === "exist"){
            alert(`${joinInput.value}는 이미 존재합니다.`);
            joinInput.value = "";
            joinInput.focus();
        }else{
            saveUser();
        }
    }

}

function saveUser(){
    usernames.push(joinInput.value);
    localStorage.setItem(USERNAMEKEY, JSON.stringify(usernames));
    alert("가입되었습니다.");
    joinInput.value = "";
    loginInput.focus();
}

function login(){
    getUsername();
    if(loginInput.value === ""){
        alert("이름을 입력해주세요.");
        loginInput.focus();
        return;
    }
    if(usernames.length === 0) {
        saveUser();
    }else{
        let check = "NoExist";
        usernames.every(username => {
            if(username === loginInput.value){
                check = "exist";
                return false; 
            }
            return true;
        });

        if(check === "exist"){
            todoListSpan.innerText = `${loginInput.value}님의 `;
            loginInput.value = "";
            loginInput.classList.add(HIDDENCLASS);
            joinInput.classList.add(HIDDENCLASS);
            joinBtn.classList.add(HIDDENCLASS);
            todo.classList.remove(HIDDENCLASS);
            noLoginAlert.classList.add(HIDDENCLASS);
            loginToggleBtn.innerText = "LOGOUT"
        }else{
            noneUser();
        }
    }
}

function noneUser(){
    alert(`${loginInput.value}는 존재하지 않습니다. 가입해주세요.`);
    loginInput.value = "";
    joinInput.focus();
}

function logout(){
    alert("로그아웃하셨습니다.")
    todoListSpan.innerText = "";
    loginInput.classList.remove(HIDDENCLASS);
    joinInput.classList.remove(HIDDENCLASS);
    joinBtn.classList.remove(HIDDENCLASS);
    noLoginAlert.classList.remove(HIDDENCLASS);
    noLogin();
    loginToggleBtn.innerText = "LOGIN"
}

loginToggleBtn.addEventListener("click", function(){
    const buttonText = document.querySelector("#loginToggle button").innerText;
    if(buttonText === "LOGIN"){
        login();
    }else if(buttonText === "LOGOUT"){
        logout();
    }
});

function getUsername(){
    const savedUsers = localStorage.getItem(USERNAMEKEY);
    
    if(savedUsers !== null) {
        const parsedUser = JSON.parse(savedUsers);
        usernames = parsedUser;
    }
}

function noLogin(){
    todo.classList.add(HIDDENCLASS);
}

noLogin();
getUsername();
joinBtn.addEventListener("click", join);