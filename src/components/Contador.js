
import React, { Fragment, useState } from 'react';

const Contador = () => {

const [numero,setNumero] = useState(0);

const Aumentar = () =>{

    setNumero(numero + 1)

}

    return ( 
        <Fragment>
        <h3>Mi primer componente {numero} </h3>
        <button onClick={Aumentar} > Aumentar </button>           
        </Fragment>
     );
}
 
export default Contador;

