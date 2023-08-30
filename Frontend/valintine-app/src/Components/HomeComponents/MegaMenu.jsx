import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
const MegaMenu = () => {
  let titles = [
    {
      image: "",
      title: "Kids Celebrations",
      subtitles: [
        "Kids Birthday Decoration",
        "Welcome Baby Decorations",
        "Baby Shower Decorations",
        "Birthday Activities",
        "Naming Ceremony Decorations",
        "Themed Birthday Cakes",
        "1st Birthday Decorations",
        "Balloon Bouquets",
        "Annaprashan Decorations",
      ],
    },
    {
        image: "https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Menu/candle-light-dinner-character_15624-160-removebg-preview.png",
      title: "Candlelight Dinner",
      subtitles: [
        "Candlelight Dinners in NCR",
        "Private Candlelight Dinners",
        "Lunch Specials",
        "Private Movie And Dinners",
        "Cabana Dining Experience",
        "Dining at 5 Star Properties",
        "Outdoor Candlelight Dining",
        "Poolside Candlelight Dinners",
        "Pocket Friendly Candlelight Dinners",
      ],
    },
    {
        image: "https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Menu/gifts_icon_1-removebg-preview.png",
      title: "Decorations",
      subtitles: [
        "Balloon Decorations",
        "Welcome Baby Decorations",
        "Baby Shower Decorations",
        "Birthday Decorations",
        "Naming Ceremony Decorations",
        "Car Boot Decorations",
        "1st Birthday Decorations",
        "Balloon Bouquets",
        "Annaprashan Decorations",
        "First Night Decorations",
        "Bachelorette Decorations",
        "Ganesh Chaturthi Decorations"
      ],
    },
    {image: "https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Menu/balloon_decoration-removebg-preview-1.png", title: "Anniversary Celebrations", subtitles: [
        "Balloon Decorations",
        "Welcome Baby Decorations",
        "Baby Shower Decorations",
        "Birthday Decorations",
        "Naming Ceremony Decorations",
        "Car Boot Decorations",
        "1st Birthday Decorations",
        "Balloon Bouquets",
        "Annaprashan Decorations",
        "First Night Decorations",
        "Bachelorette Decorations",
        "Ganesh Chaturthi Decorations"
      ],},
    { image:"https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Menu/cake_icon_1_-_Copy-removebg-preview.png",title: "Birthday Surprises" ,subtitles: [
        "Balloon Decorations",
        "Welcome Baby Decorations",
        "Baby Shower Decorations",
        "Birthday Decorations",
        "Naming Ceremony Decorations",
        "Car Boot Decorations",
        "1st Birthday Decorations",
        "Balloon Bouquets",
        "Annaprashan Decorations",
        "First Night Decorations",
        "Bachelorette Decorations",
        "Ganesh Chaturthi Decorations"
      ],},
    { image: "",title: "Room Decorations" ,subtitles: [
        "Balloon Decorations",
        "Welcome Baby Decorations",
        "Baby Shower Decorations",
        "Birthday Decorations",
        "Naming Ceremony Decorations",
        "Car Boot Decorations",
        "1st Birthday Decorations",
        "Balloon Bouquets",
        "Annaprashan Decorations",
        "First Night Decorations",
        "Bachelorette Decorations",
        "Ganesh Chaturthi Decorations"
      ],},
    { image: "",title: "Gifts And Surprises",subtitles: [
        "Balloon Decorations",
        "Welcome Baby Decorations",
        "Baby Shower Decorations",
        "Birthday Decorations",
        "Naming Ceremony Decorations",
        "Car Boot Decorations",
        "1st Birthday Decorations",
        "Balloon Bouquets",
        "Annaprashan Decorations",
        "First Night Decorations",
        "Bachelorette Decorations",
        "Ganesh Chaturthi Decorations"
      ], },
    { image: "",title: "Occasions",subtitles: [
        "Balloon Decorations",
        "Welcome Baby Decorations",
        "Baby Shower Decorations",
        "Birthday Decorations",
        "Naming Ceremony Decorations",
        "Car Boot Decorations",
        "1st Birthday Decorations",
        "Balloon Bouquets",
        "Annaprashan Decorations",
        "First Night Decorations",
        "Bachelorette Decorations",
        "Ganesh Chaturthi Decorations"
      ], },
  ];
 
  return (
    <Accordion allowMultiple>
      {titles.map((el) => {
        return (
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    {el.title}
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>

                <AccordionPanel pb={4}>
                  <ul>
                    <Link href="/products?category=decoration">
                      {el?.subtitles?.map((el) => {
                        return (
                          <>
                            <li>
                              <p>{el}</p>
                            </li>
                            <hr />
                          </>
                        );
                      })}
                    </Link>
                  </ul>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default MegaMenu;
