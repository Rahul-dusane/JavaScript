
    function TempConvert(){
        let Temprature = document.getElementById("num").value;
        parseFloat(Temprature);
        console.log("The Tempratur Is : "+Temprature);

        let kelToCelcius = Temprature - 273.15;
        let kelToFahrenheit = 9/5*(Temprature - 273.15) + 32;

        document.getElementById

        console.log("The Temprature In Celcius : "+kelToCelcius);
        console.log("The Temprature In Fahrenheit : "+kelToFahrenheit);
    }