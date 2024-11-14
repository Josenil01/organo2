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
      corPrimaria: '#57C278',
      corSecundaria: '#D9F3E9'
    },
    {
      id: uuidv4(),
      nome: 'Front-end',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8F2'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      id: uuidv4(),
      nome: 'Inovation e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]);


  const [colabs, SetColab] = useState([])

  const colabAdd = (colab) => {
    SetColab([...colabs, colab]) // "..." ele espalha o array e adicona o novo colaborador no final.
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
      <Forms times={times.map(time => time.nome)} colabSaved={colab => colabAdd(colab)} />
      {times.map(time => <Time
        id={time.id}
        key={time.id}
        nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        colabs={colabs.filter(colabs => colabs.time === time.nome)}
        aoDeletar={deletarColab}
        mudarCor={mudarCorDoTime}
      />)}
      <Rodape />
    </div>
  );
}

export default App;
