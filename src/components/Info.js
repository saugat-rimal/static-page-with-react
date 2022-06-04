import Star from "../images/Star.png"
import "../css/Info.css"

export default function Info(props){
   return(   
   <div className="card">
        <img className="image" src={props.img} alt="kaite" />
        <p className="card--update">{props.update}</p>
        <div className=" rating">
         <p> <span> <img src={Star} alt="Star" className="star" /> {props.rating}</span> <span className="gray"> ({props.comments}) • {props.location}</span> </p>
        
           <p className="up">{props.title}</p>
           <p className="up"><b>From {props.money} </b> / {props.per}</p>
        </div>
    </div>

   )
}

