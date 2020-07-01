import React, { useState } from "react";
import { Modal, CopyText } from "../../../common-ui";

import styles from "./styles.module.scss";

export type SharingModalProps = {
  modalIsOpen: boolean;
  setModalIsOpen: (b: boolean) => void;
};

export const SharingModal = ({
  modalIsOpen,
  setModalIsOpen,
}: SharingModalProps) => {
  const [linkCopied, setLinkCopied] = useState(false);

  const copyToClipboard = (s: string) => {
    const textField = document.createElement("textarea");
    textField.innerText = s || "";
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
    setLinkCopied(true);
  };

  return (
    <Modal
      modalIsOpen={modalIsOpen}
      setModalIsOpen={setModalIsOpen}
      title="Envoyer le sondage"
    >
      <div className={styles.message}>
        Votre sondage a bien été créé. Un email de confirmation avec le lien du
        sondage vous a été envoyé.
      </div>
      <CopyText
        text="www.baguettetordue.fr/poll/1/"
        copied={linkCopied}
        copyToClipboard={() => copyToClipboard("www.baguettetordue.fr/poll/1/")}
        fontWeight="normal"
        nude
      />
    </Modal>
  );
};
