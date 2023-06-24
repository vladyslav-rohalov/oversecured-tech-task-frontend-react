import { Modal, Box, TextField, Button, Typography } from '@mui/material';

const styleModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export function ModalWindow({
  modalName,
  toggleModal,
  text,
  handleMethod,
  label1,
  label2,
  visitor,
}) {
  return (
    <>
      <Modal
        open={modalName}
        onClose={toggleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ textAlign: 'center' }}
          >
            {text}
          </Typography>
          <form onSubmit={handleMethod}>
            <TextField
              id="outlined-basic"
              label={label1}
              variant="outlined"
              style={{ width: '100%', margin: '16px 0' }}
              defaultValue={visitor?.firstName}
            />
            <TextField
              id="outlined-basic"
              label={label2}
              variant="outlined"
              style={{ width: '100%', marginBottom: '32px' }}
              defaultValue={visitor?.lastName}
            />

            <Button
              variant="contained"
              style={{ margin: '0 auto', display: 'block' }}
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
}

export function ModalWindowDelete({
  modalName,
  toggleModal,
  confirmDeletion,
  cancelDeletion,
}) {
  return (
    <>
      <Modal
        open={modalName}
        onClose={toggleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ textAlign: 'center' }}
          >
            Do you really want to delete a visitor?
          </Typography>
          <div style={{ display: 'flex', marginTop: '64px' }}>
            <Button
              variant="contained"
              style={{ margin: '0 auto', display: 'block' }}
              type="button"
              onClick={confirmDeletion}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              style={{ margin: '0 auto', display: 'block' }}
              type="button"
              onClick={cancelDeletion}
            >
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
}
