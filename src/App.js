import React, { Fragment, useState } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';


function App() {
     
const [cantidad, guardoCantidad] = useState(0);
const [plazo, guardoPlazo] = useState('');

  return (
    <Fragment>
     < Header
          titulos = 'Cotizador de prestamos'
     />

     <div className = "container">
          <Formulario 
               cantidad = {cantidad}
               guardoCantidad = {guardoCantidad}
               plazo = {plazo}
               guardoPlazo = {guardoPlazo}
          />
     </div>
     </Fragment>
  );
}

export default App;

