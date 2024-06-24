import React, { useState } from 'react';
import './Popup.css';

const ImagePopup = ({ src, alt, likes, views, authorName, authorImage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const toggleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <>
      <img src={src} alt={alt} onClick={handleOpen} style={{ cursor: 'pointer' }} />
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <button onClick={handleClose}>Close</button>
            <img src={src} alt={alt} />
            <div className="popup-info">
              <div className="author">
                <img src={authorImage} alt="Profile picture" />
                <span>{authorName}</span>
              </div>
              <div className="stats">
                <span style={{ cursor: 'pointer' }} onClick={toggleLike}>
                  {liked ? '❤️' : '🤍'} {likeCount}
                </span>
                <span>👁️ {views}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImagePopup;
