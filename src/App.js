import {useState, useEffect } from 'react'
import Player from './components/Player';


function App() {                       //this function loads the songs,artist name and source
 const [songs] = useState([
   {
     title: "Good Mistake",               //these are the songs
     artist: "Mr Little Jeans",
     img_src: "../images/song-1.jpg",
     src: "./zmusic/good-mistake.mp3"
   },
    {
     title: "Apperition blues(live)",
     artist: "The Ragged Jubilee",                      //song
     img_src: "../images/song-2.jpg",
     src: "./zmusic/apparition-blues.mp3"
   },
   {
    title: "I love you more than you'll ever know",
    artist: "Blood, Sweat and Tears",
    img_src: "../images/song-3.jpg",                             //song
    src: "./zmusic/i-love-you-more-than-youll-ever-know.mp3"
  },
  {
    title: "Laughing",
    artist: "The Guess Who",                    //song
    img_src: "../images/song-4.jpg",
    src: "./zmusic/laughing.mp3"
  }
 ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);              // this checks the current state of the music player
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);    //this allows the user to play next

  useEffect(() => {
  setNextSongIndex(() => {
  if (currentSongIndex + 1 > songs.length - 1) {                      //This if statement makes sure that the current song index is correct
    return 0;
      } else {                                         
    return currentSongIndex + 1;                                       
       }
   });
   }, [currentSongIndex]);

  return (
    <div className="App">
     <Player
      currentSongIndex={currentSongIndex}                                //this loads all fo the conent in the app
      setCurrentSongIndex={setCurrentSongIndex}
      nextSongIndex={nextSongIndex}
      songs={songs}
     />
    </div>
  );
}

export default App;
