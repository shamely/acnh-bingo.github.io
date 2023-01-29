import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { setVillagers } from './Redux/VillagerRedux';
import BingoBoard from './Components/Bingo/BingoBoard';
import {useGetVillagers} from './API/VillagersApi';
import VillagerSearch from './Components/VillagerSearch/VillagerSearch';

function App() {
  const dispatch = useDispatch()
  const {data, error, loading} = useGetVillagers()

  if(loading) return <span>Loading...</span>
  if(data){
    dispatch(setVillagers(data))
    return <div className='main-div'>
      <img className='app-logo' src={require('./assets/images/ACNH Bingo.png')}/>
      <VillagerSearch isDreamie={false} />
      <VillagerSearch isDreamie={true} />
      <BingoBoard />
    </div>
  }
  if(error) return <span>{error}</span>
  return null
}

export default App;
