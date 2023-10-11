import {useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { increament,byincreament } from '../redux/Counter/CounterSlice';
import { decreament } from '../redux/Counter/CounterSlice';
function Counter() {
    const countValue = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const [amount, setAmount] = useState(0)
    console.log(countValue);
  return (
    <>
    <h1>{countValue}</h1>
    <button onClick={()=>dispatch(increament())}>increament</button>
    <button onClick={()=>dispatch(decreament())}>decreament</button>
    <br />
    <br />
    <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number"/>
    <br />
    <button onClick={()=>dispatch(byincreament(amount))}>increament by Amount</button>
    

    </>
  )
}

export default Counter