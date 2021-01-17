import {useState, useEffect } from 'react'
import Player from './components/Player';


function App() {
 const [songs] = useState([
   {
     title: "Good Mistake",
     artist: "Mr Little Jeans",
     img_src: ".images/song1.jpg",
     src: "./zmusic/good-mistake.mp3"
   },
    {
     title: "Apperition blues(live)",
     artist: "The Ragged Jubilee",
     img_src: ".images/song-2.jpg",
     src: "./zmusic/i-love-you-more-than-youll-ever-know.mp3"
   },
   {
    title: "I love you more than you'll ever know",
    artist: "Blood, Sweat and Tears",
    img_src: ".images/song-3.jpg",
    src: "./zmusic/laughing.mp3"
  },
  {
    title: "Laughing",
    artist: "The Guess Who",
    img_src: ".images/song-4.jpg",
    src: "./zmusic/Apparittioin-blues.mp3"
  }
 ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
  setNextSongIndex(() => {
  if (currentSongIndex + 1 > songs.length - 1) {
    return 0;
      } else {
    return currentSongIndex + 1;
       }
   });
   }, [currentSongIndex]);

  return (
    <div className="App">
     <Player
      currentSongIndex={currentSongIndex}
      setCurrentSongIndex={setCurrentSongIndex}
      nextSongIndex={nextSongIndex}
      songs={songs}
     />
    </div>
  );
}

export default App;
