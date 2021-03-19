import React from 'react'
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function GenerateChart() {
    const [state, dispatch] = useStateValue();

    const loadChart = (state) => {
        dispatch({
            type: actionTypes.SET_FILL_DATA,
            payload: state,
        });
    };

    console.log("state", state)

    return (
        <div>
            <button
                //   className={styles.button}
                aria-label="Increment value"
                onClick={() => loadChart(state)}
            >
                Load Chart
            </button>
        </div>
    )
}

export default GenerateChart
