import { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

function SQLButton({ sqlQuery }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toggle = () => setOpen(!open);

  return (
    <>
      <Button color="info" className="text-xs" onClick={handleClickOpen}>
        SQL
      </Button>
      <Modal
        isOpen={open}
        toggle={toggle}
        fullscreen={false}
        size={"lg"}
        backdrop={true}
        fade={true}
        centered={true}
        scrollable={true}
      >
        <ModalHeader>
          {"SQL Query"}
        </ModalHeader>
        <ModalBody className="whitespace-pre">{sqlQuery}</ModalBody>
        <ModalFooter>
          <Button
            className="text-black"
            onClick={() => {
              handleClose();
            }}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default SQLButton;
