// import  './App.css';
import Textform from './Componants/Textform'



function App() {
  return(
   <>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand"href="/">TextConverter</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page"href="/">Home</a>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
<div className='container' my-3>
   <Textform heading="---Enter Your Text---"/>
</div>

   </>
  );
}

export default App;
