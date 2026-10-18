import profilePic from './assets/WhatsApp Image 2026-01-27 at 7.36.59 PM.jpeg'
function Button() {
    let img = document.querySelector(".image");
    function handleClick() {
        window.alert("he hehe he")


    };
    return (
        <img onClick={handleClick} src={profilePic} className="image" ></img >
    );
}
export default Button