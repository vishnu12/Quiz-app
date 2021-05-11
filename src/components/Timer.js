import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'


export const Timer = () => {

    const history=useHistory()
    let mins = 9
    let secs = 60
    let time

    const [timeComp, setTimeComp] = useState('00:00')

    useEffect(() => {
        const timer = setInterval(timerFunc, 1000)

        function timerFunc() {
            secs--
            time = `0${mins}:${secs < 10 ? '0' + secs : secs}`
            if (secs < 1) {
                mins--
                secs = 60

                if (mins < 0) {
                    clearInterval(timer)
                    setTimeout(()=>{
                    history.push('/final')
                    },3000)
                }
            }
            setTimeComp(time)
        }
    }, [time])

    return (
        <>
            <h5 style={{ color: '#fff' }}>{timeComp}</h5>
        </>
    )
}
