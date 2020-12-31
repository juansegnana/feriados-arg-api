import React from 'react'

export const FeriadoItem = ({ motivo, tipo, info, mes, dia }) => {
    return (
        <div className="col" >
            <div className="card h-100" >
                <div className="card-body">
                    <h5 className="card-title"> { motivo } </h5>
                    <p className="card-text">
                        Tipo: { tipo } <br />
                        <a
                            className="btn btn-primary mt-2"
                            href={ info }
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Más info
                        </a> 
                    </p>
                    <p className="card-text"><small className="text-muted"> Fecha: { dia }/{ mes } </small></p>
                </div>
            </div>
        </div>
    )
}
