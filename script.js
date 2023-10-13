const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotClosebtn = document.querySelector(".close-btn");
const API_KEY= key;
let userMessage;

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
// xử lí câu trả lời
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
//slider menu-----------------
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const carouselChildrens = [...carousel.children];

let isDragging = false, startX, startScrollLeft, timeoutId;


let cardPerView = Math.round(carousel.offsetWidth/ firstCardWidth);
let cc = carouselChildrens.slice(0);
console.log(cardPerView);
console.log(cc.length);
if (cardPerView < cc.length) {
    carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });

    carouselChildrens.slice(0, cardPerView).forEach(card => {
        carousel.insertAdjacentHTML("beforeend", card.outerHTML);

    });
}

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;

    })
});
const dragStart = (e) =>{
    isDragging = true;
    carousel.classList.add("dragging");
    startX =  e.pageX;
    startScrollLeft = carousel.scrollLeft;
}
const dragging = (e) =>{
    if(!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}
const dragStop = () =>{
    isDragging = false;
    carousel.classList.remove("dragging");
}

// const autoPlay = () =>{
//     if(window.innerWidth < 800) return;
//     timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
// }
// autoPlay();
// const infiniteScroll = () => {
//     if(carousel.scrollLeft === 0){
//         carousel.classList.add("no-transition");
//         carousel.scrollLeft = carousel.scrollWidth - (2* carousel.offsetWidth);
//         carousel.classList.remove("no-transition");
//     }
//     else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){
//         carousel.classList.add("no-transition");
//         carousel.scrollLeft = carousel.offsetWidth;
//         carousel.classList.remove("no-transition");
//     }

//     clearTimeout(timeoutId);
//     if(!wrapper.matches(":hover")) autoPlay();
// }
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseleave", autoPlay);


