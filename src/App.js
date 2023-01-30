import './App.css';
import { useDispatch } from 'react-redux';
import { setVillagers } from './Redux/VillagerRedux';
import BingoBoard from './Components/Bingo/BingoBoard';
import {useGetVillagers} from './API/VillagersApi';
import VillagerSearch from './Components/VillagerSearch/VillagerSearch';
import { useSearchParams } from 'react-router-dom';

function App() {
  const dispatch = useDispatch()
  const {data, error, loading} = useGetVillagers()
  const [searchParams, setSearchParams] = useSearchParams()

  if(loading) return <span>Loading...</span>
  if(data){
    dispatch(setVillagers(data))
    return <div className='main-div'>
      <img className='app-logo' src={require('./assets/images/ACNH Bingo.png')} alt='App Logo'/>
      <VillagerSearch isDreamie={false} searchParams={searchParams} setSearchParams={setSearchParams} />
      <VillagerSearch isDreamie={true} searchParams={searchParams} setSearchParams={setSearchParams} />
      <BingoBoard />
    </div>
  }
  if(error) return <span>{error}</span>
  return null
}

export default App;
