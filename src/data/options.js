export const options = [
    {
        name: 'tictactoe',
        href: '/tictactoe',
        icon: null,
        title: 'Tic-Tac-Toe',
        description: 'Juego del Tic-Tac-Toe.',
        detail: 'By Alice',
        image: 'https://picsum.photos/id/1018/400/300'
    },
    {
        name: 'Launches',
        href: '/launches',
        icon: null,
        title: 'Launches',
        description: 'Muestra un listado de los lanzamientos de cohetes de SpaceX obtenidos desde su Api https://api.spacexdata.com/v3/launches. Al seleccionbar un lanzamiento muestra el detalle incluyendo su video.',
        detail: 'La lógica del fetch está en un Hook génerico que recibe la url como parámetro.',
        image: 'https://picsum.photos/id/1018/400/300'
    },
    {
        name: 'Productos',
        href: '/products',
        icon: null,
        title: 'Productos',
        description: 'Muestra un listado de productos obtenidos de la Api https://dummyjson.com/products , al seleccionar muestra mas datos del producto. ',
        detail: 'La lógica del fetch se maneja con createAsyncThunk del paquete reduxjs/toolkit.',
        image: 'https://picsum.photos/id/1043/400/300'
    },
    {
        name: 'Calculator',
        href: '/calculator',
        icon: null,
        title: 'Calculadora Simple',
        description: 'Calculadora con las 4 operaciones básicas.',
        detail: '',
        image: 'https://picsum.photos/id/1018/400/300'
    },
    {
        name: 'Blog Context',
        href: '/blog',
        icon: null,
        title: 'Blog Test Context',
        description: 'Uso de Context para acceder a variables en todos los componentes hijos. Cambia valor del nombre y se reenderiza en todos los componentes hijos.',
        detail: 'Crea un Context y un Provider para poder acceder a variables en todos los componentes hijos.',
        image: 'https://picsum.photos/id/1018/400/300'
    },
    {
        name: 'goals',
        href: '/goals',
        icon: null,
        title: 'My little List of Goal',
        description: 'ToDoList para metas diarias, permite ingresar una meta y va mostrando la lista.',
        detail: 'Las crea en un array',
        image: 'https://picsum.photos/id/1018/400/300'
    },
    {
        name: 'alice1',
        href: '/alice01',
        icon: null,
        title: 'Lista de Gastos',
        description: 'App sencilla de creación de una lista de gastos creada con Chat-Gpt',
        detail: 'Utiliza redux/toolkit, se define GastosSlice',
        image: 'https://picsum.photos/id/1018/400/300'
    },
    {
        name: 'alice2',
        href: '/alice02',
        icon: null,
        title: 'Lista Productos Alice',
        description: 'Muestra un listado de productos y el detalle del elemento seleccionado. App creada con Chat-Gpt',
        detail: 'Modifique la lógica del fetch para que use mi hook genérico useFetch. Los datos se obtienen dela api https://dummyjson.com/products',
        image: 'https://picsum.photos/id/1018/400/300'
    },
    {
        name: 'portafolio',
        href: '/portafolio',
        icon: null,
        title: 'Portafolio',
        description: 'Muestra un portafolio con proyectos realizados (Alice)',
        detail: 'Generado por Alice y luego arreglado',
        image: 'https://picsum.photos/id/1018/400/300'
    },
]


