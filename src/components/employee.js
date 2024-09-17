function Employee(props) {
  return (
    <div className="min-w-[350px] max-w-[350px] m-2 py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img
        className="object-cover rounded-full h-[100px] w-[100px] block mx-auto sm:mx-0 sm:shrink-0"
        src={props.img}
        alt="Face"
      />
      <div className="text-center space-y-2.5 sm:text-left">
        <div className="space-y-0">
          <p className="text-lg text-black font-semibold">{props.name}</p>
          <p className="text-slate-500 font-medium">{props.role}</p>
        </div>
        {props.editEmployee && <>{props.editEmployee}</>}
      </div>
    </div>
  );
}

export default Employee;

/*
Components are encapsulate functionality and the logic. Theyre also able to have content or better known as html and they can have the design. This means our application is built in these self-sustained components and the different technologies are not artificially split out across different sections of the application making it easier to know what each component does and how it should look and act alone vs artificially split across the application causing confusion
*/

/*
The employee function is a template for example a cookie cutter is not a cookie but it makes cookies.. each cookie may look a bit different, be a different type, or have sprinkles but its still a cookie. Props are used in params and the arg value will come from the parent component. in our example above the parent component is responsible for the state in which the data has to be displayed and props inside of the child component should not be changed. so we should be assigning values to props. dont try to modify props!
*/

/*
useState Hook - were not supposed to change the value of the props in the child instead we will change it in the parent and thats done by using state. State allows us to keep track of values but its a little different than a variable because the state can be tied to the UI so that when the state changes the UI will automatically update
*/
