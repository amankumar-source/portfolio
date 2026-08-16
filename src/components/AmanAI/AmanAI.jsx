import React, { useState, useRef, useEffect, useCallback } from "react";
import { Sparkles, X, Send, Loader2, Bot, User, AlertCircle, RefreshCw } from "lucide-react";

const SUGGESTED_QUESTIONS = [
  "Who is Aman?",
  "What are his skills?",
  "Tell me about his projects",
  "What is his experience?",
  "What is his qualification?",
];

const AmanAI = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: "init-1",
      sender: "ai",
      text: "Hi! I'm Aman AI. Ask me anything about Aman, his skills, projects or experience.",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto scroll to latest message
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      // Focus input when opened
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages, scrollToBottom]);

  // Accessibility: Close modal on Escape key press
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [isOpen, onClose]);

  const handleSend = async (textToSend) => {
    const messageText = textToSend || input;
    if (!messageText.trim() || isLoading) return;

    const userMsg = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: messageText.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: messageText.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.reply || data.error || "Failed to reach AI assistant");
      }

      const aiMsg = {
        id: `ai-${Date.now()}`,
        sender: "ai",
        text: data.reply || "I don't have that information in Aman's portfolio.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error("Aman AI Error:", err);
      const fallbackMsg = {
        id: `err-${Date.now()}`,
        sender: "ai",
        isError: true,
        text: "Sorry, the AI assistant is temporarily unavailable. You can still explore Aman's portfolio or contact him directly.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-label="Ask Me AI Chat"
      className="fixed bottom-2 left-2 right-2 sm:left-auto sm:bottom-6 sm:right-6 z-50 w-auto sm:w-[420px] h-[86vh] sm:h-[540px] max-h-[620px] flex flex-col bg-[#0d081f] text-white rounded-2xl border border-purple-500/30 shadow-[0_0_35px_rgba(130,69,236,0.35)] backdrop-blur-xl animate-fadeInScale overflow-hidden transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3.5 bg-[#130b2c] border-b border-purple-500/20">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 shadow-md">
            <Sparkles className="w-5 h-5 text-white animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-base tracking-wide text-white">Ask Me AI</h3>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                PRO
              </span>
            </div>
            <p className="text-xs text-gray-400">AI assistant for Aman&apos;s portfolio</p>
          </div>
        </div>

        <button
          onClick={onClose}
          aria-label="Close Ask Me AI chat"
          className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-purple-500/20 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages List */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-purple-600/50 scrollbar-track-transparent">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-2.5 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
          >
            {/* Avatar */}
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs shadow-md ${
                msg.sender === "user"
                  ? "bg-indigo-600 text-white"
                  : msg.isError
                  ? "bg-red-500/20 text-red-400 border border-red-500/30"
                  : "bg-purple-600 text-white"
              }`}
            >
              {msg.sender === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>

            {/* Bubble */}
            <div className={`max-w-[82%] text-xs sm:text-sm leading-relaxed rounded-2xl px-3.5 py-2.5 ${
              msg.sender === "user"
                ? "bg-indigo-600 text-white rounded-tr-none shadow-md"
                : msg.isError
                ? "bg-red-950/40 text-red-200 border border-red-500/30 rounded-tl-none"
                : "bg-[#181136] text-gray-200 border border-purple-500/20 rounded-tl-none"
            }`}>
              <p className="whitespace-pre-wrap">{msg.text}</p>
              <span className="block text-[10px] text-gray-400 mt-1 text-right opacity-70">
                {msg.timestamp}
              </span>
            </div>
          </div>
        ))}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs flex-shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-[#181136] text-gray-300 border border-purple-500/20 rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin text-purple-400" />
              <span className="text-xs text-gray-300 font-medium">Aman AI is thinking…</span>
            </div>
          </div>
        )}

        {/* Suggested Questions Chips (when only initial message exists) */}
        {messages.length === 1 && !isLoading && (
          <div className="mt-4 pt-2 border-t border-purple-500/10">
            <p className="text-xs font-semibold text-purple-300 mb-2.5">Suggested Questions:</p>
            <div className="flex flex-wrap gap-2">
              {SUGGESTED_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="text-xs bg-[#171033] hover:bg-purple-600/30 text-purple-200 border border-purple-500/30 hover:border-purple-400 px-3 py-1.5 rounded-full transition-all duration-200 text-left hover:scale-[1.02]"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-3 bg-[#110926] border-t border-purple-500/20">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2"
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            maxLength={500}
            placeholder="Ask about Aman..."
            disabled={isLoading}
            className="flex-1 bg-[#181035] text-white text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-purple-500/30 focus:outline-none focus:border-purple-500 placeholder-gray-400 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            aria-label="Send message"
            className="p-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition duration-200 shadow-md flex items-center justify-center"
          >
            {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AmanAI;
