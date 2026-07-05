import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { websiteData, searchWebsiteData } from '../data/websiteData';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  animate?: boolean; // bot messages: typewriter on first render
}

interface ChatOption {
  id: string;
  label: string;
  handler: () => void;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function makeId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

// ─── Typewriter component ─────────────────────────────────────────────────────

function Typewriter({
  text,
  speed = 14,
  onDone,
}: {
  text: string;
  speed?: number;
  onDone?: () => void;
}) {
  const [shown, setShown] = useState('');
  const doneRef = useRef(false);

  useEffect(() => {
    setShown('');
    doneRef.current = false;
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      if (i >= text.length) {
        setShown(text);
        window.clearInterval(id);
        if (!doneRef.current) {
          doneRef.current = true;
          onDone?.();
        }
      } else {
        setShown(text.slice(0, i));
      }
    }, speed);
    return () => window.clearInterval(id);
  }, [text, speed, onDone]);

  const isDone = shown.length >= text.length;

  return (
    <p className="text-sm whitespace-pre-line leading-relaxed">
      {shown}
      {!isDone && (
        <span className="inline-block w-[2px] h-[14px] bg-[#1a0a8a] ml-0.5 align-middle animate-pulse" />
      )}
    </p>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

const SleeveTechsChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: `Hi there! I'm SleeveBot, your ${websiteData.company.name} assistant. How can I help you today?`,
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [quickOptions, setQuickOptions] = useState<ChatOption[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [userInput, setUserInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // ── Scroll to bottom on new messages ──────────────────────────────────────
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // ── Focus input when chat opens ───────────────────────────────────────────
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // ── Core: add a user message then simulate bot reply ──────────────────────
  const sendUserMessage = useCallback(
    (userText: string, botReply: string, nextOptions: ChatOption[] = []) => {
      const userMsg: Message = {
        id: makeId(),
        text: userText,
        sender: 'user',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, userMsg]);
      setQuickOptions([]);
      setIsTyping(true);

      setTimeout(() => {
        setIsTyping(false);
        const botMsg: Message = {
          id: makeId(),
          text: botReply,
          sender: 'bot',
          timestamp: new Date(),
          animate: true,
        };
        setMessages((prev) => [...prev, botMsg]);
        setQuickOptions(nextOptions);
      }, 900);
    },
    []
  );

  // ── Main menu options (defined as a factory so they can be reused) ─────────
  const mainMenuOptions = useCallback((): ChatOption[] => [
    {
      id: 'services',
      label: 'Our Services',
      handler: () => showServices(),
    },
    {
      id: 'contact',
      label: 'Contact Us',
      handler: () => showContact(),
    },
    {
      id: 'about',
      label: 'About SleeveTechs',
      handler: () => showAbout(),
    },
  ], []); // eslint-disable-line react-hooks/exhaustive-deps

  // Set initial quick options after first render
  useEffect(() => {
    setQuickOptions(mainMenuOptions());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Back to main ──────────────────────────────────────────────────────────
  const backToMain = useCallback(() => {
    sendUserMessage(
      'Back to main menu',
      'Sure! What else can I help you with?',
      mainMenuOptions()
    );
  }, [sendUserMessage, mainMenuOptions]);

  // ── Services list ─────────────────────────────────────────────────────────
  const showServices = useCallback(() => {
    const reply =
      `Here are all our services:\n\n` +
      websiteData.services
        .map((s) => `• ${s.title}: ${s.shortDescription}`)
        .join('\n') +
      `\n\nTap any service below for more details.`;

    const serviceOptions: ChatOption[] = websiteData.services.map((s) => ({
      id: s.title,
      label: s.title,
      handler: () => showServiceDetail(s),
    }));
    serviceOptions.push({
      id: 'back',
      label: 'Back to Menu',
      handler: () => backToMain(),
    });

    sendUserMessage('Tell me about your services', reply, serviceOptions);
  }, [sendUserMessage, backToMain]);

  // ── Single service detail ─────────────────────────────────────────────────
  const showServiceDetail = useCallback(
    (service: (typeof websiteData.services)[0]) => {
      const reply =
        `${service.title}\n\n${service.fullDescription}\n\nKey Features:\n` +
        service.features.map((f) => `• ${f}`).join('\n');

      sendUserMessage(`Tell me about ${service.title}`, reply, [
        {
          id: 'contact_quote',
          label: 'Get a Quote',
          handler: () => showContact(),
        },
        {
          id: 'back_services',
          label: 'All Services',
          handler: () => showServices(),
        },
        {
          id: 'back_main',
          label: 'Main Menu',
          handler: () => backToMain(),
        },
      ]);
    },
    [sendUserMessage, backToMain, showServices]
  );

  // ── Contact ───────────────────────────────────────────────────────────────
  const showContact = useCallback(() => {
    const reply =
      `Here's how to reach us:\n\n` +
      `• Email: ${websiteData.contact.email}\n` +
      `• Phone: ${websiteData.contact.phone}\n` +
      `• Location: ${websiteData.contact.location}\n` +
      `• Availability: ${websiteData.contact.availability}`;

    sendUserMessage('How can I contact you?', reply, [
      {
        id: 'back',
        label: 'Back to Menu',
        handler: () => backToMain(),
      },
    ]);
  }, [sendUserMessage, backToMain]);

  // ── About ─────────────────────────────────────────────────────────────────
  const showAbout = useCallback(() => {
    const reply =
      `${websiteData.company.name}: "${websiteData.company.tagline}"\n\n` +
      `${websiteData.company.description}\n\n` +
      `Founded: ${websiteData.company.founded} | Location: ${websiteData.company.location}`;

    sendUserMessage('Tell me about SleeveTechs', reply, [
      {
        id: 'values',
        label: 'Our Values',
        handler: () =>
          sendUserMessage(
            'What are your values?',
            `Our core values:\n\n` +
              websiteData.company.values
                .map((v) => `• ${v.title}: ${v.description}`)
                .join('\n'),
            [{ id: 'back', label: 'Back to Menu', handler: () => backToMain() }]
          ),
      },
      {
        id: 'journey',
        label: 'Our Journey',
        handler: () =>
          sendUserMessage(
            'Tell me about your journey',
            `Our journey:\n\n` +
              websiteData.company.journey
                .map((m) => `${m.year}: ${m.title} - ${m.description}`)
                .join('\n'),
            [{ id: 'back', label: 'Back to Menu', handler: () => backToMain() }]
          ),
      },
      {
        id: 'back',
        label: 'Back to Menu',
        handler: () => backToMain(),
      },
    ]);
  }, [sendUserMessage, backToMain]);

  // ── Free-text send ────────────────────────────────────────────────────────
  const handleSend = useCallback(() => {
    const text = userInput.trim();
    if (!text || isTyping) return;

    setUserInput('');
    const response = searchWebsiteData(text);

    const userMsg: Message = {
      id: makeId(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setQuickOptions([]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const botMsg: Message = {
        id: makeId(),
        text: response,
        sender: 'bot',
        timestamp: new Date(),
        animate: true,
      };
      setMessages((prev) => [...prev, botMsg]);
      setQuickOptions([
        {
          id: 'services',
          label: 'View Services',
          handler: () => showServices(),
        },
        {
          id: 'contact',
          label: 'Contact Us',
          handler: () => showContact(),
        },
        {
          id: 'back',
          label: 'Main Menu',
          handler: () => backToMain(),
        },
      ]);
    }, 900);
  }, [userInput, isTyping, showServices, showContact, backToMain]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSend();
  };

  // ── Mark a bot message as fully typed ─────────────────────────────────────
  const markTyped = useCallback((id: string) => {
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, animate: false } : m))
    );
  }, []);

  // ── Is any bot message currently animating? ───────────────────────────────
  const isAnimating = messages.some((m) => m.sender === 'bot' && m.animate);

  // ─── Render ───────────────────────────────────────────────────────────────
  return (
    <>
      {/* Floating button - hidden when chat is open */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            key="chat-btn"
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#1a0a8a] to-[#e91e8c] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            aria-label="Open chat"
          >
            <MessageCircle size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Mobile backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40 sm:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Panel */}
            <motion.div
              key="panel"
              initial={{ y: 40, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.97 }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              className={[
                // Positioning
                'fixed z-50 flex flex-col',
                // Mobile: full-width bottom sheet
                'bottom-0 left-0 right-0 h-[85vh]',
                'rounded-t-3xl',
                // Desktop: floating panel
                'sm:bottom-6 sm:right-6 sm:left-auto sm:top-auto',
                'sm:w-[380px] sm:h-[600px]',
                'sm:rounded-3xl',
                // Appearance
                'bg-white shadow-2xl overflow-hidden',
              ].join(' ')}
            >
              {/* ── Header ── */}
              <div className="bg-gradient-to-r from-[#1a0a8a] to-[#e91e8c] text-white px-4 py-3 flex items-center justify-between flex-shrink-0">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Bot size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-base leading-tight">SleeveBot</p>
                    <p className="text-xs opacity-80">SleeveTechs Assistant</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/20 p-2 rounded-full transition-colors duration-200 cursor-pointer"
                  aria-label="Close chat"
                >
                  <X size={18} />
                </button>
              </div>

              {/* ── Messages ── */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scroll-smooth">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {/* Bot avatar */}
                    {msg.sender === 'bot' && (
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-[#1a0a8a] to-[#e91e8c] flex items-center justify-center mb-0.5">
                        <Bot size={14} className="text-white" />
                      </div>
                    )}

                    <div
                      className={[
                        'max-w-[78%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed',
                        msg.sender === 'user'
                          ? 'bg-gradient-to-r from-[#1a0a8a] to-[#e91e8c] text-white rounded-br-sm'
                          : 'bg-gray-100 text-gray-800 rounded-bl-sm',
                      ].join(' ')}
                    >
                      {msg.sender === 'bot' && msg.animate ? (
                        <Typewriter
                          text={msg.text}
                          speed={14}
                          onDone={() => {
                            markTyped(msg.id);
                            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
                          }}
                        />
                      ) : (
                        <p className="whitespace-pre-line">{msg.text}</p>
                      )}
                      <p
                        className={`text-[10px] mt-1 ${
                          msg.sender === 'user' ? 'text-white/60 text-right' : 'text-gray-400'
                        }`}
                      >
                        {msg.timestamp.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    </div>

                    {/* User avatar */}
                    {msg.sender === 'user' && (
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center mb-0.5">
                        <User size={14} className="text-gray-600" />
                      </div>
                    )}
                  </motion.div>
                ))}

                {/* Typing indicator */}
                <AnimatePresence>
                  {isTyping && (
                    <motion.div
                      key="typing"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="flex items-end gap-2 justify-start"
                    >
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-[#1a0a8a] to-[#e91e8c] flex items-center justify-center">
                        <Bot size={14} className="text-white" />
                      </div>
                      <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-bl-sm">
                        <div className="flex gap-1 items-center h-4">
                          {[0, 0.15, 0.3].map((delay, i) => (
                            <span
                              key={i}
                              className="w-2 h-2 rounded-full bg-[#1a0a8a] animate-bounce"
                              style={{ animationDelay: `${delay}s` }}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div ref={messagesEndRef} />
              </div>

              {/* ── Quick options ── */}
              <AnimatePresence>
                {quickOptions.length > 0 && !isTyping && !isAnimating && (
                  <motion.div
                    key="options"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="px-4 pt-2 pb-1 flex flex-wrap gap-2 flex-shrink-0 border-t border-gray-100"
                  >
                    {quickOptions.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={opt.handler}
                        className="text-xs font-medium px-3 py-1.5 rounded-full border border-[#1a0a8a]/30 text-[#1a0a8a] hover:bg-[#1a0a8a] hover:text-white transition-colors duration-200 cursor-pointer whitespace-nowrap"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ── Input bar ── */}
              <div className="px-4 py-3 border-t border-gray-100 bg-white flex-shrink-0">
                <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-2 focus-within:border-[#1a0a8a]/50 focus-within:ring-2 focus-within:ring-[#1a0a8a]/10 transition-all duration-200">
                  <input
                    ref={inputRef}
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask me anything..."
                    disabled={isTyping || isAnimating}
                    className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-400 outline-none disabled:opacity-50"
                    aria-label="Type your message"
                  />
                  <button
                    onClick={handleSend}
                    disabled={!userInput.trim() || isTyping || isAnimating}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-[#1a0a8a] to-[#e91e8c] text-white flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-md transition-all duration-200 cursor-pointer"
                    aria-label="Send message"
                  >
                    <Send size={14} />
                  </button>
                </div>
                <p className="text-center text-[10px] text-gray-400 mt-1.5">
                  Powered by SleeveTechs
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default SleeveTechsChatbot;
