import React, {useState, useRef, useEffect} from 'react'
import PlayerDetails from './PlayerDetails'
import PlayerControls from './PlayerControls'

function Player(props) {
     {/*This gets the audio*/}
    const audioEl= useRef(null);
     {/*Checks if the song is playing*/}
    const[isPlaying, setIsPlaying] = useState(false);
 {/*If anything is playing, it will continue playing, if not it will pause.*/}
    useEffect(() =>{
       if (isPlaying) {
           audioEl.current.play();
           
       } else {
           audioEl.current.pause();
       }

    });
  {/*this function skips the song and the song index*/}
    const SkipSong = (forwards = true) => {
        if (forwards) {
        props.setCurrentSongIndex(() => {
           let temp = props.currentSongIndex;
           temp++;

           if (temp > props.songs.length -1) {
               temp = 0;
           }

            return temp;
        });
         {/*If its at the end it goes back to the first song*/}
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;
     
                if (temp < 0) {
                    temp = props.songs.length -1;
                }
     
                 return temp;
             });
        }
    }
 
    return (
        <div className="c-player">
             {/*Getting the props songs in our array*/}
        <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
        <h4>Playing now</h4>
        <PlayerDetails
         /*The props from the song */
         song={props.songs[props.currentSongIndex]}
          />
           {/*Puts the player controls in the player*/}
        <PlayerControls 
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying} 
        SkipSong={SkipSong} 
        />
        <p>Next up: <span>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</span></p>
    </div>
    )
}

export default Player;
