import React from 'react';
import './App.css';

// Los estados son encapsulados
//Los componentes con estados se hacen a través de clases
//Los props estan dentro de la clase
//Al trabajar con clase tenemos que hacer referencias a las funciones
//a los objetos
//Cambiando el estado se actualiza el dato en el componente

/* practica 1
class Hello extends React.Component {
constructor (props){
super(props)
this.state = {
    nombre: 'Angel'
}
}

despedirse =() => {
this.setState(
    {
        nombre:'gato'
    }
)
}

render(){
    return(
        <h1 onClick={this.despedirse}> Saludos {this.state.nombre} </h1>
    )
}

};

    
export default Hello;
*/

class Contador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }


    upConteo = (e) => {
     
     this.setState(function(prevState){
         return {
             count:prevState.count +1
         }
     })
    };


    downConteo = () => {
     
        this.setState(function(prevState){
            if (prevState.count >= 1){
            return {
                count:prevState.count -1
            }
        }
        })
    };

    resetConteo = (e) => {
        e.preventDefaul();
        this.setState({count:0})
    };

    render() {
        return (
            <div className="App">
                <div className="conteo">{this.state.count}</div>
                <div className="cambioContador">
                    <a href="#" onClick={this.upConteo} className="opConteo"> Subir</a>
                    <a href="#" onClick={this.downConteo} className="opConteo"> Bajar</a>
                    <a href="#" onClick={this.resetConteo} className="opConteo"> Reset</a>

                </div>
            </div>
        )
    }
}

export default Contador;