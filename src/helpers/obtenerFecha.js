
export const obtenerFecha = ( date ) => {

    const meses = [ "Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre" ];

    // const date = new Date();
    
    const fecha = {
        dia: date.getDate(),
        mes: date.getMonth() + 1,
        mesNombre: meses[ date.getMonth() ],
        año: date.getFullYear()
    }; 
    
    // Uso temporal para pruebas
    /*
    const fecha = {
        dia: 1,
        mes: 1,
        mesNombre: meses[ 0 ],
        año: 2021
    };
    */
    
    return fecha;
}
