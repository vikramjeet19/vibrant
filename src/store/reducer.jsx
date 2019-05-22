const initialState = {
    redux_data: []
}
const reducer = (state = initialState, action) => {
    if (action.type === 'onload') {
        return {
            redux_data: action.payload
        }
    }
    return state;
}

export default reducer;