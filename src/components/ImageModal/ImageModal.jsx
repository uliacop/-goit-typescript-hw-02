import Modal from "react-modal";
import css from "../ImageModal/ImageModal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
  },
};
Modal.setAppElement("#root");
const ImageModal = ({ imageUrl, isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <img src={imageUrl} alt="Modal Image" className={css.modalImage} />
    </Modal>
  );
};

export default ImageModal;
