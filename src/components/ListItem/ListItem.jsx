import { Link } from "react-router-dom"

export default function ListItem({item, id}) {
    return (
    <div>
        <Link to={`/details/${id}`}>
            <h2>{item.name}</h2>
        </Link>
        <p>{item?.year}</p>
    </div>
    )
}