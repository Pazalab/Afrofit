import Navbar from "../components/common/navigation/Navbar"
import "../css/home.css"
import { Element } from "react-scroll"
const Home = () => {
  return (
    <>
          <Element name="home">
                 <Navbar />
          </Element>
    </>
  )
}

export default Home