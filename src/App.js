import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Banner from './Componentes/Banner/Banner';
import Forms from './Componentes/Forms';
import Time from './Componentes/Time';
import Rodape from './Componentes/Footer';
//V2
function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      corPrimaria: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Front-end',
      corPrimaria: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      corPrimaria: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      corPrimaria: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      corPrimaria: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Inovation e Gestão',
      corPrimaria: '#FF8A29'
    }
  ]);


  const [colabs, SetColab] = useState([])

  const colabAdd = (colab) => {
    SetColab([...colabs, colab]) // "..." ele espalha o array e adicona o novo colaborador no final.
    //console.log('colaboradores', colabs)
  }
  function cadastrarTimes(novoTime)
  {
    setTimes([...times,{...novoTime}])
   // console.log(times)
  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      console.log(time.id, id)
      if (time.id === id) {
        time.corPrimaria = cor;
      }
      return time;
    }));
  }
  function deletarColab(id) {
    SetColab(colabs.filter(colab => colab.id !== id));
  }
  return (
    <div className="App">
      <Banner />
      <Forms 
      cadastrarTime={cadastrarTimes}
      times={times.map(time => time.nome)} 
      colabSaved={colab => colabAdd(colab)} 

      />
      {times.map(time => <Time
        id = {time.id}
        key={time.id}
        nome={time.nome}
        corPrimaria={time.corPrimaria}
        colabs={colabs.filter(colabs => colabs.time === time.nome)}
        aoDeletar={deletarColab}
        mudarCor={mudarCorDoTime}
      />)}
      <Rodape />
    </div>
  );
}

export default App;
