import CounterClassComponent from './CounterClassComponent';
import CounterFunctionComponent from './CounterFunctionComponent';

function App() {

  const numbers = [1,2,5,4,5];
  const osobe = [{ime: 'pero', godine: 34}, {ime: 'janko', godine: 22}]

  return (
    <div>
      App.js
      <ul>
        {numbers.map((elementListe, index) => {
          return <li key={index}>
                    <b>{elementListe}</b>
                </li>;
        })}
      </ul>

      <ul>
        {osobe.map((elementListe, index) => {
          return <li key={index}>
                    <b>{elementListe.ime} ima godina: {elementListe.godine}</b>
                </li>;
        })}
      </ul>

      <CounterClassComponent />
      <hr/>
      <CounterFunctionComponent />
    </div>
  );
}

export default App;
