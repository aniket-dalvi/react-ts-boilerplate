import React, { useState } from "react";
import { useDispatch } from "react-redux";
import HomeAction from "../../store/action/HomeAction";

function Home(props) {
  const dispatch = useDispatch();
  const [text, onChangeText] = useState("");
  const handleSubmit = () => dispatch(HomeAction.addName(text));
  
  return (
    <>
    <div>
      <label>
        Name:
        <input
          type="text"
          value={text}
          onChange={(event) => onChangeText(event.target.value)}
        />
      </label>
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>

    <a onClick={() => props.history.push("screen1")}>another screen</a>
    </>
  );
}

export default Home;
