class TemperatureConverter {

    static celsiumToFahrenheit(celsius) {
        return (celsius * 9/5) +32;

    };
    static fahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    };
}

TemperatureConverter.celsiumToFahrenheit(20);
TemperatureConverter.fahrenheitToCelsius(68);