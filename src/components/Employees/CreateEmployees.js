import React, {useState} from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import ReactNotifications from '../Notifications/ReactNotifications';
import api from '../../api/api';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = React.useState(null);
  const [dateAdmission, setDateAdmission] = React.useState(null);

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

    try {
      const resp = await api.post('/employees', params);
      // console.log(resp.data.data)
      // console.log(resp.status)
      ReactNotifications(
        'Exito',
        `Empleado ${resp.data.data.name} creado correctamente`,
        'success'
      );
      setOpen(false);
    } catch(err) {
      // console.log(err.response.data.message.errorInfo[2])
      // console.log(err.response.status)
      ReactNotifications(
        'Error',
        err.response.data.message.errorInfo[2],
        'danger'
      );
    }
  }

  return (
    <>
      {/* Buttom */}
      <Button variant="contained" sx={{ marginBottom: 4, borderRadius: 50 }} onClick={handleClickOpen}>
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
          <Box
            sx={{
              '& > :not(style)': {
                m: 2,
              },
            }}
          >
            {/* salary */}
            <TextField
              label="Salary"
              value={salary}
              onChange={(event) => setSalary(event.target.value)}
              name="salary"
              id="salary"
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
                onChange={(newValue) => {
                  setDateAdmission(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={createEmployee}>Create</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(props, ref) {
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
