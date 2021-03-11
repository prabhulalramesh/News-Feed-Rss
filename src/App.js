import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Channel from './components/Channel';
import './components/channel.css';

function App() {

  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()

 

  useEffect(() => {
    var url = 'https://newsapi.org/v2/everything?' +
    'q=Apple&' +
    'from=2021-03-11&' +
    'sortBy=popularity&' +
    'apiKey=0eba26f1d12d4dc9b94b46197b500036';

    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          
            const articles = [];
            const map = new Map();
            for (const item of result.articles) {
              if(!map.has(item.source.name)){
                  map.set(item.source.name, true);    // set any value to Map
                  articles.push({
                      id: item.source.id,
                      name: item.source.name
                  });
              }
            }
            console.log(articles)

          setItems(articles);
        
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);

  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
//trying to change the background color based on hover of mouse even......doubt
      return (
              <div className="App">
                {
                  items.map(item => {
                    return(
                    <Channel key={item} channel = {{id:"",title:item.name, backgroundColor:"normalColor"}}  />
                    )
                  }
                  )
                }
                </div>
      );

    }
    
 

}

export default App;
