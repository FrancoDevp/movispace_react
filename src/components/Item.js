import React from 'react'

const Item = ({productos}) => {
  return (
    <div>
        <div className="accordion" id={`accordion${productos.id}`}>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button m-0" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${productos.id}`} aria-expanded="true" aria-controls="collapseOne">
                <h5>{productos.nombre}</h5>
                </button>
                </h2>
                <div id={`collapse${productos.id}`} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent={`#accordion${productos.id}`}>
                <div className="accordion-body">
                    <h5>#{productos.id}</h5>
                    <h5>{productos.nombre}</h5>
                    <h5>{productos.precio}</h5>
                </div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default Item