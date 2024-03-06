import { useState } from 'react';
import MessageBubbleBot from './MessageBubbleBot';
import MessageBubbleUser from './MessageBubbleUser';

export default function ChatWindow() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([{ sender: 'bot', text: 'Hello, how can I help you?' }]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setMessage(value);
  };
  function send(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    setMessages([...messages, { sender: 'user', text: message }]);
    setMessage('');
  }

  return (
    <>
      <div
        className="bg-light rounded p-2 position-absolute"
        style={{ width: 'max-content', bottom: '90px', right: '20px' }}
      >
        <div style={{ height: '350px', overflow: 'auto' }}>
          {messages.map((message, i) => {
            if (message.sender === 'bot') return <MessageBubbleBot key={i} content={message.text} />;
            else if (message.sender === 'user') return <MessageBubbleUser key={i} content={message.text} />;
          })}
        </div>
        <form onSubmit={send}>
          <div className="d-flex">
            <textarea name="message" value={message} onChange={handleInputChange} className="form-control m-2" />
            <button type="submit" className="m-2 btn btn-primary">
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
