import React from "react";

function Effect(props) {
  const [state, setState] = React.useState(null);
  const [resource, setResource] = React.useState("");
  const [resourceItems, setResourceItems] = React.useState([]);

  console.log("Default state of number: ", state);

  // Effect for state variable
  React.useEffect(() => {
    state == 10 || state == 0 ? alert("Alert effect on limit") : null;
    console.log("Number after useEffect hook: ", state);
  }, [state]);

  // Effect for resource variable
  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resource}`)
      // .then((res) => {console.log(res.json())})
      .then((res) => res.json())
      .then((json) => {
        console.log("This is official res: ", json);
        setResourceItems(json);
      });
  }, [resource]);

  // Event handler for JSON API
  const handlePost = () => {
    setResource("posts");
  };

  const handleUsers = () => {
    setResource("users");
  };

  const handleComments = () => {
    setResource("comments");
  };

  // Event handler to increase number
  const increaseNumber = () => {
    console.log("This is number ++ : ", state);
    setState(state + 1);
  };

  // Event handler to decrease number
  const decreaseNumber = () => {
    console.log("This is number -- : ", state);
    setState(state - 1);
  };

  // Conditions for setting alert and disabling button
  const onFirstNumber = state === 0;
  const onLastNumber = state === 10;

  return (
    <div id="number">
      <h1>Use Effect Hook</h1>
      <h2>Sample for changing state of number with some effect: {state}</h2>
      <button className="button" onClick={increaseNumber} disabled={onLastNumber}>
        {props.button1}: {state}
      </button>
      <button className="button" onClick={decreaseNumber} disabled={onFirstNumber}>
        {props.button2}: {state}
      </button>
      <br />
      <div style={{ marginTop: 10 }}>
        <h2>Fetching API's from JSON Placeholder</h2>
        <button className="button" onClick={handlePost}>
          {props.json1}
        </button>
        <button className="button" onClick={handleUsers}>
          {props.json2}
        </button>
        <button className="button" onClick={handleComments}>
          {props.json3}
        </button>

        {resourceItems.map((item) => {
          return (
            <div>
              <p>{resource} no: {item.id}</p>
              <p key={item.id}>{JSON.stringify(item)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Effect;
