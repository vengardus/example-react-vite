export const options = [
    {
        name: 'Launches',
        href: '/launches',
        icon: null,
        title: 'Launches',
        description: 'Muestra un listado de los lanzamientos de cohetes de SpaceX obtenidos desde su Api https://api.spacexdata.com/v3/launches. Al seleccionbar un lanzamiento muestra el detalle incluyendo su video.',
        detail: 'La lógica del fetch está en un Hook génerico que recibe la url como parámetro.',
        image: null
    },
    {
        name: 'Productos',
        href: '/products',
        icon: null,
        title: 'Productos',
        description: 'Muestra un listado de productos obtenidos de la Api https://dummyjson.com/products , al seleccionar muestra mas datos del producto. ',
        detail: 'La lógica del fetch se maneja con createAsyncThunk del paquete reduxjs/toolkit.',
        image: null
    },
]