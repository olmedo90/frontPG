import { Modal, Button } from 'react-bootstrap';
import React from 'react'

export const ModalsInventories = ({ handleClose, show }) => {
    return (
        <Modal size='xl' show={show} onHide={handleClose}>
            <Modal.Header >
                <h3>{'Registrar Producto'}</h3>
                <i onClick={handleClose} className="bi bi-x-square-fill cursor-pointer iconClose "></i>
            </Modal.Header>
            <Modal.Body>
                <form className='row '>
                    <div className="mb-1  col-md-3">
                        <label htmlFor='codigo' className="form-label">Codigo</label>
                        <input type="text" className="form-control" id='codigo' name='codigo' />
                    </div>
                    <div className="mb-1 col-md-3">
                        <label htmlFor='categoria' className="form-label">Categoria</label>
                        <input type="text" className="form-control" id='categoria' name='categoria' />
                    </div>
                    <div className="mb-1 col-md-3">
                        <label htmlFor='unidad' className="form-label">Unidad de Medida</label>
                        <input type="text" className="form-control" id='unidad' name='unidad'  />
                    </div>
                    <div className="mb-1 col-md-9">
                        <label htmlFor='categoria' className="form-label">Descripcion</label>
                        <input type="text" className="form-control" id='categoria'  />
                    </div> 
                    <div className="mb-1 col-md-3">
                        
                    </div>
                    <div className="mb-1 col-md-2">
                        <label htmlFor='precio1' className="form-label">Precio Venta 1</label>
                        <input type="text" className="form-control" id='precio1'  />
                    </div>
                    <div className="mb-1 col-md-2">
                        <label htmlFor='precio2' className="form-label">Precio Venta 2</label>
                        <input type="text" className="form-control" id='precio2'  />
                    </div>
                    <div className="mb-4 col-md-2">
                        <label htmlFor='precio 3' className="form-label">Precio Venta  3</label>
                        <input type="text" className="form-control" id='precio 3'  />
                    </div>

                    <div className="mb-4 col-md-12 d-flex justify-content-end ">
                        <button type='reset' className='btnCancel mx-2'>Cancelar</button>
                        <button type='submit' className='btnSuccess'>Guardar</button>
                    </div>

                </form>
            </Modal.Body>
            <Modal.Footer>

                <button className='btn btnClose' onClick={handleClose}>
                Cerrar
                </button>

            </Modal.Footer>
        </Modal>
    )
}
