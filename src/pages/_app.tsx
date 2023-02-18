import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from'next/router'
import Navbar, {NavOption} from '/components/navbar'
import {navigationOptions} from 'constants/navigtionOptions'
import PageFooter from 'components/pageFooter'
import MutedVideoBackground from 'components/mutedVideoBackground'
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
		<UserProvider>
		<div className="container">
		
		<Navbar currentPath={currentPath} navOptions={navigationOptions} />

		<MutedVideoBackground />
		
		<Component {...pageProps} />
		
		<PageFooter />	
		
		</div>
		</UserProvider>
	)
}
