import './component/css/landingpage.css';
import Header from './component/header';
import Hero from './component/hero'; 
import AppDwonload from './component/dwonloadappf';
import DateCalculation from './component/datecalculation';
import RegesterContainer from './component/logcontainer';
import Footer from './component/footer';
import GetApp from './component/getapp';
import ScrollToTop from './component/ScrollToTop';

function App() {
  return (
    <div>
      <Header />
    <div className={"bigcontainer"}>
      <Hero />
      <AppDwonload />
      <DateCalculation />
      <RegesterContainer />
      <GetApp />
      <Footer />
      <ScrollToTop />
    </div>
    </div>
  );
}

export default App;
