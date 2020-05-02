import React from 'react'
import "../../style/toggle.css"

const Toggle = () => {
    return (
        <>
            <label className="switch">
                <input type="checkbox" id="togBtn"/>
                <div className="slider round">
                    <span className="on">ON</span>
                    <span className="off">OFF</span>
                </div>
            </label>

        </>
    )
}

export default Toggle;
