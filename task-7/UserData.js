import React from 'react'
import './App.css'


export default function UserData(props) {
// i worked like fetching data from an api so i use console.log to know how the data is arrange

     const PersonDetails = props.User;
    //  i used the map to loop through the array and also to get the individual items
        const Details = PersonDetails.map(details => {
          /* i use concantination to combine the twitter address to the person Twitter user name
          i have to declear a variable call twitter and assign the concatiation to it
          */
         const twitter = "http://twitter.com/"+details.twitterUsername
         console.log(details);
            return  (
            <div className="profile">
                {/* binding the image to an image source */}
                <img src={details.avatar} alt="this is an imag" /><br/>

              <p> <br/> <span id="name">{details.name} </span></p>  
                <p>Location:<br/> <span className="small-font">{details.location}</span></p> 
                <p>Food:<br/><span className="small-font">{details.foodType}</span> </p>
               <p>Age:<br/><span className="small-font">{details.age}</span></p> 
               <p>Likes:<br/><span className="small-font">{details.likes}</span></p> 
               
             <p> Twitter: <br/><span id="twit-link"><a href={twitter} target="_blank" > @{details.twitterUsername}</a></span> </p>

               
            </div>
           
                );
        });
        
    return (
        <div>
         {Details}
            
        </div>
    );
}
