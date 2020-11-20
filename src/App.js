import './App.css';
import {
  ThemeProvider,
  Editable,
  EditablePreview,
  EditableInput,
  Input,
  Button,
  ButtonGroup,
  IconButton,
  Flex
} from "@chakra-ui/core";
import React from 'react';

function App() {
  const [value, setValue] = React.useState("");
  const [abc, setAbc] = React.useState("");
  const handleChange = (event) => setValue(event.target.value);
  function onKeyDownchange(e) {
    setAbc(e);
  };
  return (
    <div className="App">
      <ThemeProvider>
        <div className="input_bot">
          <Input placeholder="Basic usage" className="input_ls" onChange={handleChange} />
          <Button colorScheme="blue" onClick={()=>onKeyDownchange(value)}>按钮</Button>
        </div>
        <h1>正在进行</h1>
        <p> 
          {abc}
        </p>
        <h1>已经完成</h1>
      </ThemeProvider>
    </div>
  );
};
export default App;

// function onKeyDownchange(e) {
//   console.log(e);
  
//   // this.defau = e;
//   // var input_ls = document.querySelectorAll(".css-ch7lyt");
//   // console.log(input_ls);
// };
