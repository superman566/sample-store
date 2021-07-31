import { connect } from "react-redux";
import {addItem} from "../../redux/cart/cart.actions";

import {
  AddButton,
  CollectionFooterContainer,
  CollectionItemContainer,
  ImageContainer, NameTextContainer, PriceTextContainer
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem}) => {
  const {
    name,
    price,
    imageUrl
  } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameTextContainer>{name}</NameTextContainer>
        <PriceTextContainer>{price}</PriceTextContainer>
      </CollectionFooterContainer>
      <AddButton
        inverted
        onClick={()=> addItem(item)}
      >
        Add to Cart
      </AddButton>
    </CollectionItemContainer>
  )
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
