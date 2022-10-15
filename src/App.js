import "./App.css";
import Employee from "./components/employee";

function App() {
  console.log("we are about to list the employees");
  const showEmployees = false;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <Employee />
          <Employee />
          <Employee />
          <Employee />
          <Employee />
        </>
      ) : (
        <p>dont show the employees</p>
      )}
    </div>
  );
}

export default App;
