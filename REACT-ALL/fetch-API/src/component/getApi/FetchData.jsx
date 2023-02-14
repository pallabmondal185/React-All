import React, { useEffect, useState } from 'react';

function FetchData() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(
      (response) => response.json()
    ).then(
      (result) => {
        console.log(result);
        setData(result);
      }
    );
  }, [])
  //JSON.stringify(value, replacer, space)
  //value: The value to convert to a JSON string.
  //replacer: If replacer is null or not provided, all properties of the object are included in the resulting JSON string.
  //space: A string or number that's used to insert white space (including indentation, line break characters, etc.) into the output JSON string for readability purposes.

  return (
    <>

      <h2>fetch API example</h2>

      {/*  The <pre> tag in HTML is used to define the BLOCK OF PREFORMATTED TEXT which preserves the text spaces, line breaks, tabs, and other formatting characters which are ignored by web browsers. */}
      <h3>
        {/* The JSON.stringify() method converts a JavaScript value to a JSON string. */}
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </h3>
    </>
  )
}

export default FetchData;
