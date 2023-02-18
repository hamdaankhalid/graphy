import { Html, Head, Main, NextScript } from 'next/document'
import PageFooter from 'components/pageFooter'
import MutedVideoBackground from 'components/mutedVideoBackground'

export default function Document() {
  return (
    <Html lang="en">
	<Head>
        <title>Graphy</title>
			<meta name="description" content="Graph your data" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
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
