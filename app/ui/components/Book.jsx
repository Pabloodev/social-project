'use client'

import { useState } from 'react';
import BookModal from './BookModal';
import BookCover from './BookCover';

const Book = ({ 
  title, 
  content, 
  coverColor = '#8B4513' // Default to a brown leather color
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className="book-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsOpen(true)}
      >
        <div className={`book ${isHovered ? 'book-hover' : ''}`}>
          <BookCover 
            title={title} 
            color={coverColor} 
            isHovered={isHovered} 
          />
        </div>
      </div>

      <BookModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        title={title}
        content={content}
      />
    </>
  );
};

export default Book;