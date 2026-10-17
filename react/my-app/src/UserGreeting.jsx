function UserGreeting(props) {
    const welcomeBtn = <h2 className="welcome-btn">welcome {props.username}</h2>
    const invalidtext = <h2 className="invalid-text">Invalid user  {props.username}</h2>
    return (props.isLoggedIn ? welcomeBtn : invalidtext)
}

export default UserGreeting