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

// setting page-----------------------------------------------------------------------------------------------------------------------------------------------------------------
    const inpName = document.querySelector("#inp_name");
    const inpAges = document.querySelector("#inp_ages");
    const inpWeight = document.querySelector("#inp_weight");
    const inpHeight = document.querySelector("#inp_height");
    localStorage.setItem("FullName", inpName.innerHTML);
    localStorage.setItem("Ages", inpAges.innerHTML);
    localStorage.setItem("Weight", inpWeight.innerHTML);
    localStorage.setItem("Height", inpHeight.innerHTML);
    


    function restore(){
        var namelis = localStorage.getItem("inpName") // Get your data from local storage
        
        if(namelis === null || namelis === undefined){
          return; // return if the user has not visited this site/input
        }
        
        inpName.value = namelis; // Sets the value of the input to the restore data
        
        return;
      }
      
      restore()
      
      function save(event_data){
        localStorage.setItem("inpName",inpName.value) // Save the value in localStorage
      }
      
      inpName.addEventListener("change",save);



// localStorage.setItem('inp_name', JSON.stringify({#inp_name: 'inp_name.innerHTML'}));
// localStorage.getItem('FullName');
// localStorage.getItem('Ages');
// localStorage.getItem('Weight');
// localStorage.getItem('Height');








// const sendInfo = document.querySelector(".button input");
// let FullName;
// let Ages;
// let Weight;
// let Height;

// const handleInfo = () =>{
//     FullName = inpName.value.trim();
//     Ages = inpAges.value.trim();
//     Weight = inpWeight.value.trim();
//     Height = inpHeight.value.trim();
//     if(!FullName) return;
//     if(!Ages) return;
//     if(!Weight) return;
//     if(!Height) return;

//     localStorage.setItem("FullName", inp_name.innerHTML);
//     localStorage.setItem("Ages", inp_ages.innerHTML);
//     localStorage.setItem("Weight", inp_weight.innerHTML);
//     localStorage.setItem("Height", inp_height.innerHTML);
    
    
//     inp_name.innerHTML = localStorage.getItem("FullName");
// inp_ages.innerHTML = localStorage.getItem("Ages");
// inp_weight.innerHTML = localStorage.getItem("Weight");
// inp_height.innerHTML = localStorage.getItem("Height");

    // console.log(FullName);
    // console.log(Ages);
    // console.log(Weight);
    // console.log(Height);
// }

// sendInfo.addEventListener("click", handleInfo);














    


//     let Gender = document.getElementById('gender_radio');
//     radioNodeList = Gender.elements['gender'];
//     let checkValue = radioNodeList.value;


//     document.getElementById(sub_btn).onclick = function(){
//         inp_name.innerHTML =  document.getElementById('inp_name');
// inp_ages.innerHTML =  document.getElementById('inp_ages');
// inp_weight.innerHTML =  document.getElementById('inp_weight');
// inp_height.innerHTML =  document.getElementById('inp_height');
//     }

    
