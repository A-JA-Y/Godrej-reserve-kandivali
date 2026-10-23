"use client";

import { useModal } from "./ModalContext";

// Opens the enquiry modal from server-rendered pages; the page must also render <ModalWrapper />.
export default function EnquireButton({ children, className }) {
  const { openModal } = useModal();

  return (
    <button type="button" onClick={() => openModal()} className={className}>
      {children}
    </button>
  );
}
