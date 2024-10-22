import { FC, useRef } from 'react';
import { Modal, Box, Typography, TextField, IconButton, MenuItem } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import CustomDatePicker from "@/app/components/DatePicker/CustomDatePicker";
import CustomButton from "@/app/components/Button/CustomBotton";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateCohortModal: FC<ModalProps> = ({ isOpen, onClose }) => {
  // Ref for file input
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Function to trigger the file input dialog when "Choose file" is clicked
  const handleFileChooseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-customBlue_dark bg-opacity-80 z-40" onClick={onClose}></div>

      <Modal open={isOpen} onClose={onClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            zIndex: 50,
            overflowY: 'auto',
            maxHeight: '90vh',
          }}
        >
          <IconButton
            onClick={onClose}
            sx={{ position: 'absolute', top: 16, right: 16 }}
          >
            <CloseIcon />
          </IconButton>

          <Typography variant="h6" component="h2" sx={{ mb: 4, color: 'customGray' }}>
            Create a Cohort
          </Typography>

          <form>
            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" sx={{ mb: 1, color: 'customGray' }}>Cohort Name</Typography>
              <TextField
                fullWidth
                placeholder="Ex. Cohort 1"
                variant="outlined"
                size="small"
                InputProps={{ style: { color: 'customGray' } }}
              />
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" sx={{ mb: 1, color: 'customGray' }}>Description</Typography>
              <TextField
                fullWidth
                multiline
                rows={3}
                placeholder="Ex. A space for Python developers"
                variant="outlined"
                size="small"
                InputProps={{ style: { color: 'customGray' } }}
              />
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" sx={{ mb: 1, color: 'customGray' }}>Program</Typography>
              <TextField
                select
                fullWidth
                defaultValue=""
                variant="outlined"
                size="small"
                InputProps={{ style: { color: 'customGray' } }}
              >
                <MenuItem value="" disabled>
                  Select Program
                </MenuItem>
              </TextField>
            </Box>

            <Box sx={{ mb: 3, display: 'flex', gap: 2 }}>
              <CustomDatePicker label="Start Date" />
              <CustomDatePicker label="End Date" />
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px dashed #008eef',
                  background: '#f6fcff',
                borderRadius: '8px',
                p: 2,
                mb: 3,
                textAlign: 'center',
                color: 'customGray',
              }}
            >
              <FileUploadOutlinedIcon sx={{ fontSize: 40, color: '#475661' }} />
              <Typography variant="body2" sx={{ mt: 1, color: 'customGray' }}>
                Drag and drop or{' '}
                <span
                  onClick={handleFileChooseClick}
                  style={{ fontWeight: 'bold', cursor: 'pointer', color: '#008eef' }}
                >
                  choose file
                </span>
                {' '}
              </Typography>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
              />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
              <CustomButton color="bg-gray-500 text-white" text="Cancel" onClick={onClose}/>
              <CustomButton color="bg-gray-300 text-gray-700 hover:bg-blue-500 hover:text-white" text="Create Cohort"/>
            </Box>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default CreateCohortModal;
