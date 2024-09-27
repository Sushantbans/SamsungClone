import './App.css';
import help1 from './assests/help1.jpg'
import help2 from './assests/help2.jpg'
import help3 from './assests/help3.jpg'
import help4 from './assests/help4.jpg'
import download from './assests/download.jpeg';
import download1 from './assests/download1.jpeg';
import download2 from './assests/download2.jpeg';
import download3 from './assests/download3.jpeg';
import mian from './assests/mian.jpeg';
import mian2 from './assests/mian2.jpeg';

function App() {
  return (
    <div >
     <body className="body">

     
        <header className="header">
            <h1>Welcome to Samsung</h1>
            <nav>
                <a className="head-banner"  href="#" >Home</a>
                <a className="head-banner" href="#" >Products</a>
                <a  className="head-banner" href="#">About</a>
                <a className="head-banner" href="#" >Contact</a>
            </nav>
        </header>

        <section className="section1">
            
        </section>


      
        <section className="section2" >
            <p>
            <h1 className="firstp">Explore a wide range of cutting-edge products from Samsung.</h1>
            </p>

            <h2>Featured Products</h2>
            <div className="div1" >
                <img  alt="Samsung Phone" className="divimg1" src={mian}/>
                <h3>Samsung Galaxy S22</h3>
                <p>Experience the power of Samsung's flagship smartphone.</p>
                <a href="#" className="a"
                >Learn More</a>
            </div>
            <div className="divimg2" >
                <img src={mian2} alt="Samsung TV" className="Samsung" />
                <h3>Samsung QLED TV</h3>
                <p>Immerse yourself in stunning visuals with Samsung's QLED technology.</p>
                <a href="#"  className="a"
                >Learn More</a>
            </div>
            <hr/>
            <h1>Discover our top sellers & latest innovation</h1>
            <div className="maind">
                <div className="firstd">
                    <div className="firsti">
                        <img src={download} alt="Galaxy s24 ultra"/>
                    </div>
                    <div className="text1">
                        <h3>Galaxy s24 ultra</h3>
                        <p>Starting RS:117999</p>
                        <button className="button">Buy now  </button>
                    </div>
                </div>
                <div className="firstd">
                    <div className="firsti">
                        <img src={download1} alt="Galaxy s23 FE"/>
                    </div>
                    <div className="text1">
                        <h3>Galaxy s23 FE</h3>
                        <p>Starting RS:39999*</p>
                        <button className="button">Buy now </button>
                    </div>
                </div>
                <div className="firstd">
                    <div className="firsti">
                        <img src={download3} alt="Galaxy s24 ultra"/>
                    </div>
                    <div className="text1">
                        <h3>Galaxy Tab S9 FE</h3>
                        <p>Starting RS:32999*</p>
                        <button className="button">Buy now </button>
                    </div>
                </div>
                <div className="firstd">
                    <div className="firsti2">
                        <img src={download2} alt="Galaxy s24 ultra"/>
                    </div>
                    <div className="text1">
                        <h3>322L Twin Cooling Plus</h3>
                        <p>Starting RS:31990*</p>
                        <button className="button">Buy now </button>
                    </div>
                </div>
            </div>
        </section>
        <h1 className="h1"  >Help Me Chosse</h1>
        <div className="main2" >
          <div className="divh">
              <div className="imgh">
                <img src={help3} alt=""/>
                <h1 className="button2">Best smartphone For you</h1>
                <button className="button1">Learn More</button>
              </div>
              
          </div>
          <div className="divh" >
            <div className="imgh">
            <img src={help2} alt=""/>
            <h1 className="button2">Pick the TV That's best for you</h1>
            <button className="button1">Learn More</button>
            </div>
          
        </div>
        <div className="divh" >
         <div className="imgh">
           <img src={help1} alt=""/>
            <h1 className="button2">Pick the fridge that's best for you</h1>
           <button className="button1">Learn More</button>
         </div>

        </div>
        <div className="divh" >
        <div className="imgh">
        <img src={help4} alt=""/>
        <h1 className="button2">Compare up to the 3 Tablets</h1>
        <button className="button1">Learn More</button>
        </div>

        </div>
        </div>

        <footer className="footer">
            <p>&copy; 2024 Samsung. All rights reserved.</p>
        </footer>



        </body>
    </div>
  );
}

export default App;
