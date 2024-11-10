import { useState } from 'react';
import Banner from './Componentes/Banner/Banner';
import Forms from './Componentes/Forms';
import Time from './Componentes/Time';
import Rodape from './Componentes/Footer';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F3E9'
    },
    {
      nome: 'Front-end',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8F2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovation e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ];


  const [colabs, SetColab] = useState([])
  const colabAdd = (colab) => {
    SetColab([...colabs, colab]) // "..." ele espalha o array e adicona o novo colaborador no final.
  }
  return (
    <div className="App">
      <Banner />
      <Forms times={times.map(time => time.nome)} colabSaved={colab => colabAdd(colab)} />
      {times.map(time => <Time
        key={time.nome}
        nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        colabs={colabs.filter(colabs => colabs.time === time.nome)}
      />)}
      <Rodape/>
    </div>
  );
}

export default App;
