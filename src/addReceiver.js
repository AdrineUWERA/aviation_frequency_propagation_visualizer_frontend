import React, { useState } from "react"; 

function AddReceiver() {
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    const [coverage, setCoverage] = useState(); 

    const handleSubmit = async(e) => {
        e.preventDefault();
        const receiver = { latitude, longitude, coverage };
        console.log(receiver); 
        await fetch("http://localhost:5000/receivers", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(receiver)
        }).then(res => res.json())
            .then((data) => {
                console.log(data)
                alert('Receiver added!'); 
            },
            (error) => console.log(error))
    }

    return(
        <div className="container mt-5 mb-5 col-lg-5" style={{ border: '3px solid green' }}>
            <h1 className="text-center mt-5 mb-3" style={{ color: 'green' }}>ADD RECEIVER</h1>
            <div className="row justify-content-center my-5 me-2 ms-2"> 
                <form>
                    <div className="form-group">
                        <label for="latitude" className="text-left mb-3">Latitude:</label>
                        <input type="number"
                            className="form-control mb-3"
                            id="latitude"
                            placeholder="Latitude"
                            value={latitude}
                            onChange={(e) => setLatitude(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label for="longitude" className="mb-3">Longitude:</label>
                        <input
                            type="number"
                            className="form-control mb-3"
                            id="longitude"
                            value={longitude}
                            placeholder="Longitude"
                            onChange={(e) => setLongitude(e.target.value)} required />
                    </div> 
                    <div className="form-group">
                        <label for="coverage" className="mb-3">Coverage:</label>
                        <input
                            type="number"
                            className="form-control mb-3"
                            id="coverage"
                            value={coverage}
                            placeholder="Coverage"
                            onChange={(e) => setCoverage(e.target.value)} required />
                    </div> 
                    
                    <button type="submit" className="btn col-md-12 mt-4 mb-5" style={{ backgroundColor: 'green', color: '#fff' }} onClick={handleSubmit}>Add</button>
                </form>
            </div>
        </div>
    )
}


export default AddReceiver;