export interface rutas{
    tipo_servicio: string;
    ruta_comercial: string;
    origen_destino: string;
    vehiculo: {
        placa:string;
        asientos_ocupados:string;
        asientos_desocupados:string;
        estado:string;
    },
    conductor: {
        codigo: string;
        nombre: string;
    }
}