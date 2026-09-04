import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Router from "./Routes";
import "./Global.css"

function App() {

  return (
    <div className="container">

      <Header
        titleHeader="💗 Victor & Isa - chá de panela 💗"
        textHeader="Estamos montando nosso novo lar e adoraríamos ter você com a gente nessa comemoração!">
      </Header>

      <hr className="divider" />

      <Router />

      <Footer textFooter="Feito com muito carinho por Victor & Isinha 🏠💕" />
    </div>

  )
}

export default App
