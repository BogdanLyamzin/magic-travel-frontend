import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Link = ({path,text,className}) => {
   return <Link to={path} className={className}>{text}</Link>
}

export default Link