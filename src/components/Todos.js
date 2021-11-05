import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'

export const Todos = ({ todos,deleteTask, handleClose, handleShow,show }) => {
    
    const [id, setId] = useState()

    
    return (

            <div>
                <ol>
                    {todos.map((obj) => {
                        return (
                            <li key={obj.id}>{' '}{obj.text}{' '}
                                <>
                                    <Button variant="primary"  onClick={() => {
                                            handleShow();
                                            setId(obj);
                                        }}
                                        >
                                        Delete
                                    </Button>
                                </>
                            </li>
                        );
                    })}
                    <Modal show={show} onHide={handleClose} animation={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>DELETE</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Are u sure to Delete!? </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={() => deleteTask(id)}>
                                DELETE
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </ol>
            </div>

        
    )
}

