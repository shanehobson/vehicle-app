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
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            msrp: '',
            rebate: '',
            discount: '',
            purchasePrice: ''
        }
    }

  componentWillReceiveProps() {
    const { msrp, rebate, discount, purchasePrice } = this.props;
    this.setState(() => ({
        msrp, 
        rebate, 
        discount, 
        purchasePrice
    }));
    console.log(this.state);
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  dollarValueToNumber = (val) => {
    let newVal = val.slice(1);
    if (newVal.length > 3) {
        return newVal.replace(',', '');
    }
    return newVal;
  }

  updateMsrp = (e) => {
      let thisVal = this.dollarValueToNumber(e.target.value);
      this.setState(() => ({
        msrp: thisVal
    }));
  }

  updateDiscount = (e) => {
        let thisVal = this.dollarValueToNumber(e.target.value);
        this.setState(() => ({
        discount: thisVal
    }));
  }

  updateRebate = (e) => {
        let thisVal = this.dollarValueToNumber(e.target.value);
        this.setState(() => ({
        rebate: thisVal
    }));
  }

  updatePurchasePrice = (e) => {
        let thisVal = this.dollarValueToNumber(e.target.value);
        this.setState(() => ({
        purchasePrice: thisVal
    }));
  }

  render() {
    const { numberToDollarValue } = this.props;
    const { msrp, rebate, discount, purchasePrice } = this.state;
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
              margin="dense"
              id="name"
              label="MSRP"
              type="text"
              fullWidth
              value={numberToDollarValue(msrp)}
              onChange={this.updateMsrp}
            />
            <TextField
                margin="dense"
                id="name"
                label="Discount"
                type="text"
                fullWidth
                value={numberToDollarValue(discount)}
                onChange={this.updateDiscount}
            />
            <TextField
                margin="dense"
                id="name"
                label="Rebate"
                type="text"
                fullWidth
                value={numberToDollarValue(rebate)}
                onChange={this.updateRebate}
            />
            <TextField
                margin="dense"
                id="name"
                label="Purchase Price"
                type="text"
                fullWidth
                value={numberToDollarValue(purchasePrice)}
                onChange={this.updatePurchasePrice}
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