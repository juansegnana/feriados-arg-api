// TODO: Listar todos los feriados del año. 

import React from 'react';
import { FeriadoItem } from './FeriadoItem';
import '../styles/ListadoCompleto.css'

export const ListadoCompleto = ({ año, datos }) => {
    // console.log(datos);
    return (
        <div>
            <h3> Listado completo de feriados { año }</h3>
            <hr />
            <div className="row row-cols-2 row-cols-md-3 g-4 text-center" >
                {
                    datos.map( ( fer, index) => (
                        <FeriadoItem 
                            key={ `id_${ index }` }
                            { ...fer }
                        />
                    ))
                }
            </div>

        </div>
    )
}

