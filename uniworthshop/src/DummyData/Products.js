import MustardSweater from "../assets/Images/Products/MustardPlainHalfZipperSweater.jpg";
import NavySweater from "../assets/Images/Products/NavyGeometricHighNeckSweater.jpg";
import BrownJacket from "../assets/Images/Products/BrownPlainButton-upChoreJacket.jpg";
import FormalShirt1 from "../assets/Images/Products/FormalShirt1.jpg";
import FormalShirt2 from "../assets/Images/Products/formalshirt2.jpg";
import FormalTrouser1 from "../assets/Images/Products/FormalTrouser1.jpg";
import Suit1 from "../assets/Images/Products/suit1.jpg";
import Kurta1 from "../assets/Images/Products/KurtaPajama1.jpg";
import TrackSuit from "../assets/Images/Products/TrackSuit.jpg";
import Pajama1 from "../assets/Images/Products/pajama1.jpg";
import BlackPajamaSet from "../assets/Images/Products/BlackPlainT-shirtPajamaSetWoven.jpg";
import NavyBelt from "../assets/Images/Products/NavyPlainFormalBelt.jpg";
import LinenShirt from "../assets/Images/Products/leninShirt.jpg";
import BeigeColorBlockZipperHoodie from "../assets/Images/Products/BeigeColorBlockZipperHoodie.jpg";

const products = [
  {
    name: "WINTER COLLECTION",
    subcategories: [
      { name: "Hoodies",
        products: [
          {
          id: 100,
          name: "Beige Color Block Zipper Hoodie",
          price: 7495,
          image: BeigeColorBlockZipperHoodie,
          isSale: false,
          isNewArrival: true,
          },  
        ]
      },
      
      {
        name: "Sweaters",
        products: [
          {
            id: 1,
            name: "Mustard Plain Half Zipper Sweater",
            price: 7495,
            image: MustardSweater,
            isSale: false,
            isNewArrival: true,
          },
          {
            id: 2,
            name: "Navy Geometric High Neck Sweater",
            price: 6995,
            image: NavySweater,
            isSale: true,
            isNewArrival: false,
          },
        ],
      },
      {
        name: "Jackets",
        products: [
          {
            id: 3,
            name: "Brown Plain Button-up Chore Jacket",
            price: 11995,
            image: BrownJacket,
            isSale: false,
            isNewArrival: true,
          },
        ],
      },
    ],
  },
  {
    name: "SHIRTS",
    subcategories: [
      {
        name: "Formal Shirts",
        products: [
          {
            id: 4,
            name: "Formal Shirt",
            price: 3995,
            image: FormalShirt1,
            isSale: false,
            isNewArrival: false,
          },
          {
            id: 5,
            name: "Formal Shirt",
            price: 3795,
            image: FormalShirt2,
            isSale: true,
            isNewArrival: true,
          },
          {
            id: 57,
            name: "Formal Shirt",
            price: 3795,
            image: FormalShirt2,
            isSale: true,
            isNewArrival: true,
          },
          {
            id: 58,
            name: "Formal Shirt",
            price: 3795,
            image: FormalShirt2,
            isSale: true,
            isNewArrival: true,
          },
          {
            id: 59,
            name: "Formal Shirt",
            price: 3795,
            image: FormalShirt2,
            isSale: true,
            isNewArrival: true,
          }, {
            id: 60,
            name: "Formal Shirt",
            price: 3795,
            image: FormalShirt2,
            isSale: true,
            isNewArrival: true,
          },
          {
            id: 61,
            name: "Formal Shirt",
            price: 3795,
            image: FormalShirt2,
            isSale: true,
            isNewArrival: true,
          },
        ],
      },
    ],
  },
  {
    name: "TROUSERS",
    subcategories: [
      {
        name: "Formal",
        products: [
          {
            id: 6,
            name: "Formal Trouser",
            price: 4995,
            image: FormalTrouser1,
            isSale: false,
            isNewArrival: true,
          },
        ],
      },
    ],
  },
  {
    name: "SUITING",
    subcategories: [
      {
        name: "Two Piece Suits",
        products: [
          {
            id: 7,
            name: "Suit",
            price: 18995,
            image: Suit1,
            isSale: true,
            isNewArrival: false,
          },
        ],
      },
    ],
  },
  {
    name: "ETHNIC WEAR",
    subcategories: [
      {
        name: "Kurta Pajama",
        products: [
          {
            id: 8,
            name: "Kurta Pajama",
            price: 4995,
            image: Kurta1,
            isSale: false,
            isNewArrival: true,
          },
        ],
      },
    ],
  },
  {
    name: "ACTIVE WEAR",
    subcategories: [
      {
        name: "Tracksuits",
        products: [
          {
            id: 9,
            name: "Track Suit",
            price: 7495,
            image: TrackSuit,
            isSale: true,
            isNewArrival: false,
          },
        ],
      },
    ],
  },
  {
    name: "CASUAL PAJAMA",
    subcategories: [
      {
        name: "Cotton Pajamas",
        products: [
          {
            id: 10,
            name: "Pajama",
            price: 3495,
            image: Pajama1,
            isSale: false,
            isNewArrival: false,
          },
        ],
      },
    ],
  },
  {
    name: "LOUNGEWEAR",
    subcategories: [
      {
        name: "Sleepwear",
        products: [
          {
            id: 11,
            name: "Black Plain T-shirt Pajama Set Woven",
            price: 4195,
            image: BlackPajamaSet,
            isSale: true,
            isNewArrival: false,
          },
        ],
      },
    ],
  },
  {
    name: "ACCESSORIES",
    subcategories: [
      {
        name: "Belts",
        products: [
          {
            id: 12,
            name: "Navy Plain Formal Belt",
            price: 2495,
            image: NavyBelt,
            isSale: false,
            isNewArrival: true,
          },
        ],
      },
    ],
  },
  {
    name: "SUMMER COLLECTION",
    subcategories: [
      {
        name: "Linen Shirts",
        products: [
          {
            id: 13,
            name: "Formal Shirt",
            price: 3595,
            image: LinenShirt,
            isSale: true,
            isNewArrival: true,
          },
        ],
      },
    ],
  },
];

export default products;
