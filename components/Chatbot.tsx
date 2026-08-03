"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  type: "user" | "bot";
  text: string;
}

const botResponses: Record<string, string> = {
  default:
    "Maaf, saya kurang paham maksudnya. Kamu bisa tanya seputar layanan kebersihan, harga, promo, atau cara pemesanan.",
  hello: "Halo! Selamat datang di Kinclong. Ada yang bisa saya bantu hari ini?",
  price:
    "Harga kami bervariasi! Layanan Cuci AC mulai dari Rp150.000, dan General Cleaning dari Rp200.000. Kamu bisa cek detailnya langsung di aplikasi.",
  booking:
    "Gampang banget! Klik tombol 'Pesan Sekarang' di website ini atau download aplikasi Kinclong. Cukup 2 menit pesananmu langsung diproses!",
  availability:
    "Kami melayani 24/7! Saat ini helper kami siap datang ke area Jakarta, Tangerang, Depok, Bekasi, dan Bogor.",
  trusted:
    "Tenang saja! Semua helper Kinclong sudah melewati proses background check dan pelatihan ketat. Kami juga memberikan garansi kepuasan!",
  thanks:
    "Sama-sama! Jangan ragu hubungi saya lagi kalau ada pertanyaan lain ya. Selamat beraktivitas!",
  promo:
    "Tentu! Saat ini ada diskon 20% khusus pengguna baru. Jangan lupa masukkan kode promo saat pemesanan ya!",
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      text: "Halo! 👋 Saya asisten Kinclong. Ada yang bisa dibantu?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();

    // Logika kata kunci diperbarui agar mengenali bahasa Indonesia
    if (
      lowerInput.includes("halo") ||
      lowerInput.includes("hai") ||
      lowerInput.includes("pagi") ||
      lowerInput.includes("siang") ||
      lowerInput.includes("hello")
    ) {
      return botResponses.hello;
    } else if (
      lowerInput.includes("harga") ||
      lowerInput.includes("biaya") ||
      lowerInput.includes("berapa") ||
      lowerInput.includes("tarif")
    ) {
      return botResponses.price;
    } else if (
      lowerInput.includes("pesan") ||
      lowerInput.includes("booking") ||
      lowerInput.includes("order") ||
      lowerInput.includes("cara")
    ) {
      return botResponses.booking;
    } else if (
      lowerInput.includes("lokasi") ||
      lowerInput.includes("jadwal") ||
      lowerInput.includes("kapan") ||
      lowerInput.includes("area") ||
      lowerInput.includes("tersedia")
    ) {
      return botResponses.availability;
    } else if (
      lowerInput.includes("aman") ||
      lowerInput.includes("garansi") ||
      lowerInput.includes("terpercaya") ||
      lowerInput.includes("bagus")
    ) {
      return botResponses.trusted;
    } else if (
      lowerInput.includes("promo") ||
      lowerInput.includes("diskon") ||
      lowerInput.includes("murah") ||
      lowerInput.includes("potongan")
    ) {
      return botResponses.promo;
    } else if (
      lowerInput.includes("makasih") ||
      lowerInput.includes("terima kasih") ||
      lowerInput.includes("thanks") ||
      lowerInput.includes("oke")
    ) {
      return botResponses.thanks;
    }

    return botResponses.default;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      text: inputValue,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot thinking
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        text: getBotResponse(userMessage.text),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg transition-all hover:shadow-xl text-white"
      >
        <span className="text-2xl">{isOpen ? "✕" : "💬"}</span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-40 w-80 overflow-hidden rounded-2xl border border-border shadow-2xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-accent p-4 text-white">
              <h3 className="font-semibold text-lg">Asisten Kinclong</h3>
              <p className="text-xs opacity-90 mt-1">
                Selalu siap membantu 24/7
              </p>
            </div>

            {/* Messages Container */}
            <div className="flex h-96 flex-col overflow-hidden bg-card">
              <div className="flex-1 overflow-y-auto space-y-4 p-4">
                <AnimatePresence mode="wait">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${
                        message.type === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm ${
                          message.type === "user"
                            ? "bg-primary text-white rounded-br-sm"
                            : "bg-muted text-foreground rounded-bl-sm"
                        }`}
                      >
                        {message.text}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex gap-1.5 p-2"
                  >
                    <div className="h-2 w-2 rounded-full bg-primary/50 animate-bounce" />
                    <div
                      className="h-2 w-2 rounded-full bg-primary/50 animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    />
                    <div
                      className="h-2 w-2 rounded-full bg-primary/50 animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    />
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="border-t border-border bg-background p-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ketik pesan..."
                    className="flex-1 rounded-full border border-border bg-input px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-semibold text-white transition-all disabled:opacity-50"
                  >
                    ➤
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
