import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout.js'
function App() {
    let children = {
        text_1:"Demo 1",
        text_2:"Demo 2"
    }
    return (
      <Layout>
          {children}
      </Layout>
    );
}

export default App;