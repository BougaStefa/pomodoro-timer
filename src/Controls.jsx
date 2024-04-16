import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay,faRefresh,faPause } from "@fortawesome/free-solid-svg-icons"

export default function Controls() {
  return (
    <div className='timer-control'>
        <button id='start_stop'><FontAwesomeIcon icon={faPlay} style={{color:'white'}}/><FontAwesomeIcon icon={faPause} style={{color:'white'}}/></button>
        <button id='reset'><FontAwesomeIcon icon={faRefresh} style={{color:'white'}}/></button>
    </div>
  )
}
