
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
    /* const fecha = {
        dia: 6,
        mes: 8,
        mesNombre: meses[ 7 ],
        año: 2020
    }; */

    
    return fecha;
}
