export const initialState = {
    rows: [
        {
            type: "",
            timestamp: 0,
            begin: 0,
            end: 0,
            os: "",
            browser: "",
            min_response_time: 0.0,
            max_response_time: 0.0,
            // select: ['min_response_time', 'max_response_time'],
            // group: ['os', 'browser']
        }
    ]
};

export const actionTypes = {
    SET_DATA: "SET_DATA",
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_DATA:
            return {
                ...state,
                rows: action.payload.map(n => ({
                    ...n,
                    type: n.type,
                    timestamp: n.timestamp,
                    begin: n.begin ? n.begin : 0,
                    end: n.end ? n.end : 0,
                    os: n.os ? n.os : "",
                    browser: n.browser ? n.browser : "",
                    min_response_time: n.min_response_time ? n.min_response_time : 0.0,
                    max_response_time: n.max_response_time ? n.max_response_time : 0.0,
                }))

            };
        case actionTypes.SET_FILL_DATA:
            const rowsTypeData = state.rows.filter((item) => item.type === "data");
            return {
                ...state,
                rows: rowsTypeData
            };
        default:
            return state;
    }
};
export default reducer;