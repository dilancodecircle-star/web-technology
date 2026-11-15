function Button() {
    let count = 0;
    const click = (name) => {
        if (count < 3) {
            count++;
            console.log(`${name} you clicked me ${count}`);
        } else {
            console.log(`${name} stop clicking me`);
        };
    }

    const handleClick = (e) => e.target.textContent = "pkayo";

    return (
        <button onClick={(e) => handleClick(e)}>click me</button>
    );
}
export default Button;