import React from 'react'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    return (
       <header className='header'>
           <h1>Task tracker</h1>
           <Button 
             onClick={onAdd}/>
       </header>
    )
}

export default Header
