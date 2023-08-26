const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotClosebtn = document.querySelector(".close-btn");

let userMessage;
const API_KEY = "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";

const inputInitHeight = chatInput.scrollHeight;

const loadDataFromLocalstorage = () => {
    chatbox.innerHTML = localStorage.getItem("all-chats");
}

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
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = incomingChatLi.querySelector("p");

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}` 
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [{"role": "user", "content": userMessage}]
        })
    }

    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        messageElement.textContent = data.choices[0].message.content;
    }).catch((error) => {
        messageElement.classList.add("error");
        messageElement.textContent = "Oops! đã xảy ra lỗi. Hãy thử lại.";
    }).finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));

    localStorage.setItem("all-chats", chatbox.innerHTML);
}
const handleChat = () => {
    userMessage =   chatInput.value.trim();
    if(!userMessage) return;
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);
    setTimeout(() => {
        const incomingChatLi = createChatLi("Thinking...", "incoming")
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);
    },600);
}
chatInput.addEventListener("input",() => {
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;

 })
 chatInput.addEventListener("keydown    ",(e) => {
    if(e.key ==="Enter" && !e.shiftKey && window.innerWidth>800){
        e.preventDefault();
        handleChat();
    }

 })

chatbotClosebtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
sendChatBtn.addEventListener("click", handleChat)


// dropdown menu
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

// setting page from index page -----------------------------------------------------------------------------------------------------------------------------------------------------------------
window.addEventListener('load', ()=> {
    const name = localStorage.getItem('NAME');
    const ages = localStorage.getItem('AGES');
    const weight = localStorage.getItem('WEIGHT');
    const height = localStorage.getItem('HEIGHT');
    document.getElementById('fullname').value = name;
    document.getElementById('ages').value = ages;
    document.getElementById('wght').value = weight;
    document.getElementById('hght').value = height;

    const gender  = localStorage.getItem('GENDER');
    const Male = document.getElementById('dot_1');
    const Female = document.getElementById('dot_2');
    if (gender == "Male") 
        Male.checked = true;
    else Female.checked = true;


    const sickness = localStorage.getItem('SICK');
    const daithaoduong = document.getElementById('dot_1a');
    const suythanman = document.getElementById('dot_2a');
    const caohuyetap = document.getElementById('dot_3a');
    const binhthuong = document.getElementById('dot_4a');
    if (sickness == "daithaoduong") 
        daithaoduong.checked = true;
    else if (sickness == "suythanman") suythanman.checked = true;
    else if (sickness == "caohuyetap") caohuyetap.checked = true;
    else binhthuong.checked = true;

    const jobs = localStorage.getItem('JOBS');
    const laodongnang = document.getElementById('dot_1b');
    const laodongvua = document.getElementById('dot_2b');
    const laodongnhe = document.getElementById('dot_3b');
    if (jobs == "ldnang") 
        laodongnang.checked = true;
    else if (jobs == "ldvua") laodongvua.checked = true;
    else if (jobs== "ldnhe") laodongnhe.checked = true;
})
