import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import VehicleInfoDialog from './VehicleInfoDialog';
import { getVehicleInfo } from '../actions/vehicle';
import { setVehicleInfo } from '../actions/vehicle';
import { setIsLoading } from '../actions/vehicle';

class VehicleInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            year: this.props.year,
            make: this.props.make,
            model: this.props.model,
            vin: this.props.vin,
            modelNumber: this.props.modelNumber,
            msrp: this.props.msrp,
            discount: this.props.discount,
            rebate: this.props.rebate,
            purchasePrice: this.props.purchasePrice
        }
    }

    componentDidMount() {
        this.setState(() => ({
            year: this.props.year,
            make: this.props.make,
            model: this.props.model,
            vin: this.props.vin,
            modelNumber: this.props.modelNumber,
            msrp: this.props.msrp,
            discount: this.props.discount,
            rebate: this.props.rebate,
            purchasePrice: this.props.purchasePrice
        }));
    }

    componentWillReceiveProps(nextProps) {
        this.setState(() => ({
            year: nextProps.year,
            make: nextProps.make,
            model: nextProps.model,
            vin: nextProps.vin,
            modelNumber: nextProps.modelNumber,
            msrp: nextProps.msrp,
            discount: nextProps.discount,
            rebate: nextProps.rebate,
            purchasePrice: nextProps.purchasePrice
        }));
    }

    setVehicleInfo = () => {
        const { year, make, model, vin, modelNumber, msrp, discount, rebate, purchasePrice } = this.state;
        this.props.setVehicleInfo({
            year, make, model, vin, modelNumber, msrp, discount, rebate, purchasePrice
        });
    }

    numberToDollarValue = (number) => {
        let input = number.toString();
        if (input.length > 3) {
            let start = input.slice(0, input.length - 3);
            let end = input.slice(input.length - 3);
            return '$' + start + ',' + end;
        } else {
            return '$' + input;
        }
    }

    render() {
        const { year, make, model, vin, modelNumber, msrp, discount, rebate, purchasePrice } = this.state;
        return (
            <div className='Vehicle-container'>
                <div className='Vehicle-leftPane'>
                    <div className='Vehicle-flexItemContainer'>
                        <Typography variant='h3' color='primary'>
                            {year} {make} {model}
                        </Typography>
                    </div>
                    <div className='Vehicle-flexItemContainer'>
                        <div>
                            <Typography variant='h4' color='textSecondary'>
                                VIN:
                            </Typography>
                        </div>
                        <div>
                            <Typography variant='h4'>
                                {vin}
                            </Typography>
                        </div>
                    </div>
                    <div className='Vehicle-flexItemContainer'>
                        <div>
                            <Typography variant='h4' color='textSecondary'>
                                Model Number:
                            </Typography>
                        </div>
                        <div>
                            <Typography variant='h4'>
                                {modelNumber}
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className='Vehicle-RightPane'>
                    <div className='Vehicle-flexItemContainer'>
                        <div>
                            <Typography variant='h4' color='primary'>
                                Pricing Information
                            </Typography>
                        </div>
                    </div>
                    <div className='Vehicle-flexItemContainer'>
                        <div>
                            <Typography variant='h4' color='textSecondary'>
                                MSRP:
                            </Typography>
                        </div>
                        <div>
                            <Typography variant='h4'>
                                {this.numberToDollarValue(msrp)}
                            </Typography>
                        </div>
                    </div>
                    <div className='Vehicle-flexItemContainer'>
                        <div>
                            <Typography variant='h4' color='textSecondary'>
                                Discount:
                            </Typography>
                        </div>
                        <div>
                            <Typography variant='h4'>
                                {this.numberToDollarValue(discount)}
                            </Typography>
                        </div>
                    </div>
                    <div className='Vehicle-flexItemContainer'>
                        <div>
                            <Typography variant='h4' color='textSecondary'>
                                Rebate:
                            </Typography>
                        </div>
                        <div>
                            <Typography variant='h4'>
                                {this.numberToDollarValue(rebate)}
                            </Typography>
                        </div>
                    </div>
                    <div className='Vehicle-flexItemContainer'>
                        <div>
                            <Typography variant='h4' color='textSecondary'>
                                Purchase Price:
                            </Typography>
                        </div>
                        <div>
                            <Typography variant='h4'>
                                {this.numberToDollarValue(purchasePrice)}
                            </Typography>
                        </div>
                    </div>
                    <div className='Vehicle-dialogButtonContainer'>
                        <VehicleInfoDialog
                            msrp={msrp}
                            discount={discount}
                            rebate={rebate}
                            purchasePrice={purchasePrice}
                            numberToDollarValue={this.numberToDollarValue}
                            postNewPricingData={this.postNewPricingData}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

VehicleInfo.propTypes = {
    year: PropTypes.string.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    vin: PropTypes.string.isRequired,
    modelNumber: PropTypes.string.isRequired,
    msrp: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    rebate: PropTypes.number.isRequired,
    purchasePrice: PropTypes.number.isRequired,
    setVehicleInfo: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    year: state.vehicleInfo.year,
    make: state.vehicleInfo.make,
    model: state.vehicleInfo.model,
    vin: state.vehicleInfo.vin,
    modelNumber: state.vehicleInfo.modelNumber,
    msrp: state.vehicleInfo.msrp,
    discount: state.vehicleInfo.discount,
    rebate: state.vehicleInfo.rebate,
    purchasePrice: state.vehicleInfo.purchasePrice
});

const mapDispatchToProps = (dispatch, props) => ({
    setVehicleInfo: (vehicleInfo) => dispatch(setVehicleInfo(vehicleInfo))
});

export default connect(mapStateToProps, mapDispatchToProps)(VehicleInfo);