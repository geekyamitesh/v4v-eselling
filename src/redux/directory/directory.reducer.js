const INITIAL_STATE = {
  sections: [
    {
      title: "Flower-Product",
      imageurl:
        "https://images.unsplash.com/photo-1507345167566-6c4f6496ba86?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1055&q=80",
      id: 1,
      linkUrl: "shop/flowerproducts",
    },

    {
      title: "Crockery-Product",
      imageurl:
        "https://images.unsplash.com/photo-1596986589387-1f541e827e0f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDl8fGNlcmFtaWN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      id: 2,
      linkUrl: "shop/crockeryproduct",
    },

    {
      title: "Wool-Product",
      imageurl:
        "https://images.freeimages.com/images/small-previews/215/bonnets-and-earlaps-1339778.jpg",
      id: 3,
      linkUrl: "shop/Woolproduct",
    },

    {
      title: "Street-Toys",
      imageurl:
        "https://images.unsplash.com/photo-1542372177-002ea9732b17?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDh8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
      id: 4,
      size: "large",
      linkUrl: "shop/toys",
    },

    {
      title: "Porcelain-Product",
      imageurl:
        "https://images.unsplash.com/photo-1518719161176-290f990bf5b7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODF8fGNlcmFtaWN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      id: 5,
      size: "large",
      linkUrl: "shop/porcelainproduct",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
