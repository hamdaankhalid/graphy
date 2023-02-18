import { useRef, useEffect } from 'react';

// When an info modal is clicked it pops up and displays a modal of text, it has a dismiss button at the bottom
export default function InfoModal({ modalText, dismissHandler, modalClickOrigin }: { 
	modalText: string, 
	dismissHandler: (value: boolean | ((prevVar: boolean) => boolean)) => void,
	modalClickOrigin: HTMLDivElement
}) {
	const modalRef = useRef(null);

	useEffect(() => {
		// We want to handle any clicks that are outside the modal and not clicks on the div that opens the modal
		const handleClickOutsideModal = (event: React.MouseEvent<HTMLElement>) => {
			if (
				modalRef.current && 
				!modalClickOrigin.current.contains(event.target) && 
				!modalRef.current.contains(event.target)
				) {
					dismissHandler();
				}
		};

		document.addEventListener("click", handleClickOutsideModal, false);
		// Cleanup function is returned
		return () => {
			document.removeEventListener("click", handleClickOutsideModal, false);
		}
	}, []);

	return (
		<>
			<div className="infoModal" ref={modalRef}>
				<div className="infoModalText">
					{ modalText }
				</div>
				
				<div className="infoModalButtons">
				<button className="dangerButton" onClick={dismissHandler}>
					Dismiss
				</button>
				</div>
			</div>
		</>
	)
}

