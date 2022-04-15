import './button.scss'

import PropTypes from 'prop-types'
import { useState } from 'react'

const Button = ({ color, hcolor, text, onClick }) => {

    const [bgCol, setBgCol] = useState(`${color}`);

    return (
        <button 
        className='btn'
        type='submit'
        style={{backgroundColor: `${bgCol}`}}
        onClick={onClick}
        onMouseEnter={() => setBgCol(`${hcolor}`)}
        onMouseLeave={() => setBgCol(`${color}`)}
        >{text}</button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;