import React, { useState } from 'react'
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";


function UserInput() {
    const [state, dispatch] = useStateValue();
    const [data, setData] = useState([]);

    const loadDataChart = (data) => {
        dispatch({
            type: actionTypes.SET_DATA,
            payload: data,
        });
    };

    console.log("@@@@@", state)

    return (
        <div>
            <input
                // className={styles.textbox}
                type="text"
                aria-label="Set increment amount"
                value={data}
                onChange={e => setData(e.target.value)}
            />
            <button
                //   className={styles.button}
                aria-label="Increment value"
                onClick={() => loadDataChart(JSON.parse(data))}
            >
                Carregar
            </button>
        </div>
    )
}

export default UserInput
