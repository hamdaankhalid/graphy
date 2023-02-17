import type { AppProps } from 'next/app'

export default function Card({cardHeader, cardInfo}: { cardHeader: string, cardInfo: string }) {
	return (
		<>
			<div class="card">
				<div class="cardHeader">	
					<div class="rotatedText">{ cardHeader }</div>
				</div>

				<div class="cardInfo">
					<p> { cardInfo } </p>
				</div>
			</div>
		</>
	)
}

