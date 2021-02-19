import CardItem from "../Cards/CardItem";
import { StyledContainer } from "../../styles";

const Cards = ({ cardInfo }) => {
  return (
    <div>
      <StyledContainer>
        {cardInfo.map((item) => (
          <CardItem key={item.id} item={item}></CardItem>
        ))}
      </StyledContainer>
    </div>
  );
};

export default Cards;
