import React from "react";
import styles from "./navdrop.module.css";
import { Link } from "react-router-dom";
import { Navbropdowncon } from "./Navbropdowncon";

let titles = [
  {
    image: "", title: "Cakes",
    subtitles: [
      {
        subsubtile: "Birthday Cake",
        subsubdata: [
          "1st Anniversary Cakes",
          "Truffle Cakes",
          "Chocolate Cakes",
          "Black Forest Cakes",
          "Butterscotch Cakes",
          "Pineapple Cakes",
          "Photo Cakes",
          "Designer Cakes",
          "Dry Cakes"
        ]
      },
      {
        subsubtile: "Anniversary Cakes",
        subsubdata: [
          "25th Anniversary",
          "Dry Cakes",
          "Chocolate Cakes",
          "Designer Cakes",
          "Black Forest Cakes",
          "Butterscotch Cakes",
          "Truffle Cakes",
          "Photo Cakes",
          "Pineapple Cakes",
        ]
      },
      {
        subsubtile: "Kid's Birthday Cakes",
        subsubdata: [
          "Butterscotch Cakes",
          "Black Forest Cakes",
          "Chocolate Cakes",
          "Dry Cakes",
          "Designer Cakes",
          "Pineapple Cakes",
          "Truffle Cakes",
          "Photo Cakes",
          "25th Anniversary",
        ]
      },
    ],
  },
  {
    image: "",
    title: "Kids Celebrations",
    subtitles: [
      {
        subsubtile: "Kids Birthday Decoration",
        subsubdata: [
          "Birthday Activities",
          "Naming Ceremony Decorations",
          "Themed Birthday Cakes",
          "1st Birthday Decorations",
          "Balloon Bouquets",
          "Annaprashan Decorations"
        ]
      },
      {
        subsubtile: "Welcome Baby Decorations",
        subsubdata: [
          "Birthday Activities",
          "Naming Ceremony Decorations",
          "Themed Birthday Cakes",
          "1st Birthday Decorations",
          "Balloon Bouquets",
          "Annaprashan Decorations"
        ]
      },
      {
        subsubtile: "Baby Shower Decorations",
        subsubdata: [
          "Birthday Activities",
          "Naming Ceremony Decorations",
          "Themed Birthday Cakes",
          "1st Birthday Decorations",
          "Balloon Bouquets",
          "Annaprashan Decorations"
        ]
      }
    ],
  },
  {
    image: "https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Menu/candle-light-dinner-character_15624-160-removebg-preview.png",
    title: "Candlelight Dinners",
    subtitles: [
      {
        subsubtile: "Candlelight Dinners in NCR",
        subsubdata: [
          "Private Movie &amp; Dinners",
          "Cabana Dining Experience",
          "Dining at 5 Star Properties",
          "Outdoor Candlelight Dining",
          "Poolside Candlelight Dinners",
          "Pocket Friendly Candlelight Dinners"
        ]
      },
      {
        subsubtile: "Private Candlelight Dinners",
        subsubdata: [
          "Private Movie &amp; Dinners",
          "Cabana Dining Experience",
          "Dining at 5 Star Properties",
          "Outdoor Candlelight Dining",
          "Poolside Candlelight Dinners",
          "Pocket Friendly Candlelight Dinners"
        ]
      },
      {
        subsubtile: "Lunch Specials",
        subsubdata: [
          "Private Movie &amp; Dinners",
          "Cabana Dining Experience",
          "Dining at 5 Star Properties",
          "Outdoor Candlelight Dining",
          "Poolside Candlelight Dinners",
          "Pocket Friendly Candlelight Dinners"
        ]
      },
    ],
  },
  {
    image: "https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Menu/gifts_icon_1-removebg-preview.png",
    title: "Decorations",
    subtitles: [
      {
        subsubtile: "Balloon Decorations",
        subsubdata: [
          "Birthday Decorations",
          "Naming Ceremony Decorations",
          "Car Boot Decorations",
          "1st Birthday Decorations",
          "Balloon Bouquets",
          "Annaprashan Decorations",
          "First Night Decorations",
          "Bachelorette Decorations",
          "Ganesh Chaturthi Decorations"
        ]
      },
      {
        subsubtile: "Welcome Baby Decorations",
        subsubdata: [
          "Birthday Decorations",
          "Naming Ceremony Decorations",
          "Car Boot Decorations",
          "1st Birthday Decorations",
          "Balloon Bouquets",
          "Annaprashan Decorations",
          "First Night Decorations",
          "Bachelorette Decorations",
          "Ganesh Chaturthi Decorations"
        ]
      },
      {
        subsubtile: "Baby Shower Decorations",
        subsubdata: [
          "Birthday Decorations",
          "Naming Ceremony Decorations",
          "Car Boot Decorations",
          "1st Birthday Decorations",
          "Balloon Bouquets",
          "Annaprashan Decorations",
          "First Night Decorations",
          "Bachelorette Decorations",
          "Ganesh Chaturthi Decorations"
        ]
      }
    ],
  },
  {
    image: "https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Menu/balloon_decoration-removebg-preview-1.png",
    title: "Anniversary Celebrations",
    subtitles: [
      {
        subsubtile: "Balloon Decorations",
        subsubdata: [
          "Birthday Decorations",
          "Naming Ceremony Decorations",
          "Car Boot Decorations",
          "1st Birthday Decorations",
          "Balloon Bouquets",
          "Annaprashan Decorations",
          "First Night Decorations",
          "Bachelorette Decorations",
          "Ganesh Chaturthi Decorations"
        ]
      },
      {
        subsubtile: "Welcome Baby Decorations",
        subsubdata: [
          "Birthday Decorations",
          "Naming Ceremony Decorations",
          "Car Boot Decorations",
          "1st Birthday Decorations",
          "Balloon Bouquets",
          "Annaprashan Decorations",
          "First Night Decorations",
          "Bachelorette Decorations",
          "Ganesh Chaturthi Decorations"
        ]
      },
      {
        subsubtile: "Baby Shower Decorations",
        subsubdata: [
          "Birthday Decorations",
          "Naming Ceremony Decorations",
          "Car Boot Decorations",
          "1st Birthday Decorations",
          "Balloon Bouquets",
          "Annaprashan Decorations",
          "First Night Decorations",
          "Bachelorette Decorations",
          "Ganesh Chaturthi Decorations"
        ]
      },
    ],
  },
  {
    image: "https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Menu/cake_icon_1_-_Copy-removebg-preview.png",
     title: "Birthday Surprises",
     subtitles: [
      {
        subsubtile: "Balloon Decorations",
        subsubdata: [
          "Birthday Decorations",
          "Naming Ceremony Decorations",
          "Car Boot Decorations",
          "1st Birthday Decorations",
          "Balloon Bouquets",
          "Annaprashan Decorations",
          "First Night Decorations",
          "Bachelorette Decorations",
          "Ganesh Chaturthi Decorations"
        ]
      },
      {
        subsubtile: "Welcome Baby Decorations",
        subsubdata: [
          "Birthday Decorations",
          "Naming Ceremony Decorations",
          "Car Boot Decorations",
          "1st Birthday Decorations",
          "Balloon Bouquets",
          "Annaprashan Decorations",
          "First Night Decorations",
          "Bachelorette Decorations",
          "Ganesh Chaturthi Decorations"
        ]
      },
      {
        subsubtile: "Baby Shower Decorations",
        subsubdata: [
          "Birthday Decorations",
          "Naming Ceremony Decorations",
          "Car Boot Decorations",
          "1st Birthday Decorations",
          "Balloon Bouquets",
          "Annaprashan Decorations",
          "First Night Decorations",
          "Bachelorette Decorations",
          "Ganesh Chaturthi Decorations"
        ]
      },
    ],
  },
  {
    image: "", title: "Room Decorations", 
    subtitles: [
      {
        subsubtile: "Balloon Decorations",
        subsubdata: [
          "Birthday Decorations",
          "Naming Ceremony Decorations",
          "Car Boot Decorations",
          "1st Birthday Decorations",
          "Balloon Bouquets",
          "Annaprashan Decorations",
          "First Night Decorations",
          "Bachelorette Decorations",
          "Ganesh Chaturthi Decorations"
        ]
      },
      {
        subsubtile: "Welcome Baby Decorations",
        subsubdata: [
          "Birthday Decorations",
          "Naming Ceremony Decorations",
          "Car Boot Decorations",
          "1st Birthday Decorations",
          "Balloon Bouquets",
          "Annaprashan Decorations",
          "First Night Decorations",
          "Bachelorette Decorations",
          "Ganesh Chaturthi Decorations"
        ]
      },
      {
        subsubtile: "Baby Shower Decorations",
        subsubdata: [
          "Birthday Decorations",
          "Naming Ceremony Decorations",
          "Car Boot Decorations",
          "1st Birthday Decorations",
          "Balloon Bouquets",
          "Annaprashan Decorations",
          "First Night Decorations",
          "Bachelorette Decorations",
          "Ganesh Chaturthi Decorations"
        ]
      },
    ],
  },
  {
    image: "", title: "Gifts & Surprises", 
    subtitles: [
      {
        subsubtile: "Balloon Decorations",
        subsubdata: [
          "Birthday Decorations",
          "Naming Ceremony Decorations",
          "Car Boot Decorations",
          "1st Birthday Decorations",
          "Balloon Bouquets",
          "Annaprashan Decorations",
          "First Night Decorations",
          "Bachelorette Decorations",
          "Ganesh Chaturthi Decorations"
        ]
      },
      {
        subsubtile: "Welcome Baby Decorations",
        subsubdata: [
          "Birthday Decorations",
          "Naming Ceremony Decorations",
          "Car Boot Decorations",
          "1st Birthday Decorations",
          "Balloon Bouquets",
          "Annaprashan Decorations",
          "First Night Decorations",
          "Bachelorette Decorations",
          "Ganesh Chaturthi Decorations"
        ]
      },
      {
        subsubtile: "Baby Shower Decorations",
        subsubdata: [
          "Birthday Decorations",
          "Naming Ceremony Decorations",
          "Car Boot Decorations",
          "1st Birthday Decorations",
          "Balloon Bouquets",
          "Annaprashan Decorations",
          "First Night Decorations",
          "Bachelorette Decorations",
          "Ganesh Chaturthi Decorations"
        ]
      },
    ],
  },
  {
    image: "", title: "Occasions",
    subtitles: [
      {
        subsubtile: "Balloon Decorations",
        subsubdata: [
          "Birthday Decorations",
          "Naming Ceremony Decorations",
          "Car Boot Decorations",
          "1st Birthday Decorations",
          "Balloon Bouquets",
          "Annaprashan Decorations",
          "First Night Decorations",
          "Bachelorette Decorations",
          "Ganesh Chaturthi Decorations"
        ]
      },
      {
        subsubtile: "Welcome Baby Decorations",
        subsubdata: [
          "Birthday Decorations",
          "Naming Ceremony Decorations",
          "Car Boot Decorations",
          "1st Birthday Decorations",
          "Balloon Bouquets",
          "Annaprashan Decorations",
          "First Night Decorations",
          "Bachelorette Decorations",
          "Ganesh Chaturthi Decorations"
        ]
      },
      {
        subsubtile: "Baby Shower Decorations",
        subsubdata: [
          "Birthday Decorations",
          "Naming Ceremony Decorations",
          "Car Boot Decorations",
          "1st Birthday Decorations",
          "Balloon Bouquets",
          "Annaprashan Decorations",
          "First Night Decorations",
          "Bachelorette Decorations",
          "Ganesh Chaturthi Decorations"
        ]
      },
    ],
  },
 
];

export const Navbardropdown = () => {
  return (
    <div className={styles.navdrop}>
      <div className={styles.navdropWrapper}>
        <ul className={styles.navdroplist}>
          {
            titles?.map((el,index) => (
              <li key={index}>
                <Link>
                  <div className={styles.navdropheader}>
                    <p>{el.title}</p>
                  </div>
                </Link>

                <div className={styles.navdropper}>
                  <Navbropdowncon data={el} />
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};