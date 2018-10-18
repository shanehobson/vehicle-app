import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
            .then(function(response) {
                console.log(response)
                return response.json();
            })
            .then(function(jsonData) {
                console.log(JSON.stringify(jsonData));
            })
    }

    render() {
        return (
            <div className='Vehicle-container'>
                <div className='Vehicle-leftPane'>
                    <div className='Vehicle-flexItemContainer'>
                        <Typography variant='display3' color='primary'>
                            Year Make Model
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
                                lorem
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
                                lorem
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
                                lorem
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
                                lorem
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
                                lorem
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
                                lorem
                            </Typography>
                        </div>
                    </div>
                    <div className='Vehicle-flexItemContainer'>
                        <Button
                            variant="raised"
                            color="primary"
                            size='medium'
                            >
                            <p className='VehicleInfo-buttonText'>Edit Pricing Information</p>
                        </Button>   
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

export default connect(mapStateToProps)(VehicleInfo);