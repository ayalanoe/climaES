function deptoseleccionado(select) {
  
    let temperaturaValor = document.getElementById('temperatura')
    let temperaturaDescripcion = document.getElementById('descripTemp')
    let ubicacion = document.getElementById('ubicacion')
    let estadoImg = document.getElementById('imgestado')
    let vientoVelocidad = document.getElementById('velocidad');
    let departamento = document.getElementById("selector").value;
    var url;
    url = `https://api.openweathermap.org/data/2.5/weather?q=${departamento}&lang=es&units=metric&appid=146ee22d857ca40b1b51e905477324ba`
  
    if (navigator.geolocation) {
      fetch(url)
      .then(response => { return response.json() })
      .then(data => {

        let temp = Math.round(data.main.temp)
        temperaturaValor.textContent = `${temp} ° C`
        let desc = data.weather[0].description
        temperaturaDescripcion.textContent = desc.toUpperCase()
        ubicacion.textContent = data.name
  
        vientoVelocidad.textContent = `${data.wind.speed} K/H`
        console.log(data.weather[0].main)
        switch (data.weather[0].main) {
          case 'Thunderstorm':
            estadoImg.src = 'estadosClima/tormenta.jpg'
            console.log('TORMENTA');
            break;
          case 'Drizzle':
            estadoImg.src = 'estadosClima/llovizna.jpg'
            console.log('LLOVIZNA');
            break;
          case 'Rain':
            estadoImg.src = 'estadosClima/lluvia.jpg'
            console.log('LLUVIA');
            break;
          case 'Snow':
            estadoImg.src = 'estadosClima/nieve.jpg'
            console.log('NIEVE');
            break;
          case 'Clear':
            estadoImg.src = 'estadosClima/dia.png'
            console.log('LIMPIO');
            break;
          case 'Atmosphere':
            estadoImg.src = 'estadosClima/atmosferico.jpg'
            console.log('ATMOSFERA');
            break;
          case 'Clouds':
            estadoImg.src = 'estadosClima/nublado.jpg'
            console.log('NUBES');
            break;
          default:
            estadoImg.src = 'estadosClima/dia.png'
            console.log('por defecto');
        }
      })
      .catch(error => {
        console.log(error)
      })
    }
  }