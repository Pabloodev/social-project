import { useEffect } from 'react';
import { X } from 'lucide-react';

const BookModal = ({ 
  isOpen, 
  onClose, 
  title,
  content 
}) => {

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="book-modal-overlay" onClick={onClose}>
      <div 
        className="book-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="book-modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className="book-modal-content">
          <h2 className="book-modal-title">{title}</h2>
          <div className="book-modal-body">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;