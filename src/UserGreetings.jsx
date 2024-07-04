import propTypes from 'prop-types';

// function UserGreetings(props) {
//     if (props.isLoggedIn) {
//         return <h2>Welcome {props.username}</h2>
//     }

//     return <h2>Please log in to continue.</h2>
// }

function UserGreetings(props) {

    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>
    const loginPrompt = <h2 className="login-prompt">Please log in to continue, {props.username}</h2>

    return (props.isLoggedIn ? welcomeMessage : loginPrompt);

}
UserGreetings.proptypes = {
    isLoggedIn: propTypes.bool,
    username: propTypes.string,
}

UserGreetings.defaultProps = {
    isLoggedIn: false,
    username: "Dull Boo"
}
export default UserGreetings;