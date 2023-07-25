const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotClosebtn = document.querySelector(".close-btn");
let userMessage;
const inputInitHeight = chatInput.scrollHeight;
const  createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className ==="outgoing" ? `<p></p>`:`<span class="material-symbols-outlined"><i class="fa-solid fa-robot"></i></span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
}
// chỗ này nè
const generateResponse = (incomingChatLi) =>{
    const messageElement = incomingChatLi.querySelector("p");
    // .finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
}
const handleChat = () => {
    userMessage =   chatInput.value.trim();
    if(!userMessage) return;
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chat.scrollHeight);
    setTimeout(() => {
        const incomingChatLi = createChatLi("Thinking...", "incoming");
        chatbox.appendChild(incomingChatLi);
        generateResponse(incomingChatLi);
    },600);
}
chatInput.addEventListener("input",() => {
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;

 })
 chatInput.addEventListener("keydown",(e) => {
    if(e.key ==="Enter" && !e.shiftKey && window.innerWidth>800){
        e.preventDefault();
        handleChat();
    }

 })
chatbotClosebtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
sendChatBtn.addEventListener("click", handleChat)
const checkbtn = document.querySelector('.checkbtn')
const checkbtnIcon = document.querySelector('.checkbtn i')
const dropDownMenu = document.querySelector('.dropdown_menu')





checkbtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')
    checkbtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars-staggered'
}


// function welcomeFunc() {
//     let person = prompt("Please enter your name", "Tí điệu");
//     if (person != null) {
//       document.getElementById("name").innerHTML =
//       "Hello " + person + "! How are you today?";
//     }
//   }
