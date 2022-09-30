import { useState } from 'react';
import '../stylesInventories.css';
import { ModalsInventories } from './ModalsInventories';
export const IndexInventories = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='w-drawer row'>
      <nav className='col-md-12 d-flex justify-content-center py-2'>
        <button className='btnCreate ' onClick={handleShow}>
          <i className={`bi-clipboard2-plus-fill w-icon `}></i>
          Registrar Producto
        </button>

      </nav>
      <ModalsInventories
        handleClose={handleClose} show={show}
      />

    </div>
  )
}
