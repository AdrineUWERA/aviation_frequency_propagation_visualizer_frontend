import React from "react";

const ReceiverList = ({receivers}) => { 
    const handleDelete = async (id) => {
        await fetch(`https://aviation-f-propagation-be.herokuapp.com/receivers${id}`, {
            method: "DELETE"
        }).then(res => res.json())
            .then((data) => {
                console.log(data);
                console.log("data deleted");
            },
            (error) => console.log(error))
    }
    return (
        <div className="container mt-5 mb-5 pb-5 col-lg-12" style={{ border: '3px solid green' }}>
            <h1 className="text-center mt-5 mb-5" style={{ color: 'green' }}>ALL RECEIVERS</h1>
            {receivers.map((receiver) => (
                <div className="container mt-2 mb-2 pt-2 col-lg-10 d-flex flex-row justify-content-between align-items-center" 
                style={{ border: '1px solid green' }} 
                key={receiver.id}>
                    <div className="ms-2">
                        <p>Latitude: {receiver.latitude} </p>   
                        <p>Longitude: {receiver.longitude} </p>
                        <p>Coverage: {receiver.coverage} km</p>
                    </div>
                    <div>
                        <img src="https://cdn.onlinewebfonts.com/svg/img_96165.png" 
                        className="me-3"
                        style={{ width: '20px', height: 'auto', cursor: 'pointer'}}
                        onClick={(e) => handleDelete(receiver._id)}
                        alt="Delete"></img>
                    </div>
                                   
                </div>
            ))}
        </div>
      );
}
 
export default ReceiverList;