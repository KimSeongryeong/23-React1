import React, {useState} from "react";
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>물이 끓습니다.</p>;
    }
    return <p>물이 끓지 않습니다.</p>;
}

function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
    return "";
    }
    const output = convert(input);
    const rounded = Math.round(o니tput * 1000) / 1000;
    return rounded.toStringO;
}

function Calculator(props) {
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = 니seState("c");

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("c");
    };
    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    };

    const Celsius =
        scale = "f" ? tryConvert(te叩erature, toCelsius) : temperature;
    const fahrenheit =
        scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
  
    return (
        <div>
            <TemperatureInput
                scale="C"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput
                scale="f"
                temperature={fahrenhei}
                onTemperatureChange={handleFahrenheitChange}
            />
        </div>
    );
}

export default Calculator;
    