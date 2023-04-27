import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Icon = ({iconName, style}) => {

  return<FontAwesomeIcon icon={iconName} className={`${style}`}/>
}

