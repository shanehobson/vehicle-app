const vehicleInfoDefaultState = {
    year: '',
    make: '',
    model: '',
    vin: '',
    modelNumber: '',
    msrp: 0,
    discount: 0,
    rebate: 0,
    purchasePrice: 0
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