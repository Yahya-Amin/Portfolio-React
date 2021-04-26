import './intro.scss'

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Salut, je suis</h2>
                    <h1>AMINE YAHYA</h1>
                    <h3>Freelance<span></span></h3>
                </div>   
            </div>
            <a href="#Portfolio">
                <img src="assets/down.png" alt=""/>
            </a>
        </div>
    )
}
