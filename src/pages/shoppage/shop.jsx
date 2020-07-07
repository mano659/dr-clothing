import React from "react";
import CollectionsPreview from "../../components/collections-preview/collections-preview";

import SHOP_DATA from "./shopData";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-data">
        {collections.map((collection) => (
          <CollectionsPreview
            key={collection.id}
            title={collection.title}
            items={collection.items}
          ></CollectionsPreview>
        ))}
      </div>
    );
  }
}

export default ShopPage;
