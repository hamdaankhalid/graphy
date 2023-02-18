import { Html, Head, Main, NextScript } from 'next/document'
import PageFooter from 'components/pageFooter'
import MutedVideoBackground from 'components/mutedVideoBackground'

export default function Document() {
  
  return (
    <Html lang="en">
		
<Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="follow, index" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      </Head>
		<body>
		
		<div className="container">

		<MutedVideoBackground />
	
		<Main />
			
		<PageFooter />	
		
		</div>
		
		<NextScript />
		
		</body>

    </Html>
  )
}
