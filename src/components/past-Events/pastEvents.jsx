import "./pastEvents.css";

function PastEvents({past}) {
    return (
        <div ref={past} className="past-events">
            <h2 className="past-event__heading">Our past events</h2>
            <div className="img-container">
                <div>
                <iframe style={{borderRadius: "21.92px"}} width="560" height="315" src="https://www.youtube.com/embed/4G4qBrDOJ48?si=L6XMHkgQqNxMtrNq" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <p>January Edition 2023</p>
                </div>
                <div>
                <iframe style={{borderRadius: "21.92px"}} width="560" height="315" src="https://www.youtube.com/embed/cy2YtxdAHCU?si=KdUqK7k326BhEHel" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <p>December Edition 2023</p>
                </div>
            </div>
        </div>
    )
}

export default PastEvents;