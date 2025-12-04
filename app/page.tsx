"use client";
import { useState, useRef, useEffect } from "react";

interface Message {
  sender: string;
  text: string;
  time: string;
}

// Fungsi untuk menghapus simbol markdown
function cleanMarkdown(text: string) {
  return text
    .replace(/\*\*/g, "")
    .replace(/\*/g, "")
    .replace(/#/g, "")
    .replace(/_/g, "")
    .replace(/`/g, "");
}

// Fungsi untuk format waktu
function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
}

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const chatBoxRef = useRef<HTMLDivElement>(null);

  // Auto scroll ke bawah saat ada pesan baru
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { 
      sender: "user", 
      text: input,
      time: getCurrentTime()
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const cleaned = cleanMarkdown(data.reply);

      const botMsg: Message = { 
        sender: "bot", 
        text: cleaned,
        time: getCurrentTime()
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setInput("");
  };

  return (
    <div className="chat-container">
      {/* Header */}
      <div className="chat-header">
        <div className="chat-header-avatar">Ge</div>
        <div className="chat-header-info">
          <h3>Chat Bot</h3>
        </div>
      </div>

      {/* Chat Box */}
      <div className="chat-box" ref={chatBoxRef}>
        {messages.map((m, i) => (
          <div key={i} style={{ display: 'flex', marginBottom: '8px', justifyContent: m.sender === "user" ? "flex-end" : "flex-start" }}>
            <div className={`chat-bubble ${m.sender}`}>
              <div style={{ whiteSpace: "pre-line" }}>{m.text}</div>
              <span className="message-time">{m.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="input-area">
        <input
          className="text-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ketik pesan..."
        />
        <button onClick={sendMessage} className="send-button">
          ➤
        </button>
      </div>
    </div>
  );
}