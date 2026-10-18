function Library(pros) {
    let btn = document.querySelector(".btn");
    let lib = document.querySelector(".lib");
    const libs = ['library1', 'library2', "library2"];
    btn.addEventListener('click', function () {
        for (let key of libs) {
            lib.innerHTML = key;
        }
    });

    return (

        <div>
            <h2 className="lib">Welcome to {pros.name}</h2>
            <button className="btn"> next</button>
        </div>

    );




}
export default Library;