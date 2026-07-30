'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Message {
  id: string
  type: 'user' | 'bot'
  text: string
}

const botResponses: Record<string, string> = {
  default: "I'm here to help! Ask me about our cleaning services, pricing, or availability.",
  hello: "Hello! Welcome to CleanSwift. How can I assist you today?",
  price: "Our home cleaning starts from $49, office cleaning from $79, and apartment cleaning from $59. Prices vary based on space and specific needs.",
  booking: "You can book a service by clicking the 'Book Now' button on any service card. It takes just 2 minutes!",
  availability: "We are available 24/7 for bookings. Cleaners are available daily in most areas.",
  trusted: "Yes! All our cleaners are verified professionals with background checks. We offer 100% satisfaction guarantee.",
  thanks: "You are welcome! Is there anything else I can help with?",
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      text: "Hi there! 👋 I'm your CleanSwift assistant. How can I help you today?",
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getBotResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase()

    if (
      lowerInput.includes('hello') ||
      lowerInput.includes('hi') ||
      lowerInput.includes('hey')
    ) {
      return botResponses.hello
    } else if (
      lowerInput.includes('price') ||
      lowerInput.includes('cost') ||
      lowerInput.includes('how much')
    ) {
      return botResponses.price
    } else if (
      lowerInput.includes('book') ||
      lowerInput.includes('booking') ||
      lowerInput.includes('order')
    ) {
      return botResponses.booking
    } else if (
      lowerInput.includes('available') ||
      lowerInput.includes('when') ||
      lowerInput.includes('time')
    ) {
      return botResponses.availability
    } else if (
      lowerInput.includes('trusted') ||
      lowerInput.includes('verify') ||
      lowerInput.includes('safe') ||
      lowerInput.includes('background')
    ) {
      return botResponses.trusted
    } else if (
      lowerInput.includes('thank') ||
      lowerInput.includes('thanks')
    ) {
      return botResponses.thanks
    }

    return botResponses.default
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: inputValue,
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate bot thinking
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: getBotResponse(inputValue),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 800)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg transition-all hover:shadow-xl"
      >
        <span className="text-2xl">{isOpen ? '✕' : '💬'}</span>
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
            <div className="bg-gradient-to-r from-primary to-secondary p-4 text-white">
              <h3 className="font-semibold">CleanSwift Assistant</h3>
              <p className="text-xs opacity-90">Always here to help</p>
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
                        message.type === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`max-w-xs rounded-lg px-4 py-2 text-sm ${
                          message.type === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-foreground'
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
                    className="flex gap-1"
                  >
                    <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce" />
                    <div
                      className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce"
                      style={{ animationDelay: '0.2s' }}
                    />
                    <div
                      className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce"
                      style={{ animationDelay: '0.4s' }}
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
                    placeholder="Type your message..."
                    className="flex-1 rounded-lg border border-border bg-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all disabled:opacity-50"
                  >
                    Send
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
