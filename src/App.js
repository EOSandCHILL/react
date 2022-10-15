import "./index.css";
import Employee from "./components/employee";
import { useState } from "react";

function App() {
  const [role /*variable*/, setRole /*function*/] = useState("Engineer");
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            <Employee
              name="Jenn"
              role="CTO"
              img="https://images.pexels.com/photos/1181256/pexels-photo-1181256.jpeg?cs=srgb&dl=pexels-christina-morillo-1181256.jpg&fm=jpg"
            />
            <Employee
              name="Garret"
              role={role}
              img="https://images.pexels.com/photos/1181256/pexels-photo-1181256.jpeg?cs=srgb&dl=pexels-christina-morillo-1181256.jpg&fm=jpg"
            />
            <Employee
              name="Jerry"
              role={role}
              img="https://images.pexels.com/photos/1181256/pexels-photo-1181256.jpeg?cs=srgb&dl=pexels-christina-morillo-1181256.jpg&fm=jpg"
            />
            <Employee
              name="Graham"
              role="Marketing"
              img="https://images.pexels.com/photos/1181256/pexels-photo-1181256.jpeg?cs=srgb&dl=pexels-christina-morillo-1181256.jpg&fm=jpg"
            />
            <Employee
              name="Jaime"
              role="Marketing"
              img="https://images.pexels.com/photos/1181256/pexels-photo-1181256.jpeg?cs=srgb&dl=pexels-christina-morillo-1181256.jpg&fm=jpg"
            />
            <Employee
              name="Nate"
              role="Tech Sales"
              img="https://images.pexels.com/photos/1181256/pexels-photo-1181256.jpeg?cs=srgb&dl=pexels-christina-morillo-1181256.jpg&fm=jpg"
            />
            <Employee
              name="Mechelle"
              role="Tech Sales"
              img="https://images.pexels.com/photos/1181256/pexels-photo-1181256.jpeg?cs=srgb&dl=pexels-christina-morillo-1181256.jpg&fm=jpg"
            />
            <Employee
              name="Cole"
              role={role}
              img="https://images.pexels.com/photos/1181256/pexels-photo-1181256.jpeg?cs=srgb&dl=pexels-christina-morillo-1181256.jpg&fm=jpg"
            />
            <Employee
              name="Mari"
              role={role}
              img="https://images.pexels.com/photos/1181256/pexels-photo-1181256.jpeg?cs=srgb&dl=pexels-christina-morillo-1181256.jpg&fm=jpg"
            />
          </div>
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
