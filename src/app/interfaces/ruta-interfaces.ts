export interface rutas{
    tipo_servicio: string;
    ruta_comercial: string;
    origen_destino: string;
    vehiculo: {
        tiempo: string;
        placa:string;
        asientos_totales: string;
        asientos_ocupados:string;
        asientos_desocupados:string;
        estado:string;
    },
    conductor: {
        codigo: string;
        nombre: string;
        empresa: string;
    }
}