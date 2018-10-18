import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import VehicleInfoDialog from './VehicleInfoDialog';
import { setVehicleInfo } from '../actions/vehicle';

class VehicleInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            year: '',
            make: '',
            model: '',
            vin: '',
            modelNumber: '',
            msrp: '',
            discount: '',
            rebate: '',
            purchasePrice: ''
        }
    }

    componentDidMount() {
        this.getVehicleInfo();
    }

    getVehicleInfo = () => {
        fetch('https://clearpathpro.io:9060/getVehicleInformation?userId=hobsonShane')
            .then((response) => {
                console.log(response)
                return response.json();
            })
            .then((jsonData) => {
                const { vehicleYear, vehicleMake, vehicleModel, vin, modelNumber } = jsonData.vehicleInfo;
                const { rebate, msrp, discount, purchasePrice} = jsonData.vehiclePricing;
                this.setState(() => ({
                    year: vehicleYear,
                    make: vehicleMake,
                    model: vehicleModel,
                    vin,
                    modelNumber,
                    msrp,
                    discount,
                    rebate,
                    purchasePrice
                }))
                return jsonData;
            })
            .then((jsonData) => {
                this.setVehicleInfo();
            });
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
                        <Typography variant='display3' color='primary'>
                            {year} {make} {model}
                        </Typography>
                    </div>
                    <div className='Vehicle-flexItemContainer'>
                        <div>
                            <Typography variant='display1'>
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
                            <Typography variant='display1'>
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
                            <Typography variant='display2' color='primary'>
                                Pricing Information
                            </Typography>
                        </div>
                    </div>
                    <div className='Vehicle-flexItemContainer'>
                        <div>
                            <Typography variant='display1'>
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
                            <Typography variant='display1'>
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
                            <Typography variant='display1'>
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
                            <Typography variant='display1'>
                                Purchase Price:
                            </Typography>
                        </div>
                        <div>
                            <Typography variant='h4'>
                                {this.numberToDollarValue(purchasePrice)}
                            </Typography>
                        </div>
                    </div>
                    <div className='Vehicle-flexItemContainer'>
                        <VehicleInfoDialog
                            msrp={msrp}
                            discount={discount}
                            rebate={rebate}
                            purchasePrice={purchasePrice}
                            numberToDollarValue={this.numberToDollarValue}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

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