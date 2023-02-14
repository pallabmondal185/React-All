import React from 'react'

function PropsCss(props) {
    return (
        <>
            <div style={{backgroundColor: `${props.back}` , color: `${props.text}`}}>
                <h1>passing props in css</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor minus maxime molestiae est, cum optio, unde amet, enim vero similique praesentium eius officia quia dolores in. Nam facilis dolorem consectetur?</p>
            </div>
        </>
    )
}

export default PropsCss
