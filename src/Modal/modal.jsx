import ReactDOM from "react-dom";
import "./modal.css";

function Modal({ isOpen, onClose, children }) {
  const modalDom = document.getElementById("modal-root");

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
        <button className="modal-close" onClick={onClose}>
          X
        </button>
      </div>
    </div>,
    modalDom
  );
}

export default Modal;
