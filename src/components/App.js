// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [image, setImage] = useState();
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        //   console.log(data);
    setImage(data.message)
    setIsLoaded(true)
});
  }, []);
  // use an empty dependencies array, so we only run the fetch request ONCE
  if (!isLoaded) return <p>Loading...</p>;

  return <div> <img src={image} alt="A Random Dog" /> </div>;
}

export default App;