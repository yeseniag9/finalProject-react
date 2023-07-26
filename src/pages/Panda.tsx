import panda from "../assets/images/panda.jpg"

function Panda() {
  return (
    <div>
        <div className="flex justify-center pt-14 mt-14 text-7xl font-sans font-semibold">Dunk Low 'Panda'</div>
        <img className="mx-auto"src={panda} alt="Dunk Low Panda" />
        <h1 className="flex justify-start text-3xl font-sans font-semibold pl-3">2021</h1>
    </div>
  )
}

export default Panda 