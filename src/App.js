import Header from "./header/Header";
import TopHeader from "./topHeader/TopHeader";
import BottomHeader from "./bottomHeader/BottomHeader";
import Body from "./body/body";
import './App.css';
import Footer from "./footer/Footer";



function App() {
  return (
    <div className="wrapper">
        <TopHeader/>
        <Header/>
        <BottomHeader/>
        <Body/>
        <Footer/>
    </div>
  );
}

export default App;
