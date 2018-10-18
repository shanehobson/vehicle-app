import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';

class FormDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { msrp, rebate, discount, purchasePrice, numberToDollarValue } = this.props;
    return (
      <div>
        <Button
            variant="contained"
            color="primary"
            size='medium'
            onClick={this.handleClickOpen}
            >
            <p className='VehicleInfo-buttonText'>Edit Pricing Information</p>
        </Button>   
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle
            id="form-dialog-title"
          >
          Edit Pricing Information</DialogTitle>
          <DialogContent>
            <Typography variant='h6'>
                Edit any of the fields below that you wish to change, and click "Submit" when done.
            </Typography>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="MSRP"
              type="text"
              fullWidth
              value={numberToDollarValue(msrp)}
            />
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Discount"
                type="text"
                fullWidth
                value={numberToDollarValue(discount)}
            />
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Rebate"
                type="text"
                fullWidth
                value={numberToDollarValue(rebate)}
            />
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Purchase Price"
                type="text"
                fullWidth
                value={numberToDollarValue(purchasePrice)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default FormDialog;