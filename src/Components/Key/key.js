import React from "react";
import axios from "axios";
import "../Key/key.css";

export default class key extends React.Component {

    state ={
        codes:[]     
    }

    handlerSubmit = e =>{
        e.preventDefault();
    }

    handlerOnChange = async e =>{
        await this.setState({
            codes:{
                ...this.state.codes,
                code: e.target.value
            }
        })
    } 

    handlerButton =()=>{
        let url = 'http://localhost:8080/city/code';
        axios.post(url, this.state.codes)
        .then(response =>{
            if(response.data === "Ingresa"){
                
                this.props.history.push("/weather");
            }else{
                this.setState({
                    error : true,
                    errorMes : response.data
                })
            }
            console.log(response);
        }).catch( error =>{
            console.log(error)
            this.setState({
                error : true,
                errorMes : "Error del servicio"
            })
        })      
            
    }
              

    render(){
    return(
        <div className="m-0 vh-100 row justify-content-center align-items-center">   
        <div className="col-auto p-6 text-center"> 
            <div className="o-bigContainer">
                <div className="Key-cotent">
                <form className="o-form-key" onSubmit={this.handlerSubmit}>
                    <label className="o-label-mensaje"> Escribe la clave para ingresar al servicio</label>
                        <input type=""  placeholder="Escribe la clave aquí" onChange={this.handlerOnChange}/>
                    <div className="Btn-key">
                      <button type="" className="btn btn-primary" onClick={this.handlerButton}>
                        Entrar
                        </button>
                    </div>
                </form>
                </div>
                <div className="o-imgb"></div>
            </div> 
        </div>
        </div>
    );
}
}
