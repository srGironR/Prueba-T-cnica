import React from "react";
import Title from "../Title/Wtitle";
import Weatherinfo from "../WeatherInfo/winfo";
import axios from "axios";
import "../WeatherCity/wcity.css";

var registro = new Date().toLocaleString();

export default class Weathercity extends React.Component {

    state = {
        citys: [],
        temps: [],
        hums: [],
        winds: []
    }
    //mount routes to get data
    async componentDidMount() {
        const res = await axios.get('http://localhost:8080/city/200');
        this.setState({ citys: res.data });
        console.log(this.state.citys);

        const res2 = await axios.get('http://localhost:8080/temperature/200');
        this.setState({ temps: res2.data });
        console.log(this.state.temps);

        const res3 = await axios.get('http://localhost:8080/humidity/200');
        this.setState({ hums: res3.data });
        console.log(this.state.hums);

        const res4 = await axios.get('http://localhost:8080/wind/200');
        this.setState({ winds: res4.data });
        console.log(this.state.winds);
    }

    render() {
        return (
            <div className="m-0 vh-100 row justify-content-center align-items-center">
                <div className="col-auto p-6 text-center">
                    <div className="o-bigContainer">
                        <div className="o-cali"></div>
                        <div className="o-Title">
                            {this.state.citys.map(city => (
                                <Title
                                    city={city.city_name}
                                    date={registro}
                                    temp={(this.state.temps.temp - 273.15) + "°C"}>
                                </Title>
                            ))}
                        </div>
                        <div className="o-weather">
                            <p>Clima / Soleado</p>
                        </div>
                        <div className="o-cardDetail">
                            <Weatherinfo icon={"https://lh3.googleusercontent.com/hnE4fuk2gBGmpoIyQNNoUstJxyBRGRcL58LmMNtK6z94fDR4-Yy8OAtQQMfOvQP5rGvpqA=s85"}
                                para={"Temperatura"}
                                num={(this.state.temps.temp - 273.15)}
                            ></Weatherinfo>
                            <div className="o-bar"></div>
                            <Weatherinfo icon={"https://lh3.googleusercontent.com/dCn2xYsPdTDstloC1bfK2hoWriFSiHHXKPqsb31Y6xDTP1752so7e_gcTyke5uQt1c1B=s85"}
                                para={"Húmedad"}
                                num={this.state.hums.humidity}
                            ></Weatherinfo>
                            <div className="o-bar"></div>
                            <Weatherinfo icon={"https://lh3.googleusercontent.com/iXi_qKKG7ixAxAk2SrXPr1N8uUAQ82NyeU4GgkWbqnhiJlQa0mgLMsm_75hbMdqluOTE=s85"}
                                para={"Velocidad Viento"}
                                num={this.state.winds.speed}
                            ></Weatherinfo>

                        </div>
                    </div>
                </div>
                <div className="col-auto p-7 text-center">
                <div className="o-bigContainer">
                        <div className="o-cali"></div>
                        <div className="o-Title">
                            {this.state.citys.map(city => (
                                <Title
                                    city={"BOGOTÁ"}
                                    date={registro}
                                    temp={(this.state.temps.temp - 273.15) + "°C"}>
                                </Title>
                            ))}
                        </div>
                        <div className="o-weather">
                            <p>Clima / Soleado</p>
                        </div>
                        <div className="o-cardDetail">
                            <Weatherinfo icon={"https://lh3.googleusercontent.com/hnE4fuk2gBGmpoIyQNNoUstJxyBRGRcL58LmMNtK6z94fDR4-Yy8OAtQQMfOvQP5rGvpqA=s85"}
                                para={"Temperatura"}
                                num={(this.state.temps.temp - 273.15)}
                            ></Weatherinfo>
                            <div className="o-bar"></div>
                            <Weatherinfo icon={"https://lh3.googleusercontent.com/dCn2xYsPdTDstloC1bfK2hoWriFSiHHXKPqsb31Y6xDTP1752so7e_gcTyke5uQt1c1B=s85"}
                                para={"Húmedad"}
                                num={this.state.hums.humidity}
                            ></Weatherinfo>
                            <div className="o-bar"></div>
                            <Weatherinfo icon={"https://lh3.googleusercontent.com/iXi_qKKG7ixAxAk2SrXPr1N8uUAQ82NyeU4GgkWbqnhiJlQa0mgLMsm_75hbMdqluOTE=s85"}
                                para={"Velocidad Viento"}
                                num={this.state.winds.speed}
                            ></Weatherinfo>

                        </div>
                    </div>

                </div>
            </div>

        )
    }
}
