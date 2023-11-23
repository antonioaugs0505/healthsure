"use client";
import styles from "../../styles/Chatbot.module.css";
import { BiSolidCommentDetail } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { FaRobot } from "react-icons/fa";
import { MdSend } from "react-icons/md";
import React, { useState } from "react";

export default function ChatBot() {
  const [userMsg, setUserMsg] = useState('');
  const [chatInput, setChatInput] = useState('');
  const [chatboxContent, setChatboxContent] = useState([
    { content: "Olá! Como posso te ajudar?", className: "msgPc" }
  ]);

  const createChatLi = (message, className) => {
    return {
      content: message,
      className: `chat ${className}`
    };
  };
  
  const handleChat = () => {
    const trimmedMessage = chatInput.trim();
    if (!trimmedMessage) return;
  
    const newUserMsg = createChatLi(trimmedMessage, "msgUser");
    setChatboxContent((prevChatboxContent) => [...prevChatboxContent, newUserMsg]);
    setChatInput('');
  }

  return (
    <div className={styles.abrir}>
      <button className={styles.escondido}>
        <BiSolidCommentDetail className={`${styles.icone} ${styles.iconMsg}`} />
        <IoClose className={`${styles.icone} ${styles.iconFechar}`} />
      </button>
      <section className={styles.chatbot}>
        <header>
          <h2>ChatBot</h2>
        </header>
        <ul className={styles.chatbox}>
          {chatboxContent.map((message, index) => (
            <li key={index} className={message.className}>
              {message.content}
            </li>
          ))}
        </ul>

        <div className={styles.chatInput}>
          <textarea
            className="textarea"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            placeholder="Escreva sua mensagem"
          ></textarea>

          <button className={styles.send} onClick={handleChat}>
            <MdSend></MdSend>
          </button>
        </div>
      </section>{" "}
    </div>
  );
}
