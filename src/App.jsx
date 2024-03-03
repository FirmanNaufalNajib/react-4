import {useRoutes} from 'react-router-dom'
import {routeList} from "./components/routes/routes"


const App = () => {

  const element = useRoutes(routeList)

  return element
}

export default App