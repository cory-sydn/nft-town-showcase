import assets from "../assets/index"

type cardProps = {
  iconUrl: string,
  iconText: string
}

function FeatureCard ({iconUrl, iconText}: cardProps) {
  return (
    <div className="bg-white m-10 p-6 rounded-md flex justify-around items-center flex-col hover:shadow-lg cursor-pointer w-40 h-40 minlg:w-80 minlg:h-80" >
      <img className="w-20 h-20 minlg:w-40 minlg:h-40 object-contain mb-1" src={iconUrl} alt={iconText}/>
      <p className="font-semibold font-IBMPlex text-base minlg:text-3xl text-tertiary">
        {iconText}
      </p>
    </div>
)}

type featureProps = {
  banner: string
}

function Features({banner}: featureProps) {
  return (
    <div className={`flex justify-center items-center p-16 sm:p-8 bg-primary ${banner}`}>
      <div className="flex flex-col items-center text-center w-full minmd:w-3/4">
        <div>
          <h1 className="font-bold font-IBMPlex text-5xl sm:text-4xl minmd:text-6xl minlg:text-8xl leading-12 minmd:leading-13 text-white" >
            Technologies
          </h1>
          <p className="font-bold font-IBMPlex text-5xl sm:text-4xl minmd:text-6xl minlg:text-8xl leading-12 minmd:leading-13 text-white">
            NFT Town Has been developed using a cross-platform technology, React Native.
          </p>
        </div>

        <div className="flex justify-center flex-wrap" >
          <FeatureCard iconUrl={assets.react} iconText="React Native"/>
          <FeatureCard iconUrl={assets.javascript} iconText="Javascript" />
        </div>
      </div>
    </div>
  )
}

export default Features