import "./index.css";
import Employee from "./components/Employee.js";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";

function App() {
  const [role /*variable*/, setRole /*function*/] = useState("Engineer");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Jenn",
      role: "CTO",
      img: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg",
    },
    {
      id: 2,
      name: "Garret",
      role: "Engineer",
      img: "https://images.pexels.com/photos/2834009/pexels-photo-2834009.jpeg",
    },
    {
      id: 3,
      name: "Jerry",
      role: "Engineer",
      img: "https://images.pexels.com/photos/5083017/pexels-photo-5083017.jpeg",
    },
    {
      id: 4,
      name: "Graham",
      role: "Marketing",
      img: "https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg",
    },
    {
      id: 5,
      name: "Jaime",
      role: "Marketing",
      img: "https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg",
    },
    {
      id: 6,
      name: "Nate",
      role: "Sales",
      img: "https://images.pexels.com/photos/3789888/pexels-photo-3789888.jpeg",
    },
    {
      id: 7,
      name: "Mechelle",
      role: "Sales",
      img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
    },
    {
      id: 8,
      name: "Coleman",
      role: "Engineer",
      img: "https://images.pexels.com/photos/3474629/pexels-photo-3474629.jpeg",
    },
    {
      id: 9,
      name: "Mari",
      role: "Engineer",
      img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }
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
            {employees.map((employee) => {
              const editEmployee = (
                <EditEmployee
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  updateEmployee={updateEmployee}
                />
              );
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  editEmployee={editEmployee}
                />
              );
            })}
          </div>
          <AddEmployee newEmployee={newEmployee} />
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
