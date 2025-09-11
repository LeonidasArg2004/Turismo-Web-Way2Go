// src/components/ui/Chatbot.tsx
import React, { useState } from 'react';

const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState('');

  const toggleChat = () => setOpen(!open);

  const handleSend = () => {
    if (input.trim() === '') return;
    const newMessage = { sender: 'Tú', text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput('');

    // Simula respuesta del bot (aquí harías fetch a tu backend)
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: 'Wayo', text: 'Es un placer ayudarte hoy 😊' }]);
    }, 500);
  };

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
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          fontSize: '24px',
          cursor: 'pointer',
          boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
          zIndex: 1000,
        }}
      >
        💬
      </button>

      {/* Ventana del chatbot */}
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '20px',
            width: '300px',
            height: '400px',
            background: '#fff',
            border: '1px solid #ccc',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 1000,
          }}
        >
          <div style={{ background: '#007bff', color: '#fff', padding: '10px', textAlign: 'center' }}>
            Chatbot
          </div>
          <div
            style={{
              flex: 1,
              padding: '10px',
              overflowY: 'auto',
            }}
          >
            {messages.map((msg, idx) => (
              <div key={idx}>
                <strong>{msg.sender}: </strong>
                <span>{msg.text}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', borderTop: '1px solid #ccc' }}>
            <input
              style={{ flex: 1, padding: '10px', border: 'none', outline: 'none' }}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Escribe un mensaje..."
            />
            <button
              style={{
                padding: '10px',
                background: '#007bff',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
              }}
              onClick={handleSend}
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;