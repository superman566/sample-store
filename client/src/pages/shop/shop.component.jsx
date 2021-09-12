import React, {useEffect} from "react";
import {Route} from "react-router-dom";
import {connect} from "react-redux";

import {ShopPageContainer} from "./shop.styles";

import CollectionsOverviewContainer from "../../components/collection-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";
import {fetchCollectionsStart} from "../../redux/shop/shop.actions";

const ShopPage = ({match,fetchCollectionsStart}) => {

  useEffect(()=>{
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <ShopPageContainer>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </ShopPageContainer>
  )
}


const mapDispatchToProps = dispatch =>({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
