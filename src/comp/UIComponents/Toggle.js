import React from 'react'
import "../../style/toggle.css"

const Toggle = () => {
    return (
        <>
            <label class="switch">
                <input type="checkbox" id="togBtn"/>
                <div class="slider round">
                    <span class="on">ON</span>
                    <span class="off">OFF</span>
                </div>
            </label>

        </>
    )
}

export default Toggle;
