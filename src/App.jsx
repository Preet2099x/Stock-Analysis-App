import './App.css'
import LiveChart from './Livechart'

function App() {

  return (
    <>
      <h1>
        Stock Candlestick Chart
      </h1>
      <LiveChart symbol={'IBM'} />
    </>
  )
}

export default App