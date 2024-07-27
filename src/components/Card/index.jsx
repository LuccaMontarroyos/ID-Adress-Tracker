import "./Card.css"
export const Card = ({ address }) => {

    return (
        <>
            {address.location && <div className="card">
                <div>
                    <h3>IP ADRESS</h3>
                    <p>{address.ip}</p>
                </div>
                <div>
                    <h3>LOCATION</h3>
                    <p>{`${address.location.region}, ${address.location.city ? address.location.city : address.location.country}`}</p>
                </div>
                <div>
                    <h3>TIMEZONE</h3>
                    <p>{`UTC ${address.location.timezone}`}</p>
                </div>
                <div>
                    <h3>ISP</h3>
                    <p>{address.isp ? address.isp : address.location.country}</p>
                </div>
            </div>
            }
        </>
    )

}