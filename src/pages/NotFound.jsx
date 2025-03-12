import ASCIIText from "../components/ASCIIText/ASCIIText"
import StarSky from "../components/StarSky/StarSky"

function NotFound() {
  return (
    <>
    <div className="w-screen h-screen flex justify-center items-center text-white">
        <div className="flex justify-center items-center">

        <ASCIIText
        text="404"
        enableWaves={true}
        planeBaseHeight={window.innerWidth < 780 ? 3 : 9}
        />
        <h1 className="absolute bottom-9 text-3xl">lost in space</h1>
        </div>
        <StarSky/>
    </div>
    </>
  )
}

export default NotFound