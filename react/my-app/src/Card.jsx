import profilePic from './assets/WhatsApp Image 2026-01-27 at 7.36.59 PM.jpeg'

function Card() {
    return (
        <div className="card">
            <img src={profilePic} className='card-image'></img>
            <h2 className='card-title'>Dilan Sampat</h2>
            <p className='card-para'>Iam Machine learning and AI Engineer in Rootcode</p>
        </div>
    );

}
export default Card