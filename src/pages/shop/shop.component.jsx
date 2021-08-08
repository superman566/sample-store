import React from "react";
import {Route} from "react-router-dom";

import CollectionsOverview from "../../components/collection-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

import {ShopPageContainer} from "./shop.styles";

const ShopPage = ({match}) => {
  return (
    <ShopPageContainer>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </ShopPageContainer>
  )
};

export default ShopPage;
