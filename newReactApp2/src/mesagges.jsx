import React, { useState, useEffect } from "react";

export function Message() {
  const [messages, setMessages] = useState([
    { text: "Ciao! Come stai?", sender: "received" },
  ]);

  const simulatedMessages = [
    { text: "Bene, grazie! E tu?", sender: "sent" },
    { text: "Tutto ok, grazie!", sender: "received" },
    { text: "Hai novità?", sender: "sent" },
    { text: "Sì, ti racconto dopo!", sender: "received" },
  ];

  useEffect(() => {
    let index = 0;
    const messageInterval = setInterval(() => {<q></q>
      if (index < simulatedMessages.length) {
        setMessages((prevMessages) => [
          ...prevMessages,
          simulatedMessages[index],
        ]);
        index++;
      } else {
        clearInterval(messageInterval);
      }
    }, 2000); // Aggiunge un nuovo messaggio ogni 2 secondi

    return () => clearInterval(messageInterval);
  }, []);

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={`message-bubble ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
    </div>
  );
}
