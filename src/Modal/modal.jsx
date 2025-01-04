import ReactDOM from "react-dom";
import "./modal.css";
import { useEffect } from "react";

function Modal({ isOpen, onClose, children }) {
	const modalDom = document.getElementById("modal-root");

	// Ensure `modalDom` exists
	if (!modalDom) {
		console.error(
			"Modal root element not found. Ensure #modal-root exists in the DOM."
		);
		return null;
	}

	useEffect(() => {
		const handelKeydown = (e) => {
			if (e.key === "Escape" && isOpen) {
				onClose();
			}
		};
		document.addEventListener("keydown", handelKeydown);
		return () => document.removeEventListener("keydown", handelKeydown);
	}, [isOpen, onClose]);

	// Prevent rendering when not open
	if (!isOpen) return null;

	const handleOverlayClick = (e) => {
		if (e.target.classList.contains("modal-overlay")) {
			onClose();
		}
	};

	return ReactDOM.createPortal(
		<div className="modal-overlay" onClick={handleOverlayClick}>
			<div className="modal-content">
				{children}
				<button
					className="modal-close"
					onClick={onClose}
					aria-label="Close modal"
				>
					X
				</button>
			</div>
		</div>,
		modalDom
	);
}

export default Modal;
