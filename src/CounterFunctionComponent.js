import { useEffect, useState } from 'react'; 

export default function CounterFunctionComponent(){
    const [count, setCount] = useState(0);
    const [pozdrav, setPozdrav] = useState('Dobar dan');

    useEffect(() => {
        console.log('useEffect dependency lista prazna: []');
    }, []); // [] -->> izvršava se samo jednom, na mount -> efektivno kao componentDidMount

    useEffect(() => {
        console.log('useEffect (dependency liste nema)');

        // kada vratimo funkciju, ona se zove na kraju -->> efektivno componentWillUnmount, 
        // ali svaki puta prije nego se ponovno pozove useEffect koji je vratio cleanup funkciju
        return () => {
            console.log('cleaning up...'); 
        }
    }); // ništa -->> izvršava se UVIJEK, i na mount i na update

    useEffect(() => {
        console.log('useEffect dependency lista: [count]');        
    }, [count]); // [count] -->> izvršava se samo kada se stvari iz liste (count) promijene

    return <div>
        <p>CounterFunctionComponent</p>
        <button onClick={() => setCount(count+1)}>Count: {count}</button>
        <p>{pozdrav}</p>
    </div>
}
