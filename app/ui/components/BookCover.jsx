const BookCover = ({ title, color, isHovered }) => {
  return (
    <div className="book-content">
      {/* Front cover */}
      <div 
        className={`book-cover book-front-cover ${isHovered ? 'book-front-cover-open' : ''}`}
        style={{ backgroundColor: color }}
      >
        <div className="book-title">
          <h3>{title}</h3>
        </div>
        <div className="book-spine"></div>
      </div>
      
      {/* Pages */}
      <div className="book-pages">
        {/* Generate multiple page elements for a realistic look */}
        {Array.from({ length: 5 }).map((_, index) => (
          <div 
            key={index} 
            className={`book-page ${isHovered ? 'book-page-open' : ''}`}
            style={{ 
              zIndex: 5 - index,
              transform: isHovered 
                ? `rotateY(${-180 + (index * 5)}deg)`
                : 'rotateY(0deg)',
              transitionDelay: isHovered 
                ? `${0.05 * index}s` 
                : `${0.05 * (4 - index)}s`
            }}
          >
            <div className="book-page-content"></div>
          </div>
        ))}
      </div>
      
      {/* Back cover */}
      <div 
        className="book-cover book-back-cover"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
};

export default BookCover;