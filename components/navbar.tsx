import Link from "next/link"

export interface NavOptions {
	text: string;
	link: string;
}

export default function Navbar({ navOptions }: { navOptions: Array<NavOptions>}) {
	console.log(navOptions);
	return (
		<>
			<div class="navBar">
				<div class="title">
					Graphy
				</div>
				
				<div class="navOptions">
					{navOptions.map(({text, link}, id) => {
						return (<div class="navOption" id={id}>
							<Link href={link}>{text}</Link>
						</div>)
					})}	
				</div>
			</div>
		</>
	);
}

