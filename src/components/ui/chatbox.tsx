// src/components/ui/Chatbot.tsx
import React, { useState, useEffect } from 'react';
//import iconoChat from "../../assets/iconochat1.0.png";

type ButtonOption = {
  label: string;
  nextButtons?: ButtonOption[];
  action?: () => void;
};

type Message = {
  sender: 'user' | 'bot';
  text: string;
  buttons?: ButtonOption[];
};

type ChatbotProps = {
  navigateToPage?: (page: string) => void;
};

const Chatbot: React.FC<ChatbotProps> = ({ navigateToPage }) => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const toggleChat = () => setOpen(!open);

  const closeAndResetChat = () => {
    setOpen(false);
    setMessages([]);
    setInput('');
  };

  const handleButtonClick = (btn: ButtonOption) => {
    handleSend(btn.label); // mensaje del usuario

    // Quitar botones del último mensaje del bot
    setMessages(prev => {
      const newMessages = [...prev];
      const lastBotIndex = newMessages.map(m => m.sender).lastIndexOf('bot');
      if (lastBotIndex >= 0) {
        delete newMessages[lastBotIndex].buttons;
      }
      return newMessages;
    });

    if (btn.nextButtons && btn.nextButtons.length > 0) {
      // Si hay más botones, mostrarlos
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { sender: 'bot', text: 'Selecciona una opción:', buttons: btn.nextButtons },
        ]);
      }, 300);
    } else if (btn.label === "Terminar la conversación") {
      // Botón de terminar
      closeAndResetChat();
    } else if (btn.label === "Contactar agente humano") {
      // Botón de WhatsApp
      window.open('https://wa.me/50581869243', '_blank');
      closeAndResetChat();
    } else {
      // Si no hay nextButtons ni es botón final, enviar los botones finales
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          {
            sender: 'bot',
            text: 'Parece que mi viaje ha llegado a su fin 🥺. Si deseas, puedes terminar la conversación o contactar a un agente humano:',
            buttons: [
              { label: 'Terminar la conversación' },
              { label: 'Contactar agente humano' },
            ],
          },
        ]);
      }, 500);
    }
  };

  const handleSend = (text?: string) => {
    const messageText = text ?? input;
    if (!messageText.trim()) return;
    setMessages(prev => [...prev, { sender: 'user', text: messageText }]);
    setInput('');
  };

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        {
          sender: 'bot',
          text: '¡Hola! 👋 Soy Wayo, tu guía turístico local. ¡Estoy listo para ayudarte a descubrir lugares increíbles! 🌎 ¿Por dónde empezamos?',
          buttons: [
            {
              label: "Rutas Turísticas",
              nextButtons: [
                { label: "Rutas en Managua", action: () => navigateToPage?.("Rutas Turísticas") },
                { label: "Rutas en León", action: () => navigateToPage?.("Rutas Turísticas") },
              ],
            },
            {
              label: "Transporte",
              nextButtons: [
                { label: "Transporte Privado", action: () => navigateToPage?.("Transporte") },
                { label: "Transporte Público", action: () => navigateToPage?.("Transporte") },
              ],
            },
            {
              label: "Hospedaje & Restaurantes",
              nextButtons: [
                { label: "Hoteles", action: () => navigateToPage?.("Hospedaje & Restaurantes") },
                { label: "Restaurantes", action: () => navigateToPage?.("Hospedaje & Restaurantes") },
              ],
            },
            { label: "Ofertas", action: () => navigateToPage?.("Ofertas") },
          ],
        },
      ]);
    }
  }, [open]);

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={toggleChat}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: '#fff',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 6px 12px rgba(0,0,0,0.25)',
          zIndex: 1000,
          transition: 'transform 0.2s ease-in-out',
          padding: '0',
          overflow: 'hidden'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <img 
          src="/asset/iconochat1.0.png"
          alt="Chatbot" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </button>

      {/* Ventana del chatbot */}
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '20px',
            width: '320px',
            height: '450px',
            background: '#fff',
            borderRadius: '15px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            animation: 'fadeIn 0.3s ease',
            zIndex: 1000,
          }}
        >
          {/* Header */}
          <div
            style={{
              background: 'linear-gradient(135deg, #007bff, #0056b3)',
              color: '#fff',
              padding: '12px',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '16px',
            }}
          >
            Habla con Wayo...
          </div>

          {/* Mensajes */}
          <div
            style={{
              flex: 1,
              padding: '12px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              backgroundColor: '#f9f9f9',
            }}
          >
            {messages.map((msg, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                <div
                  style={{
                    background: msg.sender === 'user' ? '#DCF8C6' : '#e5e5ea',
                    color: '#000',
                    padding: '8px 12px',
                    borderRadius: '12px',
                    maxWidth: '75%',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  }}
                >
                  {msg.text}
                </div>

                {msg.buttons && (
                  <div style={{ display: 'flex', flexDirection: 'column', marginTop: '6px', gap: '6px' }}>
                    {msg.buttons.map((btn, i) => (
                      <button
                        key={i}
                        onClick={() => handleButtonClick(btn)}
                        style={{
                          padding: '6px 12px',
                          borderRadius: '20px',
                          border: 'none',
                          cursor: 'pointer',
                          background: '#007bff',
                          color: '#fff',
                          fontSize: '13px',
                          width: 'fit-content',
                          minWidth: '50px',
                          transition: 'background 0.2s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = '#0056b3')}
                        onMouseLeave={(e) => (e.currentTarget.style.background = '#007bff')}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Input */}
          <div
            style={{
              display: 'flex',
              borderTop: '1px solid #ddd',
              background: '#fff',
              padding: '8px',
            }}
          >
            <input
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                padding: '10px',
                fontSize: '14px',
                borderRadius: '8px',
                backgroundColor: '#f1f1f1',
                marginRight: '8px',
              }}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Escribe un mensaje..."
            />
            <button
              style={{
                padding: '10px 14px',
                background: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#0056b3')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#007bff')}
              onClick={() => handleSend()}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;