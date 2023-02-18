function Rice(props) {
    return (
        <div className="card">
            <img src={props.img} alt="rice"></img>
            <ul>
                <li> {props.name}</li>
                <li>Type : {props.type}</li>
                <li>Price : {props.price}</li>
                <li>Rating : {props.rating}</li>
            </ul>
        </div>
    );
}
export default Rice;