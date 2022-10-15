function Employee(props) {
  return (
    <>
      <h3>Employee {props.name}</h3>
      <p>{props.role ? props.role : "no role"}</p>
    </>
  );
}
export default Employee;

/*
Components are encapsulate functionality and the logic. Theyre also able to have content or better known as html and they can have the design. This means our application is built in these self-sustained components and the different technologies are not artificially split out across different sections of the application making it easier to know what each component does and how it should look and act alone vs artificially split across the application causing confusion
*/

/*
The employee function is a template for example a cookie cutter is not a cookie but it makes cookies.. each cookie may look a bit different, be a different type, or have sprinkles but its still a cookie. Props are used in params and the arg value will come from the parent component. in our example above the parent component is responsible for the state in which the data has to be displayed and props inside of the child component should not be changed. so we should be assigning values to props. dont try to modify props!
*/
