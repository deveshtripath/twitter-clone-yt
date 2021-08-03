import React,{useState,useEffect} from 'react'
import "./TinderCard.css";
import database from './firebase';
import TinderCards from 'react-tinder-card'

function TinderCard() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
       const unsubscribe= database.collection('people').onSnapshot(snapshot =>(
            setPeople(snapshot.docs.map(doc => doc.data()))
        ))
        return()=>{
            unsubscribe();
        }
    }, []);

    return (
        <div >
        <div className="tinderCard__cardContainer">
            {people.map((person) => (
                <TinderCards
                className="swipe"
                key={person.name}
                preventSwipe={['up','down']}
                >
                    <div
                    style={{backgroundImage:`url(${person.url})`}}
                     className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCards>
                
            ))}
            </div>
            
        </div>
    )
}

export default TinderCard


// {
//     name:'stive jobs',
//     url:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSkKGZuRUelGLq0FpwuFi9fp7fEPejRm5qgBKO2AQXBQ5VWl1Wf'
// },
// {
//     name:'elon musk',
//     url:'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg'
// }