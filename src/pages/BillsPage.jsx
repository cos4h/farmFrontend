import { useEffect} from 'react'
import { useBills } from '../context/BillsContext.jsx';

export default function BillsPage() {
  const { getBills, bills } = useBills();

  useEffect(() => {
    getBills();
  }, []);

  if(bills.length === 0) return (<h1>No hay Facturas</h1>);

  return (
    <div>
      {
        bills.map((bill) => (
          <div key={bill._id}>
            <h1>{bill.name}</h1>
            <p>{bill.description}</p>
            <p>{bill.quantity}</p>
            <p>{bill.price}</p>
            <p>{bill.date}</p>
          </div>
      ))}
    </div>
  )
}
