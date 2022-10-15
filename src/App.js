import "./index.css";
import Employee from "./components/employee";
import { useState } from "react";

function App() {
  const [role /*variable*/, setRole /*function*/] =
    useState("Software Engineer");
  const showEmployees = true;
  return (
    <div className="App bg-red-300">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <Employee name="Jenn" role={role} />
          <Employee name="Garret" role={role} />
          <Employee name="Jerry" role={role} />
        </>
      ) : (
        <p>dont show the employees</p>
      )}
    </div>
  );
}

export default App;

/*
onChange is invoked anytime we change the value
to get whats typed into the input we use e.target.value and e is passed into the function. we reassigned the variable role to e.target.value but its not updating which is why state is important. we want to use a var that is associated with the display on the webpage so we need to import state.

The nnumber 1 rule of state is NEVER ASSIGN A VALUE DIRECTLY ALWAYS GO THRU setName

use state is an example of a hook in react. hooks introduce functionality into our components very easily. when something starts with use its a good indicator that its a hook
*/
