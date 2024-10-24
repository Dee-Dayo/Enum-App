import React, { FC, useRef, useState } from 'react';
import { Modal, Box, Typography, TextField, IconButton, MenuItem } from '@mui/material';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import CloseIcon from '@mui/icons-material/Close';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import CustomDatePicker from "@/app/components/DatePicker/CustomDatePicker";
import CustomButton from "@/app/components/Button/CustomBotton";
import { useDispatch } from 'react-redux';
import {addCohort} from "@/app/store/store";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateCohortModal: FC<ModalProps> = ({ isOpen, onClose }) => {

  const dispatch = useDispatch();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [cohortName, setCohortName] = useState("");
  const [description, setDescription] = useState("");
  const [program, setProgram] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [formError, setFormError] = useState("");

  const handleFileChooseClick = () => {
    if (fileInputRef.current) {
      if ("click" in fileInputRef.current) {
        fileInputRef.current.click();
      }
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!cohortName || !description || !program || !startDate || !endDate || !selectedFile) {
    setFormError("All fields are required.");
    return;
  }

  setFormError("");

  const cohortData = {
    cohortName,
    description,
    program,
    startDate,
    endDate,
    selectedFileName: selectedFile?.name,
  };

  console.log(cohortData)

  dispatch(addCohort(cohortData));

  onClose();
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

          <Typography variant="h6" component="h2" sx={{ mb: 4, color: '#475661' }}>
            Create a Cohort
          </Typography>

          <form>
            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" sx={{ mb: 1, color: '#475661 ' }}>Cohort Name</Typography>
              <TextField
                fullWidth
                placeholder="Ex. Cohort 1"
                variant="outlined"
                size="small"
                value={cohortName}
                onChange={(e) => setCohortName(e.target.value)}
                InputProps={{ style: { color: '#475661' } }}
              />
            </Box>

            {/* Description */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" sx={{ mb: 1, color: '#475661' }}>Description</Typography>
              <TextField
                fullWidth
                multiline
                rows={3}
                placeholder="Ex. A space for Python developers"
                variant="outlined"
                size="small"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                InputProps={{ style: { color: '#475661' } }}
              />
            </Box>

            {/* Program */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" sx={{ mb: 1, color: '#475661' }}>Program</Typography>
              <TextField
                select
                fullWidth
                value={program}
                onChange={(e) => setProgram(e.target.value)}
                variant="outlined"
                size="small"
                InputProps={{ style: { color: '#475661' } }}
              >
                <MenuItem value="" disabled>
                  Select Program
                </MenuItem>
                {[
                  { id: 1, name: "Product Design" },
                  { id: 2, name: "Software Engineering" },
                  { id: 3, name: "Techpreneurship" },
                  { id: 4, name: "Dev-ops" },
                  { id: 5, name: "Creative Design" },
                  { id: 6, name: "UX Writer" },
                ].map((program) => (
                  <MenuItem key={program.id} value={program.name}>
                    {program.name}
                  </MenuItem>
                ))}
              </TextField>
            </Box>

            <Box sx={{ mb: 3, display: 'flex', gap: 2 }}>
              <CustomDatePicker label="Start Date" onChange={(date: Date | null) => setStartDate(date)} />
              <CustomDatePicker label="End Date" onChange={(date: Date | null) => setEndDate(date)} />
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" sx={{ mb: 1, color: '#475661' }}>Add a cohort avatar</Typography>
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
                  mb: 1,
                  textAlign: 'center',
                  color: '#475661',
                }}
              >
                <FileUploadOutlinedIcon sx={{ fontSize: 40, color: '#475661' }} />
                <Typography variant="body2" sx={{ mt: 1, color: '#475661' }}>
                  Drag and drop or{' '}
                  <span
                    onClick={handleFileChooseClick}
                    style={{ fontWeight: 'bold', cursor: 'pointer', color: '#008eef' }}
                  >
                    choose file
                  </span>
                </Typography>
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
                {selectedFile && (
                  <Typography variant="caption" sx={{ mt: 2, color: '#475661' }}>
                    Selected file: {selectedFile.name}
                  </Typography>
                )}
                <Typography variant="caption" sx={{ textAlign: 'left', color: '#898d92' }}>
                  240x240 px Recommended, max size 1MB
                </Typography>
              </Box>
              <ErrorOutlineOutlinedIcon sx={{ fontSize: 16, color: '#475661' }} />
              <Typography variant="caption" sx={{ textAlign: 'left', color: '#475661' }}>
                You can do this later.
              </Typography>
            </Box>

            {formError && (
              <Typography variant="body2" sx={{ color: 'red', mb: 2 }}>
                {formError}
              </Typography>
            )}

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
              <CustomButton color="customBlue" text="Cancel" onClick={onClose} outline />
              <CustomButton
                color="bg-gray-300 text-gray-700 hover:bg-blue-500 hover:text-white"
                text="Create Cohort"
                onClick={handleSubmit}
              />
            </Box>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default CreateCohortModal;
