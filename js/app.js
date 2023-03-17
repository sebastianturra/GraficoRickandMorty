Chart.defaults.color = '#fff'

const printChart = () => {
    fetchCoastersData("https://rickandmortyapi.com/api/character").then(([promesas])=>{
        console.log(promesas)
        renderModelsChart(promesas)
    })
}

const renderModelsChart = (promesas) => {

    let datosArray = promesas.results;
    console.log(datosArray)

    const uniqueModel = [...new Set(datosArray.map(name => name.species))]
    console.log(uniqueModel)

    letLabels = uniqueModel
    let datosArraymap = uniqueModel.map((models) => datosArray.filter((model) => model.species == models).length)
    console.log(datosArraymap)

    const data = {
        labels: letLabels,
        datasets: [{
            data: datosArraymap,
            borderColor: getDataColors(),
            backgroundColor: getDataColors(20)
        }]
    }

    // const data = {
    //     labels:['Uno','Dos','Tres'],
    //     datasets: [{
    //         data:[10,20,30],
    //         borderColor: getDataColors(),
    //         backgroundColor: getDataColors(20)
    //     }]
    // }

    const options = {
        plugins: {
            legend:{ position: 'left' }
        }
    }

    new Chart('modelsChart', {type: 'doughnut', data, options})
}

printChart()

