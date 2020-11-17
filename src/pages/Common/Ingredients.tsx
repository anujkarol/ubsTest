import React from "react";
import Modal from "../../components/Modal";

interface IIngredients {
  isShow: boolean;
  closeModal: () => void;
  message: string;
}

const Ingredients: React.FC<IIngredients> = ({
  isShow,
  closeModal,
  message = "",
}) => (
  <Modal isCloseIcon isShow={isShow} handleCloseModal={closeModal}>
    <h3>{message}</h3>
  </Modal>
);

export default Ingredients;
