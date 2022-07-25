import "./CardList.scss";
import Card from "../../components/Card/Card";

const CardList = ({ cards }) => {
  const cardsJSX = cards.map((element) => (
    <Card key={element.id} item={element} />
  ));
  return <>{cardsJSX}</>;
};

export default CardList;
