import seafoam from "../assets/images/seafoam.jpg"

function Seafoam() {
  return (
    <div>
        <div className="flex justify-center pt-14 mt-14 text-7xl font-sans font-semibold">Air Jordan 4 'Seafoam'</div>
        <img className="h-auto max-w-full" src={seafoam} alt="Air Jordan 4 Seafoam" />
        <h1 className="flex justify-start text-3xl font-sans font-semibold pl-3">2023</h1>
    </div>
  )
}

export default Seafoam