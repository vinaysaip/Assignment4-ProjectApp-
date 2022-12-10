const CardComponent = ({temmateDetails})=>{
    return (
        <div className="card-body">
            <img src={temmateDetails.image} className="imageClass"/>{''}
            <div className="text-class">Name: {temmateDetails.name}</div>
            <div className="text-class">Place: {temmateDetails.location}</div>
            <div className="text-class">Company: {temmateDetails.company}</div>
            <div className="text-class">Designation: {temmateDetails.designaton}</div>
        </div>
    )
}
export default CardComponent;