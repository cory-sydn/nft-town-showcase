import assets from "../assets/index"
import Button from "./Button"

type WrapperProps ={
  title: string,
  description: string,
  showBtn: boolean,
  mockupImage: string,
  banner: string | null,
  reverse: boolean
}

const SectionWrapper = ({title, description, showBtn, mockupImage, banner, reverse}: WrapperProps) => {
  return (
    <div className={`min-h-screen flex justify-center items-center p-16 sm:p-8 bg-white ${banner}
    ${reverse ? 'bg-white flex-row-reverse md:flex-col-reverse' : 'bg-primary flex-row md:flex-col'} `} >
      <div className={`flex flex-1 items-center w-11/12 sm:w-full minmd:w-3/4`
      }>
        <div className={`flex-1 w-full flex justify-start flex-col md:mb-10 fadeLeftMini
           ${reverse
            ? 'fadeRightMini text-right text-black'
            : 'fadeLeftMini text-left text-white'}`
        }>
          <h1 className="font-bold font-IBMPlex text-5xl sm:text-4xl minmd:text-6xl minlg:text-8xl leading-12 minmd:leading-13">
            {title}
          </h1>
          <p className="my-5 minmd:my-10 font-IBMPlex font-light text-xl minmd:text-3xl minlg:text-4xl minmd:leading-16" >{description}</p>
          {showBtn && (
            <Button
              assetUrl={assets.expo}
              link="https://expo.dev/@corysydn/MobileNFTTOWN?serviceType=classic&distribution=expo-go"
            />
          )}
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center p-8 sm:px-0" >
        <img
          className={`w-full h-full minmd:w-11/12 minmd:h-11/12 object-contain
            ${reverse
              ? 'fadeRightMini'
              : 'fadeLeftMini'}`
          }
          src={mockupImage}
          alt="home hero"/>
      </div>

    </div>
  )
}

export default SectionWrapper