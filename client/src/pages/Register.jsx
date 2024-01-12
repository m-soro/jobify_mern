import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow } from "../components";
import Logo from "../components/Logo";

const Register = () => {
  return (
    <div>
      <Wrapper>
        <form className="form">
          <Logo />
          <h4>Register</h4>
          <FormRow type="txt" name="name" defaultValue="Mark" />
          <FormRow
            type="txt"
            name="lastName"
            labelText="Last Name"
            defaultValue="Soro"
          />
          <FormRow type="txt" name="location" defaultValue="Washington, DC" />
          <FormRow
            type="email"
            name="email"
            defaultValue="marksoro1@gmail.com"
          />
          <FormRow type="password" name="password" defaultValue="secret123" />
          <button type="submit" className="btn btn-block" defaultValue="Mark">
            submit
          </button>
          <p>
            Already a member? <Link to="/login">Login</Link>
          </p>
        </form>
      </Wrapper>
    </div>
  );
};
export default Register;
