import type { AppProps } from 'next/app'
import { useState, useRef} from 'react';
import InfoModal from 'components/infoModal'


export default function Card({cardHeader, cardInfo, modalText}: { cardHeader: string, cardInfo: string, showModal: bool, modalText: string }) {
	const [showModal, setShowModal] = useState<bool>(false);
	const modalOwnerRef = useRef(null);

	return (
		<>
			<div className="card" ref={modalOwnerRef} onClick={() => setShowModal(true)}>
				<div className="cardHeader">	
					<div className="rotatedText">{ cardHeader }</div>
				</div>

				<div className="cardInfo">
					<p> { cardInfo } </p>
				</div>
			</div>


			{
				showModal && <InfoModal modalClickOrigin={modalOwnerRef} modalText={ modalText } dismissHandler = { () => setShowModal(false) }/>
			}
		</>
	)
}

