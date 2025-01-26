import React, { useState, useEffect, useRef } from "react";

export function Message() {
  const [messages, setMessages] = useState([
    { text: "Ciao! Come stai?", sender: "received" },
  ]);

  const [input, setInput] = useState("");

  const chatEndRef = useRef(null);

  const simulatedMessages = [
    { text: "Bene, grazie; tu hai novità?", sender: "sent" },
    { text: "Tutto ok, grazie!", sender: "received" },
    { text: "Sì, ti racconto dopo!", sender: "received" },
  ];

  useEffect(() => {
    let index = 0;
    const messageInterval = setInterval(() => {
      if (index < simulatedMessages.length) {
        setMessages((prevMessages) => {
          const newMessage = simulatedMessages[index];
          return newMessage ? [...prevMessages, newMessage] : prevMessages;
        });
        index++;
      } else {
        clearInterval(messageInterval);
      }
    }, 2000);

    return () => clearInterval(messageInterval);
  }, []);

  const sendMessage = () => {
    if (input.length > 0) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: input, sender: "sent" },
      ]);
      setInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div
      className="chat-container"
      style={{
        width: "300px",
        height: "400px",
        border: "1px solid #ccc",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white"
      }}
    >
      <div
        className="messages"
        style={{ flex: 1, overflowY: "auto", marginBottom: "10px" }}
      >
        {messages.map((message, index) =>
          message && message.sender ? (
            <div
              key={index}
              className={`message-bubble ${message.sender}`}
              style={{
                color: "black",
                textAlign: message.sender === "sent" ? "right" : "left",
                padding: "5px",
                backgroundColor:
                  message.sender === "sent" ? "#d1f7d1" : "#f0f0f0",
                borderRadius: "5px",
                marginBottom: "5px",
                
              }}
            >
              {message.text}
            </div>
          ) : null
        )}
        <div ref={chatEndRef} />
      </div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Scrivi un Messaggio"
          style={{ width: "80%", padding: "5px" }}
        />
        <button
          onClick={sendMessage}
          disabled={input.length === 0}
          style={{ padding: "5px", width: "15%" }}
        >
          Invia
        </button>
      </div>
    </div>
  );
}
