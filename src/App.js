import './component/css/style.css'
import Header from './component/header'
import Hero from './component/hero' 
import AppDwonload from './component/dwonloadappf';
import DateCalculation from './component/datecalculation';
import RegesterContainer from './component/logcontainer'

function App() {
  return (
    <div>
      <Header />
    <div className={"bigcontainer"}>
      <Hero />
      <AppDwonload />
      <DateCalculation />
      <RegesterContainer />
    </div>
    </div>
  );
}

export default App;
