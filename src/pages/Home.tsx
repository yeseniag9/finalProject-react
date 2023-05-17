import redBlaWh from '../assets/images/red-bla-wh.jpg'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import signInOnClick from '../components/DataTable'

function Home() {
  return (
    <div>
      <div style={{ backgroundImage: `url(${ redBlaWh })`, height: 1000 }} 
      className="mx-auto bg-cover"></div>

      <div className="bg-text">Sneakerhead?</div> 

      <div className="flex justify-center bg-stone-600 p-4">
      {
        <Button className="p-3 pl-14 pr-14 bg-red-600 m-4 font-semibold rounded hover:bg-slate-800 text-white hover:text-white">
          <Link to="/" onClick={ () => { signInOnClick()}}>
            Join Now
          </Link>
        </Button>
      }
      </div>
    </div>
  )
}

export default Home