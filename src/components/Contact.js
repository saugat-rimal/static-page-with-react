import Info from './Info'
import Kaite from "../images/kaite.png"
import Saugat from "../images/saugatrimalwithmic.jpg"
import Start from "../images/startwithwhy.jpg"
import Mogambo from "../images/mogambo.jpg"
import Huddle from "../images/huddle.png"
import Mars from "../images/mars.jpg"



export default function Contact(){
    return(

        <div className="space">
         <div className="contacts">
             <Info 
              img = {Start}
              update= "Sold Out"
              rating = "5.0"
              comments = "6"
              location = "USA"
              title = "Start With Why By Simon"
              money = "$136"
              per = "Book"
             />
             <Info
             img = {Saugat}
             update= "Online"
             rating = "4.0"
             comments = "30"
             location = "China"
             title = "Wordpress with Saugat Rimal"
             money = "$13"
             per = "Person"
             />
             <Info
             img = {Mogambo}
             update= "Limited"
             rating = "4.0"
             comments = "30"
             location = "India"
             title = "Magic with Mogambo"
             money = "$123"
             per = "Person"
             />
             <Info
             img = {Huddle}
             update= "Available"
             rating = "4.0"
             comments = "30"
             location = "China"
             title = "Event Promotion Platform"
             money = "$0"
             per = "Events"
             />

               <Info
             img = {Mars}
             update= "Limited"
             rating = "4.0"
             comments = "30"
             location = "Cosmos"
             title = "Going Mars with Jadu"
             money = "$123"
             per = "Person"
             />
              
             
         </div>
         </div>
    )
}


