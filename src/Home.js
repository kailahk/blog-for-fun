export default function Home() {
    return(
        <div className="home">
            <h6>Your lucky number is: {Math.floor(Math.random() * (100 - 1 + 1) + 1)}</h6>
        </div>
    )
}