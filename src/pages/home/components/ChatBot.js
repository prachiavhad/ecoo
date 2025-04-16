import React, { useState, useEffect, useRef } from "react";
import chatbotGif from "../../../assets/chatbot.gif"; // Import the gif image
import { PaperPlaneRight, XCircle } from "@phosphor-icons/react";

export const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [userInput, setUserInput] = useState("");
    const [messages, setMessages] = useState([
        { text: "Hello! How can I assist you today?", sender: "bot" },
    ]);
    const chatContainerRef = useRef(null);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleUserInput = (e) => {
        setUserInput(e.target.value);
    };

    const handleSendMessage = () => {
        if (userInput.trim() !== "") {
            const newMessages = [
                ...messages,
                { text: userInput, sender: "user" },
                { text: "Thank you for your message! How else can I assist?", sender: "bot" },
            ];
            setMessages(newMessages);
            setUserInput(""); // Clear input field
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && userInput.trim() !== "") {
            handleSendMessage();
        }
    };

    // Auto scroll to the bottom after each message
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div>
            {/* Chatbot button with GIF */}
            <div
                className={`fixed bottom-6 right-8 cursor-pointer flex justify-center items-center
                transition-all duration-700 ease-in-out ${isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"}`}
                onClick={toggleChat}
                style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    position: "fixed",
                    overflow: "hidden",
                    zIndex: 10,
                    transform: isOpen ? "scale(0)" : "scale(1)",
                }}
            >
                <img
                    src={chatbotGif}
                    alt="Chatbot"
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Chat panel (chat window) */}
            <div
                className={`fixed bottom-6 right-8 transition-all duration-700 ease-in-out z-50
                ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"} 
                w-[400px] h-[550px] bg-white border-2 border-gray-200 rounded-lg shadow-xl overflow-hidden`}
                style={{
                    transformOrigin: "bottom right",
                    transform: isOpen ? "scale(1)" : "scale(0)",
                    opacity: isOpen ? 1 : 0,
                    transition: "all 0.7s ease-in-out",
                    borderRadius: "15px",
                }}
            >
                <div className="bg-primary-600 text-white p-5 flex justify-between items-center rounded-t-lg">
                    <span className="text-xl font-semibold">Ask Me Anything</span>
                    <button
                        className="text-white text-3xl"
                        onClick={toggleChat}
                    >
                        <XCircle />
                    </button>
                </div>

                <div
                    ref={chatContainerRef}
                    className="p-5 h-[calc(100%-150px)] overflow-y-auto space-y-6 custom-scrollbar"
                    style={{ wordWrap: "break-word", overflowWrap: "break-word" }}
                >
                    {/* Display messages */}
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`flex ${message.sender === "bot" ? "justify-start" : "justify-end"}`}
                        >
                            <div
                                className={`flex items-start space-x-3 ${message.sender === "bot" ? "flex-row" : "flex-row-reverse"}`}
                            >
                                {/* Avatar with gif (Bot) */}
                                {message.sender === "bot" && (
                                    <div
                                        className={`w-12 h-12 rounded-full overflow-hidden flex justify-center items-center`}
                                    >
                                        <img
                                            src={chatbotGif}
                                            alt="Bot Avatar"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                )}

                                {/* The message container */}
                                <div
                                    className={`w-full p-4 rounded-lg ${message.sender === "bot"
                                        ? "text-primary-900"
                                        : "text-primary-900"}`}
                                    style={{
                                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                                        wordBreak: "break-word", // Ensure text breaks nicely
                                        whiteSpace: "normal",     // Allow for natural line breaks
                                        overflowWrap: "break-word", // Ensure long words break within container
                                    }}
                                >
                                    {message.text}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Input area (fixed at the bottom) */}
                <div className="bg-white p-4 flex justify-between items-center border-t border-primary-200 rounded-b-lg sticky bottom-0">
                    <input
                        type="text"
                        value={userInput}
                        onChange={handleUserInput}
                        onKeyDown={handleKeyDown}
                        className="w-full p-4 rounded-lg border border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all ease-in-out"
                        placeholder="Type a message..."
                        style={{ fontSize: "16px" }}
                    />
                    <button
                        onClick={handleSendMessage}
                        className="p-3 mx-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-all duration-200"
                    >
                        <PaperPlaneRight className="text-xl" />
                    </button>
                </div>
            </div>
        </div>
    );
};
