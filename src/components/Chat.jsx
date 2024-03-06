import ChatWindow from './ChatWindow';
import { useState } from 'react';

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ChatWindow isOpen={isOpen} />

      <button
        className="btn btn-primary rounded-circle position-absolute d-flex align-items-center"
        style={{ bottom: '20px', right: '20px', width: '50px', height: '50px' }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <span className="material-symbols-outlined">close</span>
        ) : (
          <span className="material-symbols-outlined">smart_toy</span>
        )}
      </button>
    </>
  );
}
