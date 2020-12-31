// API => https://pjnovas.gitbooks.io/no-laborables/content/feriados.html

import React from 'react';
import { obtenerFecha } from '../helpers/obtenerFecha';
import { useFetch } from '../hooks/useFetch';

import '../styles/ProximoFeriado.css'
import { ListadoCompleto } from './ListadoCompleto';

export const ProximoFeriado = () => {

    const { dia, mes, mesNombre, año } = obtenerFecha(new Date());
    
    let newData;
    let daysLeft;
    let dateNext;
    
    // ?incluir=opcional
    const { loading, data } = useFetch(`https://nolaborables.com.ar/api/v2/feriados/${ año }`);
    
    // Obtener feriado más cercano
    if ( !!data ){

        newData = data.find( ( elem ) =>{
            // Devolver PROXIMO feriado = (elem.mes === mes && elem.dia > dia) || elem.mes > mes;
            // Primero mira si el mes es igual y el dia es mayor al de hoy.
            // O bien, pregunta si el mes es mayor al actual
            // O si el mes y el día es igual al de hoy. Siendo un dia feriado.
            return ((elem.mes === mes && elem.dia > dia) || elem.mes > mes) || (elem.mes === mes && elem.dia === dia);
            
        });

        // Si no existe coincidencia, está próximo a Año Nuevo.
        if ( !newData ) {
            newData = data[0];
            newData.año = año+1;
        }
        dateNext = new Date( (!!newData.año ? newData.año : año), newData.mes - 1, newData.dia );
        
        const dateToday = new Date( año, mes-1, dia );
        // Obtener dias restantes
        daysLeft = parseInt((dateNext - dateToday) / (1000 * 60 * 60 * 24), 10);
        dateNext = obtenerFecha( dateNext );

    };
        
    let msg = '';
    switch ( daysLeft ) {
        case 1:
            msg = `Falta ${ daysLeft } día.`;
            break;
        case 0:
            msg = `Buen feriado!`;
            break;
        default:
            msg = `Faltan ${ daysLeft } días.`;
            break;
    }

    
    return (
        <div>
            <h1>Buscador de feriados</h1>
            <hr />

            <div className="card text-center">
                <div className="card-body">

                    <h5 className="card-title"> Hoy es </h5>
                    <p className="card-text"> {dia} de {mesNombre} del {año} </p>
                
                </div>
            </div>
            
            {
                loading
                ?
                    (
                        <div className="alert alert-info text-center">Cargando...</div>
                    ) 
                :
                    (
                        <div className="card text-center">
                            <div className="card-header">
                                Próximo feriado
                            </div>

                            <div className="card-body">
                                <h5 className="card-title">
                                    { newData.motivo } 
                                </h5>
                                <p className="card-text">
                                    Tipo de feriado: { newData.tipo }.
                                    <br />
                                    Fecha: { dateNext.dia }/{ dateNext.mes }/{ dateNext.año }
                                </p>
                                <a
                                    className="btn btn-primary"
                                    href={ newData.info }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Más info
                                </a>
                            </div>
                            
                            <div className="card-footer text-muted">
                                { msg }
                            </div>
                            
                        </div>
                    )
                }
            
            {
                !loading && <ListadoCompleto año={ año } datos={data} />
            }

        </div>
    )
}
