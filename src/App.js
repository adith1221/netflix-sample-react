import NavBar from './Components/Header/navbar'
import './Components/Header/NavBar.css'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import { ComedyMovies, originals,action } from './urls'
function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={ComedyMovies} title='ComedyMovies' isSmall/>
      <RowPost url={action} title='Actions' isSmall/>


    </div>
  )
}
export default App
