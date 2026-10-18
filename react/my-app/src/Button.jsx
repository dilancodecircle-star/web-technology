import profilePic from './assets/WhatsApp Image 2026-01-27 at 7.36.59 PM.jpeg'
function Button() {
    function handleClick() {
        window.alert("lassanayi da");
    };
    return (
        <img onClick={handleClick} src={profilePic} className="image" ></img >
    );
}
export default Button