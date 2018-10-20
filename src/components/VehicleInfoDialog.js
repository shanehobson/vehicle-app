import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { startSetVehicleInfo } from '../actions/vehicle';
import { setIsLoading } from '../actions/vehicle';

const styles = {
    root: {
      fontSize: 20,
      marginBottom: 20
    },
  };
  

class VehicleInfoDialog extends React.Component {
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
    componentDidMount() {
        const { msrp, rebate, discount, purchasePrice } = this.props;
        this.setState(() => ({
            msrp, 
            rebate, 
            discount, 
            purchasePrice
        }));
        }

    componentWillReceiveProps(nextProps) {
        if (!this.props.isLoading) {
            this.setState(() => ({
                msrp, 
                rebate, 
                discount, 
                purchasePrice
            }));
        }
        const { msrp, rebate, discount, purchasePrice } = nextProps;
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ 
            open: false,
            msrp: this.props.msrp,
            rebate: this.props.rebate,
            discount: this.props.discount,
            purchasePrice: this.props.purchasePrice
        });
    };

    handlePostPricingData = () => {
        const { msrp, discount, rebate, purchasePrice } = this.state;
        this.setState({ open: false });
        this.props.setIsLoading(true);
        this.props.startSetVehicleInfo({ msrp, discount, rebate, purchasePrice });
        this.props.setIsLoading(false);
    }

    dollarValueToNumber = (val) => {
        let newVal = val.slice(1);
        if (newVal.length > 3) {
            return newVal.replace(',', '');
        }
        return newVal;
    }

    isNumber = (value) => {
        let reg = /^\d+$/;
        return value.match(reg);
    }

    updateMsrp = (e) => {
            let thisVal = this.dollarValueToNumber(e.target.value);
            if (!this.isNumber(thisVal)) return;
            this.setState(() => ({
            msrp: thisVal
        }));
    }

    updateDiscount = (e) => {
            let thisVal = this.dollarValueToNumber(e.target.value);
            if (!this.isNumber(thisVal)) return;
            this.setState(() => ({
            discount: thisVal
        }));
    }

    updateRebate = (e) => {
            let thisVal = this.dollarValueToNumber(e.target.value);
            if (!this.isNumber(thisVal)) return;
            this.setState(() => ({
            rebate: thisVal
        }));
    }

    updatePurchasePrice = (e) => {
            let thisVal = this.dollarValueToNumber(e.target.value);
            if (!this.isNumber(thisVal)) return;
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
                Edit Pricing Information
                </DialogTitle>
                <DialogContent>
                    <Typography
                        variant="h4"
                        id="form-dialog-title"
                        color="primary"
                    >
                    MSRP
                    </Typography>
                    <Input
                    margin="dense"
                    autoFocus={true}
                    id="name"
                    label="MSRP"
                    type="text"
                    fullWidth
                    value={numberToDollarValue(msrp)}
                    onChange={this.updateMsrp}
                    className={this.props.classes.root}
                    />
                    <Typography
                        variant="h4"
                        id="form-dialog-title"
                        color="primary"
                    >
                    Discount
                    </Typography>
                    <Input
                        margin="dense"
                        id="name"
                        label="Discount"
                        type="text"
                        fullWidth
                        value={numberToDollarValue(discount)}
                        onChange={this.updateDiscount}
                        className={this.props.classes.root}
                    />
                    <Typography
                        variant="h4"
                        id="form-dialog-title"
                        color="primary"
                    >
                    Rebate
                    </Typography>
                    <Input
                        margin="dense"
                        id="name"
                        label="Rebate"
                        type="text"
                        fullWidth
                        value={numberToDollarValue(rebate)}
                        onChange={this.updateRebate}
                        className={this.props.classes.root}
                    />
                    <Typography
                        variant="h4"
                        id="form-dialog-title"
                        color="primary"
                    >
                    Purchase Price
                    </Typography>
                    <Input
                        margin="dense"
                        id="name"
                        label="Purchase Price"
                        type="text"
                        fullWidth
                        value={numberToDollarValue(purchasePrice)}
                        onChange={this.updatePurchasePrice}
                        className={this.props.classes.root}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={this.handleClose}
                        color="primary"
                    >
                    Cancel
                    </Button>
                    <Button onClick={this.handlePostPricingData} color="primary">
                    Submit
                    </Button>
                </DialogActions>
                </Dialog>
            </div>
        );
    }
}

VehicleInfoDialog.propTypes = {
    startSetVehicleInfo: PropTypes.func.isRequired,
    setIsLoading: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
  };

  const mapStateToProps = (state) => ({
    isLoading: state.vehicleInfo.isLoading
  });

const mapDispatchToProps = (dispatch, props) => ({
    startSetVehicleInfo: (vehicleInfo) => dispatch(startSetVehicleInfo(vehicleInfo)),
    setIsLoading: (isLoading) => dispatch(setIsLoading(isLoading))
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(VehicleInfoDialog));