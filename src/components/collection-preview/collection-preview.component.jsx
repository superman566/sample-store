import CollectionItem from '../collection-item/collection-item.component';
import {CollectionPreviewContainer, PreviewContainer, TitleLink} from "./collection-preview.styles";

const CollectionPreview = ({title, items}) => {
  const titlePath = title.toLowerCase();
  return (
    <CollectionPreviewContainer>
      <TitleLink to={`shop/${titlePath}`}>{title}</TitleLink>
      <PreviewContainer>
        {
          items
            .filter((item, id) => id < 4)
            .map( item => (
              <CollectionItem
                key={item.id}
                item={item}
              />
            ))
        }
      </PreviewContainer>
    </CollectionPreviewContainer>
  )
}

export default CollectionPreview;
