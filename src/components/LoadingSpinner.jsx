import '../App.css'

export default function LoadingSpinner({ message = "Chargement..." }) {
    return (
        <div className="spinner-wrap">
            <div className="spinner-bars">
                <div className="spinner-bar"></div>
                <div className="spinner-bar"></div>
                <div className="spinner-bar"></div>
                <div className="spinner-bar"></div>
                <div className="spinner-bar"></div>
            </div>
            <p className="spinner-label">{message}</p>
        </div>
    )
}