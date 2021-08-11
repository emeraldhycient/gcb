import React, { useEffect, useState, useRef } from 'react'
import GLOBE from 'vanta/dist/vanta.globe.min'


function Herosection(props) {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(GLOBE({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x44ac81,
                size: 1.50
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    return (<div ref={myRef} id="hero">
        {props.children}
    </div>)
}

export default Herosection
