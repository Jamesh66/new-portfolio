import CardItem from "./CardItem";

const Cards = ({ cardInfo }) => {
  return (
    <div>
      <div>
        {cardInfo.map((item) => (
          <CardItem key={item.id} item={item}></CardItem>
        ))}
      </div>
    </div>
  );
};

export default Cards;
