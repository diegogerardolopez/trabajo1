
const selectEstado = document.getElementById('estado');
const pLeyenda = document.getElementById('txt');

   
    selectEstado.addEventListener('change', function() {
    
        const estadoSeleccionado = selectEstado.value;

    
        const leyendas = {
            'Pendiente': 'Tarea por hacer',
            'EnProceso': 'Tarea en proceso',
            'EnTesting': 'Tarea por testear',
            'Completada': 'Tarea completada',
            '': '' 
        };

        
        pLeyenda.textContent = leyendas[estadoSeleccionado];
    });
