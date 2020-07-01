import React from "react";
import { Modal } from "../../../common-ui";

export type SharingModalProps = {
  modalIsOpen: boolean;
  setModalIsOpen: (b: boolean) => void;
};

export const SharingModal = ({
  modalIsOpen,
  setModalIsOpen,
}: SharingModalProps) => {
  return (
    <Modal
      modalIsOpen={modalIsOpen}
      setModalIsOpen={setModalIsOpen}
      title="Envoyer le sondage"
    >
      <div>
        Votre sondage a bien été créé. Un email de confirmation avec le lien du
        sondage vous a été envoyé.
      </div>

      <div>Partage via FB..</div>
    </Modal>
  );
};
