export interface ITejido {
    id: number;
    nombre: string;
    category: string;
    descripcion?: string;
    imagenUrl: string;
    alt: string;
}
export const tejidosArray: ITejido[] = [
    {
        id: 1,
        nombre: 'Tejido 1',
        category: 'pectoral',
        imagenUrl: 'https://concepto.de/wp-content/uploads/2019/04/histolog%C3%ADa-tejido-humano-e1554756738822.jpg',
        alt: 'Tejido 1'
    },
    {
        id: 2,
        nombre: 'Tejido 2',
        category: 'pectoral',
        imagenUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4A-NNkm3XUyTtIe3IVMfdwDoRdBQwABmSFw&s',
        alt: 'Tejido 2'
    },
    {
        id: 3,
        nombre: 'Tejido 3',
        category: 'facial',
        imagenUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0U78bpB4eGgzhoQpmhniTlGPykhu_Tueiw&s',
        alt: 'Tejido 3'
    },
    {
        id: 4,
        nombre: 'Tejido 4',
        category: 'facial',
        imagenUrl: 'https://www.pathologylive.com/practicas-histologia/images/11.jpg',
        alt: 'Tejido 4'
    },
]