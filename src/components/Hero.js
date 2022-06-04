import "../css/Hero.css"
import HeroImage from "../images/imgroup.png"
import HeroImageBig from "../images/imgroupbig.png"

export default function Hero(){
return(
    <section>
        <div className="hero--banner">
        <img src={HeroImage} alt="banner" className="banner" />
        <img src={HeroImageBig} alt="big banner" className="Bigbanner" />
        </div>

        <div className="hero--content">
            <h2 className="hero--title">Online Experiences</h2>
            <p className="hero--paragraph">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>

    </section>
)
}