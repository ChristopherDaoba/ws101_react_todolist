
//import './App.css';
//import Biodata from './components/Biodata/biodata';
// import Navbar from './components/Navbar/Navbar.jsx';
// import About from './components/About/About.jsx';
// import Contact from './components/Contact/Contact.jsx';
// import Footer from './components/Footer/Footer.jsx';
// import Hero from './components/Hero/Hero.jsx';
// import HandlingClass from './components/HandlingClass';
// import HandlingFunctions from './components/HandlingFunctions';
// import IfConditions from './components/IfConditions';
// import Reactlist from './components/Reactlist';
import ToDoList from './ToDoListApp/todolist';


function App() {
  return (
    <div className="App">
      {/* <Navbar name= "Christopher" lastname="Balibol"/>
      <Hero Painting="dream"/>
      <About/>
      <Contact/>
      <Footer/>
      <HandlingClass/>
      <HandlingFunctions/>
      <IfConditions is={true}/>
      <Reactlist/> */}
      {/*<Biodata
      name="Christopher" lastname = "Daoba"
      Mobile_no="09945671201"
      Email_Add="chrisdaoba122395@gmail.com"
      Gender="Male"
      Birth_date="December 23 1995"
      Father_name="Ronaldo L. Daoba"
      Mother_name= "Florenda R. Daoba"
      HighSchool="Quezon National High School"
      College="Dalubhasaan ng Lungsod ng Lucena"/>*/}
      <ToDoList />
    </div>
    
  );
}

export default App;
