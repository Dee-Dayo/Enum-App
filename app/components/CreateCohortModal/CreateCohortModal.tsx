import React, { FC, useEffect, useRef, useState } from 'react';
import { Modal, Box, Typography, TextField, IconButton, MenuItem } from '@mui/material';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import CloseIcon from '@mui/icons-material/Close';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import CustomDatePicker from "@/app/components/DatePicker/CustomDatePicker";
import CustomButton from "@/app/components/Button/CustomBotton";
import { useDispatch } from 'react-redux';
import { addCohort } from "@/app/store/store";
import Image from 'next/image';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateCohortModal: FC<ModalProps> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [cohortName, setCohortName] = useState("");
  const [description, setDescription] = useState("");
  const [program, setProgram] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (isOpen) {
      setSelectedFile(null);
      setCohortName("");
      setDescription("");
      setProgram("");
      setStartDate(null);
      setEndDate(null);
      setFormError("");
    }
  }, [isOpen]);

  const handleFileChooseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
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
      avatar: selectedFile,
    };

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
            width: { xs: '90%', sm: '600px' },
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: { xs: 2, sm: 4 },
            borderRadius: 2,
            zIndex: 50,
            overflowY: 'auto',
            maxHeight: '90vh',
          }}
        >
          <IconButton
            onClick={onClose}
            sx={{ position: 'absolute', top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>

          <Typography variant="h6" component="h2" sx={{ mb: 2, color: '#475661', fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
            Create a Cohort
          </Typography>

          <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ mb: 1, color: '#475661' }}>Cohort Name</Typography>
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

            <Box sx={{ mb: 2 }}>
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

            <Box sx={{ mb: 2 }}>
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

            <Box sx={{ mb: 2, display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
              <CustomDatePicker label="Start Date" onChange={(date: Date | null) => setStartDate(date)} />
              <CustomDatePicker label="End Date" onChange={(date: Date | null) => setEndDate(date)} />
            </Box>

            <Box sx={{ mb: 2 }}>
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
                  textAlign: 'center',
                  color: '#475661',
                }}
              >
                <FileUploadOutlinedIcon sx={{ fontSize: 40, color: '#475661' }} />
                <Typography variant="body2" sx={{ mt: 1, color: '#475661' }}>
                  Drag and drop or{' '}
                  <span onClick={handleFileChooseClick} style={{ fontWeight: 'bold', cursor: 'pointer', color: '#008eef' }}>
                    choose file
                  </span>
                </Typography>
                <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />

                {selectedFile && (
                  <Box sx={{ mt: 2 }}>
                    <Image
                      src={selectedFile}
                      alt="Selected file preview"
                      width={80}
                      height={80}
                      style={{ objectFit: 'cover', borderRadius: '8px' }}
                    />
                  </Box>
                )}
              </Box>
            </Box>

            {formError && (
              <Typography variant="body2" sx={{ color: 'red', mb: 2 }}>
                {formError}
              </Typography>
            )}

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mt: 2 }}>
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
