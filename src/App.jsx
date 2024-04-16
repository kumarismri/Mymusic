import { Apicall } from './components/Api/Apicall'
import { Card } from './components/Card/Card'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'

function App() {

  return (
    <>
    <div style={{backgroundColor:"black"}}>
      <Navbar/>
      <Hero/>
      <Card/>
      <Apicall/>
    </div>
    </>
  )
}

export default App
