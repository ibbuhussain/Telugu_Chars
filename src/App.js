import React, { useState } from 'react';
import './App.css';
const letters = [
  { char: 'A', img: '/Telugu_Char/a.png', newImg: '/Telugu_Pro/a.png' },
  { char: 'Aa', img: '/Telugu_Char/aa.png', newImg: '/Telugu_Pro/aa.png' },
  { char: 'e', img: '/Telugu_Char/e.png', newImg: '/Telugu_Pro/e.png' },
  { char: 'ee', img: '/Telugu_Char/ee.png', newImg: '/Telugu_Pro/ee.png' },
  { char: 'oo', img: '/Telugu_Char/oo.png', newImg: '/Telugu_Pro/oo.png' },
  { char: 'oou', img: '/Telugu_Char/oou.png', newImg: '/Telugu_Pro/oou.png' },
  { char: 'ru', img: '/Telugu_Char/ru.png', newImg: '/Telugu_Pro/ru.png' },
  { char: 'ruu', img: '/Telugu_Char/ruu.png', newImg: '/Telugu_Pro/ruu.png' },
  { char: 'ae', img: '/Telugu_Char/ae.png', newImg: '/Telugu_Pro/ae.png' },
  { char: 'aee', img: '/Telugu_Char/aee.png', newImg: '/Telugu_Pro/aee.png' },
  { char: 'aei', img: '/Telugu_Char/aei.png', newImg: '/Telugu_Pro/aei.png' },
  { char: 'o', img: '/Telugu_Char/o.png', newImg: '/Telugu_Pro/o.png' },
  { char: 'oh', img: '/Telugu_Char/oh.png', newImg: '/Telugu_Pro/oh.png' },
  { char: 'aao', img: '/Telugu_Char/aao.png', newImg: '/Telugu_Pro/aao.png' },
  { char: 'am', img: '/Telugu_Char/am.png', newImg: '/Telugu_Pro/am.png' },
  { char: 'aaha', img: '/Telugu_Char/aaha.png', newImg: '/Telugu_Pro/aaha.png' },
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
      <h1>Telugu Alphabets</h1>
      <h1 className='subHeading'>Achulu  </h1>
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
