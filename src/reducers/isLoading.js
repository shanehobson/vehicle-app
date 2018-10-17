const isLoadingDefaultState = {
    isLoading: false
};

const isLoadingReducer = (state = isLoadingDefaultState, action) => {
    switch(action.type) {
        case 'SET_IS_LOADING':
            return {
                isLoading
            };
        default:
            return state;
    } 
}

export default isLoadingReducer;