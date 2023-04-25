

import Header from './Header'
import Ads from './Ads'
import Items from './Items';
import Temple from './Temple';
import Footer from './Footer';
import './assets/css/style.css'
function App() {
  return (
    <div className="App">


      <Header />
        <main>

          <Ads />
          <Items />
          <Temple />

        </main>
        <footer>
          <Footer />
        </footer>
      
    </div>
  );
}

export default App;
