import React, { useState } from "react";
import { Modal, CopyText, Button } from "../../../common-ui";

import styles from "./styles.module.scss";

export type SharingModalProps = {
  modalIsOpen: boolean;
  setModalIsOpen: (b: boolean) => void;
  pollId: number | null;
};

export const SharingModal = ({
  modalIsOpen,
  setModalIsOpen,
  pollId,
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
      closable={false}
    >
      <div className={styles.message}>
        Votre sondage a bien été créé. Un email de confirmation avec le lien du
        sondage vous a été envoyé.
      </div>
      <CopyText
        text={`${window.location.origin}/poll/${pollId}/`}
        copied={linkCopied}
        copyToClipboard={() =>
          copyToClipboard(`${window.location.origin}/poll/${pollId}/`)
        }
        fontWeight="normal"
        nude
      />
      <Button
        to={`/poll/${pollId}/`}
        description="Aller au sondage"
        className={styles.button}
      />
      <Button
        to="/"
        description="Retour au menu"
        className={styles.button}
        invert
      />
    </Modal>
  );
};
