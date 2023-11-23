// const sendChatBtn = document.querySelector(".enviar")
// const chatInput = document.querySelector(".textarea")
// const chatbox = document.querySelector(".chatbox")

// let userMessage;

// const createChatLi = (message, className) =>{

//     const chatLi = document.createElement("li")
//     chatLi.classList.add("chat", className);
//     let chatContent = className === "msgUser" ? `<p>${message}</p>` : `<FaRobot className={styles.icon}></FaRobot><p>${message}</p>`;
//     chatLi.innerHTML = chatContent
//     return chatLi
// }

// const handleChat = () => {
//     userMessage = chatInput.value.trim();
//     if(!userMessage) return;


//     chatbox.appendChild(createChatLi(userMessage, "msgUser"))
// }


// sendChatBtn.addEventListener("click", handleChat)