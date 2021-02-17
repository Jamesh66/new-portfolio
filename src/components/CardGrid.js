import CardItem from "./CardItem";
import { StyledContainer } from "../styles";
//Import Animation
import { fade, titleAnim } from "../Animation";

const Cards = ({ cardInfo }) => {
  return (
    <div>
      <StyledContainer>
        {cardInfo.map((item) => (
          <CardItem
            key={item.id}
            item={item}
          ></CardItem>
        ))}
      </StyledContainer>
    </div>
  );
};

export default Cards;
