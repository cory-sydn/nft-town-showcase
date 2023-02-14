import { Download, SectionWrapper, Button, Features } from "./components/index";
import assets from "./assets/index"

function App() {
	return (
		<div className="App">
			<SectionWrapper
				title="Welcome your own NFT Town. Start Selling NFTs. Build Your NFT art Business"
				description="Buy, store, collect NFTs, exchange and earn crypto. Join 25+ million people using NFT Town marketplace"
        showBtn={true}
        mockupImage={assets.homeHero}
        banner="banner"
        reverse={false}
			/>
      <SectionWrapper
				title="NFT Town is a top-notch NFT marketplace with a user-friendly interface"
				description="Its user interface is intuitive, with a modern and stylish design that makes it easy for users to navigate and find the NFTs they're interested in. With its excellent sales performance, NFT Town is an ideal choice for anyone looking to buy, sell or trade NFTs in a safe and secure environment"
        showBtn={false}
        mockupImage={assets.homeCards}
        banner=""
        reverse={true}
			/>
      <Features banner={"banner03"} />
      <SectionWrapper
				title="Deployment"
				description="NFT Town is built using expo which run natively on all users devices"
        showBtn={false}
        mockupImage={assets.feature}
        banner=""
        reverse={true}
			/>
      <SectionWrapper
				title="NFT Town has become a go-to destination for both NFT enthusiasts and collectors"
				description="The app contains two screens. First one allow users to see the list of all NFTs and search between them. Second one shows the details of a selected NFT"
        showBtn={false}
        mockupImage={assets.mockup}
        banner="banner02"
        reverse={false}
			/>
      <Download />

      <footer className="px-4 py-2 grid place-content-center bg-primary banner04">
        <p className="my-5 minmd:my-10 font-IBMPlex font-light text-xl minmd:text-3xl minlg:text-4xl minmd:leading-16 text-white">
          Made with ❤️ by Koray Soydan
        </p>
      </footer>
    </div>
	);
}

export default App;
