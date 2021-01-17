import React from 'react'
import { FontAwesomeIcon } from '@fontawesome/react-fontawesome'
import { faPlayer, faPause, faForwards, faBackward, faPlay } from '@fortawesome/free-solid-svg-icons';

function PlayerControls() {
    return (
        <div className="c-player--controls">
            <button className="skin-btn">
                <FontAwesomeIcon icon={faBackward}/>
            </button>
            <button className="play-btn">
                <FontAwesomeIcon icon={faPlay}/>
            </button>
            <button className="skip-btn">
                <FontAwesomeIcon icon={faForwards}/>
            </button>
            
        </div>
    )
}

export default PlayerControls
