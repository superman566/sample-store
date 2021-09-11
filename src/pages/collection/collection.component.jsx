import React from "react";
import { useParams } from "react-router-dom";

import {useSelector} from "react-redux";
import {selectCollection} from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";

import {
  CollectionPageContainer,
  ItemsContainer,
  Title
} from "./collection.styles";

const CollectionPage = () => {
  const { collectionId } = useParams();
  const collection = useSelector(selectCollection(collectionId));
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <Title>{title}</Title>
      <ItemsContainer>
        {
          items.map(item => (
            <CollectionItem
              key={item.id}
              item={item}
            />
          ))
        }
      </ItemsContainer>
    </CollectionPageContainer>
  )
};


export default CollectionPage;
