import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Icon = ({ icon, style }) => {
  return <FontAwesomeIcon className={style} icon={icon} />
}