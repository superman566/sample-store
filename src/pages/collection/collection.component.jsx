import React from "react";
import './collection.styles.scss';
import {connect} from "react-redux";
import {selectCollection} from "../../redux/shop/shop.selectors";

const CollectionPage = ({collection}) => {
  console.log('CategoryPage', collection);
  return (
    <div className={'collection-page'}>
      <h2>Category page</h2>

    </div>
  )
};

const mapStateToProps = (state, ownProps) => {
  return ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
  })
};

export default connect(mapStateToProps)(CollectionPage);
