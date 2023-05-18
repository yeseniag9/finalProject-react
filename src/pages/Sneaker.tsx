import panda from "../assets/images/panda.jpg"
import seafoam from "../assets/images/seafoam.jpg"
import Panda from "../pages/Panda"

function Sneaker() {
  return (
    <div>
        <div className="flex justify-center pt-14 mt-14 text-7xl font-sans font-semibold">All Sneakers</div>
        <div className="flex flex-row">
            <div className="flex flex-col">
                <a href="Panda"><img className="max-w-md p-14 pt-10 tracking-tighter" src={panda} alt="Dunk Low Panda" /></a>
            </div>
            <div className="pt-7">
                <div className="flex flex-col pt-14">
                    <a href="Seafoam"><img className="max-w-lg pt-14" src={seafoam} alt="Air Jordan 4 Seafoam" /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sneaker