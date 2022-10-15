import "./App.css";
import Employee from "./components/employee";

function App() {
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <Employee name="Jenn" role="Systems Engineer/CTO" />
          <Employee name="Garret" role="GIS Analyst" />
          <Employee name="Jerry" role="Software Engineer" />
        </>
      ) : (
        <p>dont show the employees</p>
      )}
    </div>
  );
}

export default App;
