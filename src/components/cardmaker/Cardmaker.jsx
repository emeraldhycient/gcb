import React, { useState } from 'react'
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

function Cardmaker({ cvc, expiry, focus, name, number }) {

    const [focusedit, setfocus] = useState(focus)

    const changecardface = () => {
        if (focusedit === 'cvc') {
            setfocus(e => 'number')
        } else {
            setfocus(e => 'cvc')
        }
    }

    const cardissuers = 'AmericanExpress-34 or 37, DiscoverCard-6011 or 65, MasterCard-51-55, and Visa-4-49'

    return (
        <div onClick={changecardface} >
            <Cards
                cvc={cvc}
                expiry={expiry}
                focused={focusedit}
                name={name}
                number={number}
            />
        </div>
    )
}

export default Cardmaker
