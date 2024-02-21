import "../home/home.css"
import Social from '../home/Social.jsx'
import Data from '../home/Data.jsx'
import ScrollDown from '../home/ScrollDown.jsx'

const Home = () => {
  return (
     <section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                <Social />

                <div className="home__img"></div>

                <Data />
            </div>

            <ScrollDown/>
        </div>
     </section>
  )
}

export default Home