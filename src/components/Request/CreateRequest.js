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
import ReactNotifications from '../Notifications/ReactNotifications';
import { RequestContext } from '../../context/RequestContext';

export default function CreateRequests() {
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const { AddRequest } = useContext(RequestContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createRequest = async (e) => {
    e.preventDefault();

    const params = {
      description: description,
      price: price,
    }

    if (!params.description)
      return ReactNotifications('Warning', `Column description cannot be null.`, 'warning');

    if (!params.price)
      return ReactNotifications('Warning', `Column price cannot be null.`, 'warning');

    AddRequest(params);
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
        <DialogTitle>Create Request</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please do not leave any fields empty.
          </DialogContentText>
          {/* description */}
          <TextField
            margin="dense"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            label="Description"
            type="text"
            fullWidth
            variant="standard"
          />
          {/* price */}
          <TextField
            label="Price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            name="price"
            id="price"
            fullWidth
            InputProps={{
              inputComponent: NumberFormatCustom,
            }}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={createRequest}>Create</Button>
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
      onValueChange={(price) => {
        onChange({
          target: {
            name: props.name,
            value: price.value,
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
