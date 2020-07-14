import React from 'react';

export const ExampleFunction = () => (
<div>
    does nothing apparently
</div>
);

let [planets, setPlanets] = useState([]); 
    
    useEffect(() => {
        let url = data;
        async function fetchPeople() {
         
          //let url = data;
         
          let res = await fetch(url);
          let data = await res.json();
           // holdIt = words.results;
          setPlanets(data.results);
          planets[0] = data.name;
          //console.log(data.name)  
         
          //console.log(holdIt[0]) 
        }
    
        //console.log(planets)
        
        fetchPeople();
        //console.log(data)
        //console.log(planets.name)
      }, [])

      export default function Homeworld ( { data } ) {
        let [planets, setPlanets] = useState([]); 
        
        useEffect(() => {
            let url = data;
            async function fetchPeople() {
             
              //let url = data;
             
              let res = await fetch(url);
              let data = await res.json();
               // holdIt = words.results;
              setPlanets(data.results);
              window.homeBoy = data.name;
              console.log(data.name)
              console.log(window.homeBoy)  
             
              //console.log(holdIt[0]) 
            }
        
            //console.log(planets)
            
            fetchPeople();
            //console.log(data)
            //console.log(planets.name)
          }, [])
    
          return (
            <p>{window.homeBoy}</p>
          );
       
    }
    import React, {useState, useEffect } from 'react'

export default function Person({data}){
    let [humanoid, setHumanoid] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
async function fetchPerson() {
    let url = data;
    let res = null;

    res = await fetch(url);
    data = await res.json();
    setHumanoid(data.title);
    window.someGuy = data.title;
    console.log(window.someGuy);
    setLoading(false);
}
if (window.someGuy == null)
window.someGuy = "hi mom";
fetchPerson();
    }, []);
    return(
        <p>{window.someGuy}</p>
        
    );
}
import React, {useState, useEffect } from 'react';
import { render } from '@testing-library/react';


  
export default function Whichperson ( { data } ) {
    
console.log(data);

    const [person, setperson] = useState([]); 
    const [person1, setperson1] = useState([]); 
    const [person2, setperson2] = useState([]); 
    const [person3, setperson3] = useState([]); 
    const [person4, setperson4] = useState([]); 
    const [person5, setperson5] = useState([]); 
    const [person6, setperson6] = useState([]); 
    const [loading, setLoading] = useState(true);
  
  let holdItHere = [];
  holdItHere.push(...data);
  let lengthNumber = holdItHere.length;
  
  //console.log(lengthNumber)
  

     
      useEffect(() => {
      
      async function fetchperson( i ) {
        let url = holdItHere[i];
       let res = null;      
         res = await fetch(url);      
        let data = await res.json();
        if (i === 0)
        setperson(data.characters); 
        if (i === 1)
        setperson1(data.characters);
        if (i === 2)
        setperson2(data.characters); 
        if (i === 3)
        setperson3(data.characters);
        if (i === 4)
        setperson4(data.characters); 
        if (i === 5)
        setperson5(data.characters);
        if (i === 6)
        setperson6(data.characters);
        //console.log(data.characters)
        setLoading(false)
        
        //console.log(window.filmy[0])     
        
      }
      for ( let i = 0; i < lengthNumber; i++){
        //console.log(holdItHere[i]); 
           
      fetchperson( i );
      }
    }, [])
    return (
        <div>
        <p>{person}</p>
        <p>{person1}</p>
        <p>{person2}</p>
        <p>{person3}</p>
        <p>{person4}</p>
        <p>{person5}</p>
        <p>{person6}</p>
        </div>
      );
      
          
          

}