import {useState} from 'react'
import Player from './components/Player';
import PlayerDetails from './components/PlayerDetails'

function App() {
 const [songs, setSongs] = useState([
   {
     title: "Good Mistake",
     artist: "Mr Little Jeans",
     img_src: ".images/song1.jpg",
     src: "./zmusic/on-n-on.mp3"
   },
    {
     title: "Apperition blues(live)",
     artist: "The Ragged Jubilee",
     img_src: ".images/song-2.jpg",
     src: "./zmusic/somebody-new.mp3"
   },
   {
    title: "I love you more than you'll ever know",
    artist: "Blood, Sweat and Tears",
    img_src: ".images/song-3.jpg",
    src: "./zmusic/somebody-new.mp3"
  },
  {
    title: "Laughing",
    artist: "The Guess Who",
    img_src: ".images/song-4.jpg",
    src: "./zmusic/somebody-new.mp3"
  }
 ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  return (
    <div className="App">
     <Player
     song={songs[currentSongIndex]}
     nextSong={songs[nextSongIndex]}
     />
    </div>
  );
}

export default App;
