import React from "react";
import CollectionsItem from "../collections-item/collections-item";

import "./collections-preview.scss";

const CollectionsPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...restOfItem }) => (
            <CollectionsItem key={id} {...restOfItem}></CollectionsItem>
          ))}
      </div>
    </div>
  );
};

export default CollectionsPreview;
