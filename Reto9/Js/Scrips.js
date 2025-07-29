document.addEventListener('DOMContentLoaded', function(){
    //Gráfico de Barras de Top 20 Países Renovables
    fetch('data/top20Paises.json')
    .then(response => response.json())
    .then(data => {
        const ctx = document.getElementById('graficoBarrasPaises').getContext('2d');
        new Chart(ctx, {
            type:'bar', 
            data:{
                labels: data.map(item => item.Pais),
                datasets: [{
                    label:'Porcentaje de Energía Renovable',
                    data: data.map(item => item['Promedio Renovables']),
                    backgroundColor: 'rgba(27, 124, 103, 0.6)',
                    borderColor: 'rgba(103, 185, 154, 1)',
                    borderWidth:1
                
                }]
            },
            options: {
                resposive: true,
                scales:{
                    y: {
                        beginAtZero: true,
                        title:{
                            display:true,
                            text:'Porcentaje (%)'
                        }
                    },
                    x: {
                        tittle:{
                            display:true,
                            text:'Países'
                        }
                    },
                }

            }
        });
       
    });
    //Gráfico de Barras de Producción de Energía Renovable por Regiones
    fetch('data/topRegiones.json')
    .then(response => response.json())
    .then(data => {
        const ctx = document.getElementById('graficoBarrasRegiones').getContext('2d');
        new Chart(ctx, {
            type:'bar', 
            data:{
                labels: data.map(item => item.Region),
                datasets: [{
                    label:'Porcentaje de Energía Renovable',
                    data: data.map(item => item['Promedio Renovables']),
                    backgroundColor: 'rgba(29, 98, 155, 0.6)',
                    borderColor: 'rgba(49, 130, 184, 1)',
                    borderWidth:1
                
                }]
            },
            options: {
                resposive: true,
                scales:{
                    y: {
                        beginAtZero: true,
                        title:{
                            display:true,
                            text:'Porcentaje (%)'
                        }
                    },
                    x: {
                        tittle:{
                            display:true,
                            text:'Regiones'
                        }
                    },
                }

            }
        });
       
    });
    //Gráfico de líneas de Comparativa de producción de Energía Renovable - Colombia vs. Suramérica
    fetch('data/colombia_SurAmerica.json')
    .then(response => response.json())
    .then(data => {
        const filteredData = data.filter(item => item.Anno <= 2021);
        const ctx = document.getElementById('graficoLineasComparativo').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data:{
                labels:[...new Set(filteredData.map(item => item.Anno))],
                datasets: [
                    {
                        label:'Colombia',
                        data: filteredData.filter(item => item.Region === 'Colombia').map(item => item.Renovable),
                        borderColor: 'rgba(250, 158, 73, 1)',
                        backgroundColor: 'rgba(201, 176, 94, 0.88)',
                        fill: false,
                        borderWidth:1,
                        tesion:0.2,
                    },
                     {
                        label:'Suramerica',
                        data: filteredData.filter(item => item.Region === 'Suramerica').map(item => item.Renovable),
                        borderColor: 'rgba(155, 77, 41, 1)',
                        backgroundColor: 'rgba(226, 170, 138, 0.77)',
                        fill: false,
                        borderWidth:1,
                        tesion:0.2,
                    }
                ]
            }
        })
    });
});