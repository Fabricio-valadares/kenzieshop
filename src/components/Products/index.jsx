import {
  Container,
  ImageStyled,
  DescribeStyled,
  PriceStyled,
  ButtonStyled,
  DivContaineStyled,
  Card,
} from "./styled";
import { productsMock } from "../../mock";
import { addCartThunks } from "../../Store/modules/Cart/thunks";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();
  const { cartReduces } = useSelector((state) => state);

  const handleProducts = (products) => {
    dispatch(addCartThunks(products));
  };

  return (
    <Container>
      {productsMock.map((ele, index) => (
        <Card key={index}>
          <ImageStyled src={ele.image} />
          <DivContaineStyled>
            <DescribeStyled>{ele.describe}</DescribeStyled>
            <PriceStyled>R${ele.price}</PriceStyled>
          </DivContaineStyled>
          <ButtonStyled onClick={() => handleProducts(ele)}>
            Adcionar ao carrinho
          </ButtonStyled>
        </Card>
      ))}
    </Container>
  );
};

export default Products;
