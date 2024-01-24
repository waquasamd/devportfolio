import PacmanLoader from 'react-spinners/PacmanLoader';

const Spinner = (props)=>{
return(
<PacmanLoader
  color="#1D9BF0"
  size={75}
  speedMultiplier={1}
  style={{position:"fixed",top:"250px",right:"825px"}}
/>
)
}
export default Spinner;