
    // Obtener una referencia al elemento <select> y al elemento <p>
    const selectEstado = document.getElementById('estado');
    const pLeyenda = document.getElementById('txt');

    // Agregar un controlador de eventos para el cambio en el campo <select>
    selectEstado.addEventListener('change', function() {
        // Obtener el valor seleccionado
        const estadoSeleccionado = selectEstado.value;

        // Definir leyendas para cada valor posible
        const leyendas = {
            'Pendiente': 'Tarea por hacer',
            'EnProceso': 'Tarea en proceso',
            'EnTesting': 'Tarea por testear',
            'Completada': 'Tarea completada',
            '': '' // Leyenda vacía para el valor predeterminado
        };

        // Actualizar el contenido del elemento <p> con la leyenda correspondiente
        pLeyenda.textContent = leyendas[estadoSeleccionado];
    });
