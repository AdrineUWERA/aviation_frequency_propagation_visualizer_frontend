import { Link } from "react-router-dom";
function Header() {
    return(
        <div>
            <Link to="/login" className="login link" >Log In</Link>
            <Link to="" className="bar" >|</Link>
            <Link to="/signin" className="signup link">Sign up</Link>
        </div>
    )
}
export default Header;