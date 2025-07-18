export default function Row({prop}) {
    return (
        <div className="row">
            <h3>{prop.name}</h3>
            <h3>{prop.id}</h3>

            {prop.is_potentially_hazardous_asteroid && <h3 style={{color: 'red'}}>Yes</h3>}
            {!prop.is_potentially_hazardous_asteroid && <h3 style={{color: 'green'}}>No</h3>}

            {prop.is_sentry_object && <h3 style={{color: 'purple'}}>Yes</h3>}
            {!prop.is_sentry_object && <h3 style={{color: 'cornflowerblue'}}>No</h3>}
        </div>
    )
}