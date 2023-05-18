import seafoam from "../assets/images/seafoam.jpg"

function Seafoam() {
  return (
    <div>
        <div className="flex justify-center pt-14 mt-14 text-7xl font-sans font-semibold">Air Jordan 4 'Seafoam'</div>

        <div className="pt-1">
            <div className="pt-14 mt-6">
                <img className="mx-auto seafoam pt-14 mt-14" src={seafoam} alt="Air Jordan 4 Seafoam" />
                <div className="pt-5">   
                    <h1 className="flex justify-start text-3xl font-sans font-semibold pl-3 pt-14 mt-14">2023</h1>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Seafoam