import PropTypes from 'prop-types'

const Button = ({onClick}) => {
    return <button className='btn' onClick={onClick}>Add</button>
}

Button.propTypes = {
    onClick: PropTypes.func
}
export default Button
