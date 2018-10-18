const vehicleInfoDefaultState = {
    year: '',
    make: '',
    model: '',
    vin: '',
    modelNumber: '',
    msrp: '',
    discount: '',
    rebate: '',
    purchasePrice: ''
};

const vehicleInfoReducer = (state = vehicleInfoDefaultState, action) => {
    switch(action.type) {
        case 'SET_VEHICLE_INFO':
            return {
                ...state,
                ...action.vehicleInfo
            };
        default:
            return state;
    } 
}

export default vehicleInfoReducer;