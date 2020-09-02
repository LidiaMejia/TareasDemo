export interface Tarea {
    id_tarea?: number; //? significa que el campo no es requerido. Id es autoincrementable
    titulo: string;
    descripcion?: string; 
    fecha: Date;
    id_tipo: number;
}