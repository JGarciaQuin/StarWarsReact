import { useState } from "react";

export const UsePersonajes = () => {
  const [people, setPeople] = useState([]);

  const [Contador, setContador] = useState(1);

  const decrementar = () => {
    if (Contador <= 1) {
      setContador(1);
    } else {
      setContador(Contador - 1);
    }
  };
  const incrementar = () => {
    if (Contador < 9) {
      setContador(Contador + 1);
    } else {
      setContador(9);
    }
  };

  const getAllPersonajes = async (numberPage) => {
    try {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      await fetch(
        `https://swapi.dev/api/people/?page=${numberPage}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => setPeople(result.results))
        .catch((error) => console.log("error", error));
    } catch (error) {
      console.log(error);
    }
  };
  return {
    getAllPersonajes,
    people,
    Contador,
    incrementar,
    decrementar,
  };
};