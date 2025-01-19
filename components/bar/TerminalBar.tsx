import React, { useRef, useState, useEffect } from "react";
import { X } from "lucide-react";

const TerminalBar = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message to the chat
    const newMessages = [...messages,{ sender: "YOU R:you_typing>", text: message },];
    setMessages(newMessages);

    // Mock API response
    const botResponse = await getBotResponse(message);

    // Add bot response to the chat
    setMessages([...newMessages,{ sender: "ME P:me_typing>", text: botResponse },]);
    setMessage("");
  };

  const getBotResponse = async (userMessage: string): Promise<string> => {
    try {
      // Mock response for now, replace with API call to Gemini or another chatbot service
      return `I received your message: "${userMessage}"`;
    } catch (error) {
      console.error("Error fetching bot response:", error);
      return "Sorry, something went wrong!";
    }
  };

  useEffect(() => {
    // Scroll to the bottom when messages update
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="w-full h-[7rem] px-3 py-2 absolute bottom-0 border-t border-neutral-800 bg-customBlackPri z-20 ">
      <div className="w-full flex justify-between items-center">
        <span className="text-sm border-b border-blue-600">CHAT WITH ME</span>
        <button className="hover:text-red-500 transition-colors">
          <X size={18} />
        </button>
      </div>

        {/* <div className=" flex flex-col"> */}
        {/* Chat Messages */}
        <div className="w-full max-h-[3.5rem] mt-2 overflow-y-scroll text-white text-sm" ref={chatContainerRef}>
          {messages.length === 0 ? (
            <p className="text-neutral-500">Start a conversation...</p>
          ) : (
            messages.map((msg, index) => (
              <div key={index} className="mb-2">
                <span
                  className={`font-bold ${
                    msg.sender === "YOU R:you_typing>"
                      ? "text-emerald-400"
                      : "text-blue-500"
                  }`}
                >
                  {msg.sender}:
                </span>{" "}
                <span>{msg.text}</span>
              </div>
            ))
          )}
          </div>

          <form onSubmit={handleSubmit} className="flex items-center">
            <span className=" text-emerald-400 text-sm whitespace-nowrap">YOU R:\you_typing&gt;</span>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-transparent outline-none text-sm text-white ml-1"
              autoFocus
            />
          </form>
        {/* </div> */}
    </div>
  );
};

export default TerminalBar;
