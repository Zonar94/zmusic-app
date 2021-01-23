//import react
import React from 'react'
//import icon from fontawesomeicon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//imports the icon for the controls from fontawesome 
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'

function Controls(props) {                 //this creates the props for the controls, pause, next and backwards
    return (
        <div className="c-player--controls">
            {/*This is the forwards skip song button*/}
            <button className="skip-btn" onClick={() => props.SkipSong(false)}>   
             {/*Grabs the fontawesome icon*/}
                <FontAwesomeIcon icon={faBackward} />
            </button>
            {/*This is the play button*/}
            <button className="play-btn" onClick={() => props.setIsPlaying(!props.isPlaying)}>
                {/*THis is loads ub the pause and play button */}
                <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
            </button> 
            {/*This is backwards skip button*/}
            <button className="skip-btn" onClick={() => props.SkipSong()}>
                 {/*This loads up the forwards button*/}
                <FontAwesomeIcon icon={faForward} />
            </button>
        </div>
    )                                                                  
}

export default Controls
