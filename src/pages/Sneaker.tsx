import panda from "../assets/images/panda.jpg"
import seafoam from "../assets/images/seafoam.jpg"

function Sneaker() {
  return (
    <div>
        <div className="flex justify-center pt-14 mt-14 text-7xl font-sans font-semibold">All Sneakers</div>
        <div className="flex flex-row">
            <div className="flex flex-col">
                <img className="max-w-md p-14 pt-10" src={panda} alt="Dunk Low Panda" />
            </div>
            <div className="pt-7">
                <div className="flex flex-col pt-14">
                    <img className="max-w-lg pt-14" src={seafoam} alt="Air Jordan 4 Seafoam" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sneaker