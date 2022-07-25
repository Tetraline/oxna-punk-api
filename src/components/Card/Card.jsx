import "./Card.scss";
const Card = ({ item }) => {
  return (
    <div key={item.id} className="card">
      <img src={item.image_url} alt={item.name} />

      <h2>{item.name}</h2>
      <p>{item.abv}%</p>
      <p>First brewed: {item.first_brewed}</p>
      <p>ph level: {item.ph}</p>
      <p>{item.description}</p>
    </div>
  );
};

export default Card;
