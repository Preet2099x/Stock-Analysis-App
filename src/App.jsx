import './App.scss'
import LiveChart from './Livechart'
import SearchBar from './SearchBar'


function App() {

  return (
    <div className='main'>
      <div className="graph">
       <LiveChart symbol={'IBM'} />
      </div>
      <div className="search">
        <SearchBar/>
      </div>
      
    </div>
  )
}

export default App