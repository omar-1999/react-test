import { useState, forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import ReactNotifications from '../Notifications/ReactNotifications';

import { EmployeeContext } from '../../context/EmployeeContext';

export default function CreateEmployees() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState(null);
  const [dateAdmission, setDateAdmission] = useState(null);
  
  const { AddEmployee } = useContext(EmployeeContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createEmployee = async (e) => {
    e.preventDefault();

    const params = {
      name: name,
      email: email,
      salary: salary,
      date_admission: (!dateAdmission) ? null : dateAdmission.toLocaleDateString('en-CA')
    }

    if (!params.name)
      return ReactNotifications('Warning', `Column name cannot be null.`, 'warning');

    if (!params.email)
      return ReactNotifications('Warning', `Column email cannot be null.`, 'warning');

    if (!params.salary)
      return ReactNotifications('Warning', `Column salary cannot be null.`, 'warning');

    if (!params.date_admission)
      return ReactNotifications('Warning', `Column date_admission cannot be null.`, 'warning');

    AddEmployee(params);
    setOpen(false);
  }

  return (
    <>
      {/* Buttom */}
      <Button color="secondary" variant="contained" sx={{ borderRadius: 50 }} onClick={handleClickOpen}>
        <AddIcon />
      </Button>
      {/* Dialog Modal */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Employee</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please do not leave any fields empty.
          </DialogContentText>
          {/* name */}
          <TextField
            margin="dense"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />
          {/* email */}
          <TextField
            margin="dense"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          {/* salary */}
          <TextField
            sx={{ mb: 4 }}
            label="Salary"
            value={salary}
            onChange={(event) => setSalary(event.target.value)}
            name="salary"
            id="salary"
            fullWidth
            InputProps={{
              inputComponent: NumberFormatCustom,
            }}
            variant="standard"
          />

          {/* date_admission */}
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date Admission"
              value={dateAdmission}
              fullWidth
              onChange={(newValue) => {
                setDateAdmission(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={createEmployee}>Create</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

const NumberFormatCustom = forwardRef(function NumberFormatCustom(props, ref) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(salary) => {
        onChange({
          target: {
            name: props.name,
            value: salary.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="$"
    />
  );
});

NumberFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
