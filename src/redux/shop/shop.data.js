const SHOP_DATA = {
  flowerproducts: {
    id: 1,
    title: "flowerproducts",
    routeName: "flowerproducts",
    items: [
      {
        id: 1,
        name: "Exotica",
        imageUrl:
          "https://images.unsplash.com/photo-1570427951883-5e071c49bbcc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Zmxvd2VyJTIwYm91cXVldHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 25,
      },
      {
        id: 2,
        name: "Green Blossom",
        imageUrl:
          "https://images.unsplash.com/photo-1591892002838-165938ea94f2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGZsb3dlciUyMHByb2R1Y3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 18,
      },
      {
        id: 3,
        name: "Morning Glory",

        imageUrl:
          "https://images.unsplash.com/photo-1503278501277-e50457741130?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTF8fGZsb3dlciUyMHByb2R1Y3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 35,
      },
      {
        id: 4,
        name: "Rose Valley",

        imageUrl:
          "https://images.unsplash.com/photo-1613508636209-cd13d894e15b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGZsb3dlciUyMGJvdXF1ZXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 25,
      },
      {
        id: 5,
        name: "Blessed Stems",

        imageUrl:
          "https://images.unsplash.com/photo-1596698421048-fe7e4dc90712?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjB8fGZsb3dlciUyMHByb2R1Y3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 18,
      },
      {
        id: 6,
        name: "La Fleur",

        imageUrl:
          "https://images.unsplash.com/photo-1589233160947-98d00297b560?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8Zmxvd2VyJTIwYXJyYW5nZW1lbnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 14,
      },
      {
        id: 7,
        name: "Garden Girl",

        imageUrl:
          "https://images.unsplash.com/photo-1614908550644-0c4ab07afc55?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YmVzdCUyMGZsb3dlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 18,
      },
      {
        id: 8,
        name: "VitaPot",
        imageUrl:
          "https://images.unsplash.com/photo-1605204708367-8cdf71ed92f2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODl8fGZsb3dlciUyMHByb2R1Y3R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

        price: 14,
      },
      {
        id: 9,
        name: "Nature Bliss",
        imageUrl:
          "https://images.unsplash.com/photo-1564868405024-af2aa9752aac?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Zmxvd2VyJTIwYXJyYW5nZW1lbnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 16,
      },
    ],
  },
  crockeryproduct: {
    id: 2,
    title: "crockeryproduct",
    routeName: "crockeryproduct",
    items: [
      {
        id: 10,
        name: "Stoneware",
        imageUrl:
          "https://images.unsplash.com/photo-1605286978633-2dec93ff88a2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Y3JvY2tlcnl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 220,
      },
      {
        id: 11,
        name: "Dinnerware",

        imageUrl:
          "https://images.unsplash.com/photo-1576169895912-585a44e44be3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y3JvY2tlcnklMjBwcm9kdWN0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 280,
      },
      {
        id: 12,
        name: "Wedgwood",

        imageUrl:
          "https://images.unsplash.com/photo-1571987530791-58e3e7744d99?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        price: 110,
      },
      {
        id: 13,
        name: "Lenox",

        imageUrl:
          "https://images.unsplash.com/photo-1541839126650-eabb7764d730?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fGNyb2NrZXJ5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 160,
      },
      {
        id: 14,
        name: "Villeroy & Boch",

        imageUrl:
          "https://images.unsplash.com/photo-1595260044782-bdc2813c48c3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDF8fGNyb2NrZXJ5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 160,
      },
      {
        id: 15,
        name: " Pro dinnerware",

        imageUrl:
          "https://images.unsplash.com/photo-1501420896719-ad7fe0ee297e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDB8fGNyb2NrZXJ5fGVufDB8fDB8&auto=format&fit=crop&w=500&q=60",
        price: 1960,
      },
      {
        id: 16,
        name: "Mikasa",

        imageUrl:
          "https://images.unsplash.com/photo-1519776361698-e8f0c35533e8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzd8fGNyb2NrZXJ5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 190,
      },
      {
        id: 17,
        name: "Noritake",

        imageUrl:
          "https://images.unsplash.com/photo-1594527612221-4902cd3f1463?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzh8fGNyb2NrZXJ5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 2100,
      },
    ],
  },
  Woolproduct: {
    id: 3,
    title: "Woolproduct",
    routeName: "Woolproduct",
    items: [
      {
        id: 18,
        name: "Dangy Blanket",

        imageUrl:
          "https://images.unsplash.com/photo-1609803364908-3738b40a3bac?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8d29vbCUyMGJsYW5rZXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 125,
      },
      {
        id: 19,
        name: "WiseVibe",
        imageUrl:
          "https://images.unsplash.com/photo-1475053181767-9b735f0b1689?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8d29vbCUyMGJsYW5rZXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 90,
      },
      {
        id: 20,
        name: "wool",
        imageUrl:
          "https://images.unsplash.com/photo-1598871955547-5dedc3c49350?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fHdvb2wlMjBibGFua2V0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60ackets/grey-jean-jacket.png",
        price: 90,
      },
      {
        id: 21,
        name: "YoungCraft",

        imageUrl:
          "https://images.unsplash.com/photo-1611911813383-67769b37a149?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8d29vbCUyMHN3ZWF0ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 165,
      },
      {
        id: 22,
        name: "WeHave",
        imageUrl:
          "https://images.unsplash.com/photo-1545206085-d0e519bdcecd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fHdvb2wlMjBzd2VhdGVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 185,
      },
    ],
  },
  toys: {
    id: 4,
    title: "Street-Toys",
    routeName: "toys",
    items: [
      {
        id: 23,
        name: "Little Toys",

        imageUrl:
          "https://thumbs.dreamstime.com/b/nea-flogita-greece-august-colorful-fishing-net-beach-balls-other-beach-toys-kids-sale-street-market-colorful-fishing-127332117.jpg",
        price: 25,
      },
      {
        id: 24,
        name: "Bouncing Babies Toys",

        imageUrl:
          "https://thumbs.dreamstime.com/b/belo-horizonte-brazil-dec-ventriloquist-toys-sale-display-street-market-belo-horizonte-brazil-ventriloquist-toys-108444351.jpg",
        price: 20,
      },
      {
        id: 25,
        name: "Busy Baby Toys",

        imageUrl:
          "https://thumbs.dreamstime.com/b/miniature-toys-school-kids-walk-cross-road-bar-code-traffic-stopped-concept-children-safety-154130058.jpg",
        price: 80,
      },
      {
        id: 26,
        name: "Notch Toys",
        imageUrl:
          "https://thumbs.dreamstime.com/b/indian-cute-little-boy-picking-toys-street-shop-fair-program-india-january-indian-cute-little-boy-picking-171144024.jpg",
        price: 80,
      },
      {
        id: 27,
        name: "Tummy Time Toys",
        imageUrl:
          "https://thumbs.dreamstime.com/b/traditional-asian-handmade-toys-made-felt-fur-sold-street-market-close-up-148243465.jpg",
        price: 45,
      },
      {
        id: 28,
        name: "Little Laughs",
        imageUrl:
          "https://thumbs.dreamstime.com/b/toys-selling-street-asia-40218432.jpg",
        price: 135,
      },
      {
        id: 29,
        name: "Toy Treasures",
        imageUrl:
          "https://thumbs.dreamstime.com/b/colorful-made-china-toys-stuffs-sale-street-hanoi-vietnam-sep-chinese-known-cheap-price-65498255.jpg",
        price: 20,
      },
    ],
  },
  porcelainproduct: {
    id: 5,
    title: "Porcelain-Product",
    routeName: "porcelainproduct",
    items: [
      {
        id: 30,
        name: "Saint-Cloud porcelain",

        imageUrl:
          "https://images.unsplash.com/photo-1553519495-a6384546a328?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FpbnQlMjBwb3JjZWxhaW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 325,
      },
      {
        id: 31,
        name: "Chantilly porcelain",
        imageUrl:
          "https://images.unsplash.com/photo-1603032034197-e3654f6a7d06?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHNhaW50JTIwcG9yY2VsYWlufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 20,
      },
      {
        id: 32,
        name: "Sèvres porcelain",
        imageUrl:
          "https://images.unsplash.com/photo-1556760044-07357abca300?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDV8fHNhaW50JTIwcG9yY2VsYWlufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 25,
      },
      {
        id: 33,
        name: "Limoges porcelain",
        imageUrl:
          "https://images.unsplash.com/photo-1571064082088-ec145fc23f10?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        price: 25,
      },
      {
        id: 34,
        name: "Haviland porcelain",
        imageUrl:
          "https://images.unsplash.com/photo-1549407978-5652a7f33014?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTF8fHBvcmNlbGFpbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 40,
      },
      {
        id: 35,
        name: "Revol porcelain",
        // imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        imageUrl:
          "https://images.unsplash.com/photo-1562574480-fd97d35cee6c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8cG9yY2VsYWlufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        price: 25,
      },
    ],
  },
};

export default SHOP_DATA;
