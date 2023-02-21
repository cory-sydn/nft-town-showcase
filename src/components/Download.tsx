import assets from "../assets/index";

function Download() {
	const url = "https://github.com/cory-sydn/cory-sydn-mobile-nft-town";

	return (
		<div className="flex justify-center items-center p-16 sm:p-8 bg-white">
			<div className="flex flex-col items-center text-center w-full minmd:w-3/4">
				<div>
					<h1 className="font-bold font-IBMPlex text-5xl sm:text-4xl minmd:text-6xl minlg:text-8xl leading-12 minmd:leading-13 text-black">
						Download the Source Code{" "}
					</h1>
					<p className="my-5 minmd:my-10 font-IBMPlex font-light text-xl minmd:text-3xl minlg:text-4xl minmd:leading-16 text-black">
						Get source code on github
					</p>
					<button
						className="bg-primary mt-4 py-4 px-6 text-white text-lg minmd:text-2xl font-IBMPlex font-medium rounded-lg hover:shadow-2xl"
						onClick={() => (window.open(url, '_blank'))}
					>
						Source Code
					</button>

          <div className="flex justify-center items-center">
            <img className="w-full h-full object-cover" src={assets.scene} alt="scene"/>
          </div>
				</div>
			</div>
		</div>
	);
}

export default Download;
