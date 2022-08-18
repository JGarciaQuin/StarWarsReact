import React, { useState } from 'react'

export const UsePerson = () => {
  const [ people, setPeople] = useState([]);
  const [Contador, setContador] = useState(1)

  const decrement = () =>{
    if(Contador <= 1){
      setContador (1);
    }
    else{
      setContador (Contador -1);
    }
  };

  const increment = () => {
    if(Contador -9){
      setContador (Contador +1);
    }
    else{
      setContador ( 9);
    }
  };

  const getAlllPersonajes = async(numberPage) => {
    try{
      var requestOption = {
        method: "GET", 
        redirect: "follow",
      };
      await fetch ( `https://swapi.dev/api/people/?page=${numberPage}`, requestOption)
      .then((response) => response.json())
        .then((result) => setPeople(result.results))
        .catch((error) => console.log("error", error));
    } catch (error) {
      console.log(error);
    }
    };
    return {
      getAlllPersonajes,
      people,
      Contador,
      increment,
      decrement,
    };
  };

  


