import React, { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";

interface Message {
  sender: string;
  text: string;
}

const TerminalBar: React.FC = () => {
  const [message, setMessage] = useState<string>(""); // User input message
  const [messages, setMessages] = useState<Message[]>([]); // All chat messages
  const [isTyping, setIsTyping] = useState<boolean>(false); // To track if the bot is typing
  const chatContainerRef = useRef<HTMLDivElement>(null); // For scrolling the chat container

  // Handle user message submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isTyping) return; // Prevent submission if the bot is typing

    // Add user message to the chat
    const newMessages = [...messages,{ sender: "YOU R:you_typing>", text: message },];

    setMessages(newMessages);
    setMessages([...newMessages,{ sender: "ME P:me_typing>", text: '.....'},]);

    setIsTyping(true); // Start typing indicator

    // Get bot response
    const botResponse = await getBotResponse(message);

    // Add bot response to the chat
    setMessages([...newMessages,{ sender: "ME P:me_typing>", text: botResponse },]);
    setMessage("");
    setIsTyping(false); // Stop typing indicator once the bot responds
  };

  // Get response from the backend API
  const getBotResponse = async (userMessage: string): Promise<string> => {
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();

      // Ensure the response is a string
      return typeof data.reply === "string"
        ? data.reply
        : "Sorry, something went wrong!";
    } catch (error) {
      console.error("Error fetching bot response:", error);
      return "Sorry, something went wrong!";
    }
  };

  // Scroll to the bottom of chat when new messages arrive
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="w-full h-[10rem] md:h-[7rem] px-3 py-2 absolute bottom-0 border-t border-neutral-800 bg-customBlackPri z-20">
      <div className="w-full flex justify-between items-center">
        <span className="text-sm border-b border-blue-600">CHAT WITH ME</span>
        <button className="hover:text-red-500 transition-colors">
          <X size={18} />
        </button>
      </div>

      {/* Chat Messages */}
      <div
        className="w-full max-h-[6.2rem] md:max-h-[3.5rem] mt-2 overflow-y-scroll text-white text-sm custom-scrollbar"
        ref={chatContainerRef}
      >
        {messages.length !== 0 &&
          messages.map((msg, index) => (
            <div key={index} className="mb-2">
              <span
                className={`font-bold ${
                  msg.sender === "YOU R:you_typing>"
                    ? "text-emerald-400"
                    : "text-blue-500"
                }`}
              >
                {msg.sender}
              </span>{" "}
              <span>{msg.text}</span>
            </div>
          ))}
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="flex items-center">
        <span className="text-emerald-400 text-sm whitespace-nowrap">
          YOU R:\you_typing&gt;
        </span>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full bg-transparent outline-none text-sm text-white ml-1"
          autoFocus
          disabled={isTyping} // Disable input while waiting for the bot's response
        />
      </form>
    </div>
  );
};

export default TerminalBar;
