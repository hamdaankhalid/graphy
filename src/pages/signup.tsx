import Navbar, {NavOption} from 'components/navbar.tsx'


const navOptions: Array<NavOption> = [{ text: "Learn More!", link: "/" }]

export default function Signup() {
	return (
		<> 	
		
			<Navbar navOptions={navOptions} />
				
		</>
	)
}
