import React, { ReactNode } from "react";
import ReactModal from "react-modal";
import styles from "./styles.module.scss";
import { CloseButton } from "../CloseButton";

export type ModalProps = {
  children: ReactNode;
  title: string;
  setModalIsOpen: (value: boolean) => void;
  modalIsOpen: boolean;
  width?: string;
  fullSize?: boolean;
};

export const Modal = ({
  children,
  title,
  setModalIsOpen,
  modalIsOpen,
  width = "35%",
}: ModalProps) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: window.innerWidth <= 1024 ? "100%" : width,
      overflow: "visible",
      padding: "20px",
    },
    overlay: { backgroundColor: "rgba(0, 0, 0, 0.25)" },
  } as ReactModal.Styles;
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      style={customStyles}
      contentLabel="Modal"
      ariaHideApp={false}
    >
      <div className={styles.modal}>
        <div className={styles.header}>
          <div className={styles.hiddenBox} />
          <div className={styles.title}>{title}</div>
          <CloseButton action={() => setModalIsOpen(false)} />
        </div>

        <div className={styles.modalContent}>{children}</div>
      </div>
    </ReactModal>
  );
};
