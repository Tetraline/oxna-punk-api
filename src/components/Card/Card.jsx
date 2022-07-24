import "./Card.scss";
const Card = ({ item }) => {
  return (
    <div key={item.id} className="card">
      <img src={item.image_url} alt={item.name} />

      <h2>{item.name}</h2>
      <p>{item.abv}%</p>
      <p>{item.description}</p>
    </div>
  );
};

export default Card;
