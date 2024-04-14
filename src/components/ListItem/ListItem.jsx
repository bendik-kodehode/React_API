export default function ListItem({item}) {
    return (
    <div>
        <h2>{item.name}</h2>
        <p>{item.year}</p>
        <p>{item.type}</p>
    </div>
    )
}