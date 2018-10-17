const vehicleInfoDefaultState = {
        vehicleYear: "",
        vehicleModel: "",
        modelNumber: "",
        vin: "",
        vehicleMake: ""
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