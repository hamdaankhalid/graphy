import Link from "next/link"

export interface NavOption {
	text: string;
	link: string;
}

export default function Navbar({ navOptions }: { navOptions: Array<NavOption>}) {
	return (
		<>
			<div className="navBar">
				<div className="title">
					GRAPHY	
				</div>
				
				<div className="navOptions">
					{navOptions.map(({text, link}, id) => {
						return (
						<div className="navOption" key={id}>
							<Link href={link}>{text}</Link>
						</div>);
					})}	
				</div>
			</div>
		</>
	);
}

