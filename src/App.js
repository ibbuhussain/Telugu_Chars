import React, { useState } from 'react';
import './App.css';

const letters = [
  { char: 'A', img: '/Telugu_Char/a.png', newImg: '/Telugu_Pro/a.png' },
  { char: 'Aa', img: '/Telugu_Char/aa.png', newImg: '/Telugu_Pro/aa.png' },
  // Add more letters as needed
];

function App() {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [showNewImage, setShowNewImage] = useState(false);

  const handleCardClick = (letter) => {
    if (selectedLetter && selectedLetter.char === letter.char) {
      // If the same letter is clicked, toggle the image
      setShowNewImage(!showNewImage);
    } else {
      // If a different letter is clicked, show the new image
      setSelectedLetter(letter);
      setShowNewImage(true);
    }
  };

  return (
    <div className="App">
      <h1>Telugu Alphabet</h1>
      <div className="card-container">
        {letters.map((letter) => (
          <div
            key={letter.char}
            className="card"
            onClick={() => handleCardClick(letter)}
          >
            {selectedLetter && selectedLetter.char === letter.char && showNewImage ? (
              <img src={letter.newImg} alt={letter.char} />
            ) : (
              <img src={letter.img} alt={letter.char} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
