import React from 'react'

function Modal({ title, id, Data }) {
    return (
        <div className="modal fade " id={id} tabindex="-1" role="dialog" aria-labelledby="dynamic modal compoent" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {<Data />}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Modal
