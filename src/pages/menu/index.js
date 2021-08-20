import React, { useState } from "react";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import Hero from "./Hero";
import MenuSectionCard from "./MenuSectionCard";

const menu = {
  drinks: {
    bestsellers: [],
    sections: [
      {
        heading: "CHAI NASHTA",
        sub_heading: "(7:30 AM TO 12:30 PM)",
        image: "/assets/images/VadaPav.jpg",
        items: [
          {
            heading: "Masala Chai - 20",
            sub_heading: "(Classic/Tulsi/Adrak/Elaichi)",
            description:
              "A blend of traditional CTC (milk tea) and 20 herbs and spices that make routine milk chai very tasty. Add your herbal addons.",
            price: 39,
          },
          {
            heading: "Immunity Booster Tea",
            sub_heading: "",
            description:
              "Green Tea, Amla, Tulsi, Giloy, Cinnamon, Ginger, Mint, Fennel, Black Pepper, Turmeric, Ashwagandha",
            price: 129,
          },
          {
            heading: "Metabolism Tea",
            sub_heading: "",
            description:
              "Green Tea, Triphala, Mint, Licorice, Bay Leaf, Cinnamon, Rose Petals and Lemongrass",
            price: 129,
          },
          {
            heading: "SlimDetox Energy Tea",
            sub_heading: "",
            description:
              "Oolong tea, Green tea, Mint, Cinnamon, Licorice, Rooibos, Tulsi, Ginger, Jasmine, Moringa, Gymnema Sylvester, Turmeric, Ashwgandha, Fennel, Lemongrass, Pipli, Cardamom",
            price: 129,
          },
          {
            heading: "Maharaja Breakfast Tea/Green Tea/Black Tea",
            sub_heading: "",
            description:
              "Darjeeling and Asam Black Teas, Whole Leaf, Use 2 times, Second Flush, Only bud and two leaves,",
            price: 69,
          },
          {
            heading: "Kashmiri Kahwa Green Tea",
            sub_heading: "",
            description:
              "Assam Green Tea, Almond, Cinnamon, Ginger, Clove, Cardamom",
            price: 149,
          },
          {
            heading: "Turmeric Citrus Spice Herbal Tea",
            sub_heading: "",
            description: "Turmeric, Lemon Peel, Ginger, Lemongrass",
            price: 149,
          },
        ],
      },
      {
        heading: "SMOOTHIES",
        sub_heading: "(ALL DAY)",
        image: "/assets/images/VadaPav.jpg",
        items: [
          {
            heading: "Spicy Kahwa Green Tea",
            sub_heading: "",
            description:
              "Kahwa Tea is a combination of delicious taste, aroma and a bundle of health benefits. Health Benefits ranges from improving digestion, burning fat, building immunity, Stress buster and improving skin health.",
            price: 149,
          },
          {
            heading: "Peach Black Tea",
            sub_heading: "",
            description:
              "Choice black teas are blended with the natural flavor of fresh, ripe peaches for a fragrant aroma and a delicately sweet, juicy taste.",
            price: 149,
          },
          {
            heading: "Rose Love Green Tea",
            sub_heading: "",
            description:
              "Rose tea keeps you away from illnesses and makes your immunity strong. As it is enriched with vitamin C, rose tea helps you fight against various infections.",
            price: 149,
          },
          {
            heading: "Jasmine Green Tea",
            sub_heading: "",
            description:
              "Jasmine Flower's sweet smell has numerous aromatherapeutic benef its to the nervous system, including lifting mood and inducing a calm, relaxed state",
            price: 149,
          },
          {
            heading: "Kala Khatta Black Tea",
            sub_heading: "",
            description:
              "Nostalgic Kala khatta its sweet, tangy, pretty and ice-cold- it's the perfect drink for onset of summer.",
            price: 149,
          },
          {
            heading: "Bubble Gum Black Tea",
            sub_heading: "",
            description:
              "Our Bubble Gum Black Tea isa tasty flavored Black tea with Chicle Bubble Gum.The unique Bubble Gum taste is delicious!",
            price: 149,
          },
          {
            heading: "Lemon Ginger Black Tea",
            sub_heading: "",
            description:
              "A soothing, multi-layered blend enlivened with the tingle of ginger. A fruity, bright cup with a sweet lingering aftertaste.",
            price: 149,
          },
        ],
      },
      {
        heading: "ALL TIME FAVOURITE",
        sub_heading: "",
        image: "/assets/images/VadaPav.jpg",
        items: [
          {
            heading: "Classic Boba Tea",
            sub_heading: "",
            description:
              "The most popular cold boba black tea with Milk and honey topping with Tapioca pearls. Iconic!",
            price: 179,
          },
          {
            heading: "Peanut Butter Boba Tea",
            sub_heading: "",
            description:
              "Healthy cold boba black tea ,using- peanut butter,milk with chocolate and honey topping with tapioca pearls",
            price: 199,
          },
          {
            heading: "Watermelon Strawberry Boba Tea",
            sub_heading: "",
            description:
              "Healthy cold creamy tea with strawberry and watermelon flavour with honey topping with tapioca pearlse",
            price: 199,
          },
          {
            heading: "Ginger Cardamom Boba Tea",
            sub_heading: "",
            description:
              "Healthy cold black tea, using fresh cardamom, ginger with honey vwith Tapioca pearls",
            price: 199,
          },
          {
            heading: "Coconut Vanilla Boba Tea",
            sub_heading: "",
            description:
              "Healthy cold black tea with coconut & vanilla flavor with honey topping with Tapioca pearls.",
            price: 199,
          },
          {
            heading: "Rose Boba Tea",
            sub_heading: "",
            description:
              "Healthy cold black tea with fresh rose petals with honey topping with Tapioca pearls.",
            price: 149,
          },
          {
            heading: "Litchi Coconut Boba Tea",
            sub_heading: "",
            description:
              "Healthy cold black tea with fresh Litchi and coconut flavour with honey topping with Tapioca pearls.",
            price: 149,
          },
        ],
      },
      {
        heading: "MINI NAAN PIZZA",
        sub_heading: "(11 AM ONWARDS)",
        image: "/assets/images/VadaPav.jpg",
        items: [
          {
            heading: "Boba Mango Ginger Juice",
            sub_heading: "",
            description: "",
            price: 179,
          },
          {
            heading: "Boba Pineapple Juice",
            sub_heading: "",
            description: "",
            price: 199,
          },
          {
            heading: "Boba Jamun Juice",
            sub_heading: "",
            description: "",
            price: 199,
          },
          {
            heading: "Boba Litchi Juice",
            sub_heading: "",
            description: "",
            price: 199,
          },
          {
            heading: "Boba Watermelon Juice",
            sub_heading: "",
            description: "",
            price: 199,
          },
        ],
      },
      {
        heading: "SPECIAL CHAI PAKODAS",
        sub_heading: "",
        image: "/assets/images/VadaPav.jpg",
        items: [
          {
            heading: "Saffron Thai Red Tea Latte",
            sub_heading: "",
            description:
              "TSweet, creamy, and aromatic, Thai Red Tea looks beautiful, with the gentle marbling from non dairy creamer in this bright orange tea. It's iconic. We addeda hint of our inhouse Saffron syrup to get to the palate of Indian customer.",
            price: 179,
          },
          {
            heading: "Ice Turmeric Latte",
            sub_heading: "",
            description:
              "Golden Latte as they call it, It's colorful, versatile, healthy, and distinctive to the palate. We love it. Turmeric is known for its digestive and anti- inflammatory properties.",
            price: 199,
          },
          {
            heading: "Strawberry Jasmine Tea Fresco",
            sub_heading: "",
            description:
              "This is an ideal early summer drink. It's floral and light and market-fresh.",
            price: 199,
          },
          {
            heading: "Matcha Mojito",
            sub_heading: "",
            description:
              "The gorgeous match mojito is verdant, earthy and fun twist. Full of antioxidents.",
            price: 199,
          },
          {
            heading: "Avocado Smoothie",
            sub_heading: "",
            description:
              "Avocado Smoothie is delicious, creamny and healthy breakfast or snack drink. It is full of vitamins and minerals.",
            price: 199,
          },
          {
            heading: "Black Sesame Latte",
            sub_heading: "",
            description:
              "HIts interplay between of sesame seeds and almond milk to make it a nutty drink. It has anti aging powers, lowers cholesterol and boost maximum calcium.",
            price: 149,
          },
          {
            heading: "lced Matcha Latte",
            sub_heading: "",
            description:
              "The Grassiness and the umami of the tea with the creaminess of the milk and yes, the colour- all makes it a",
            price: 149,
          },
        ],
      },
      {
        heading: "CHAAT AUR CHARCHA",
        sub_heading: "",
        image: "/assets/images/VadaPav.jpg",
        items: [
          {
            heading: "Coffee Tea Mint Mojito",
            sub_heading: "",
            description:
              "Mint Mojito, a creamy coffee with mint. A Drink from the future.",
            price: 179,
          },
          {
            heading: "Vietnamese lced Coffee",
            sub_heading: "",
            description:
              "Vietnam is known for its sweet, strong coffee drinks. No Asian drink list is complete without the iconic Vietnemese lced Coffee.",
            price: 199,
          },
          {
            heading: "Vietnamese Egg Coffee",
            sub_heading: "",
            description:
              "We take the rich element of the soda-the combination of condensed milk and egg yolk-and refashion it as a topping for a hot Vietnamese coffee.",
            price: 199,
          },
          {
            heading: "Filter Coffee",
            sub_heading: "",
            description: "Regular Coffee",
            price: 199,
          },
        ],
      },
      {
        heading: "SAMOSA",
        sub_heading: "",
        image: "/assets/images/VadaPav.jpg",
        items: [
          {
            heading: "Ginger Lemonade",
            sub_heading: "",
            description:
              "A refreshing lemornade with fresh muddled ginger. It helps in strengthing the digestive system.",
            price: 179,
          },
          {
            heading: "Cucumber and Mint Lemonade",
            sub_heading: "",
            description:
              "Fresh cucumber and mint muddled with create a refreshing lemonade",
            price: 199,
          },
          {
            heading: "Strawberry Lemonade",
            sub_heading: "",
            description:
              "A refreshing and fruity strawberry flavoured summer lemonade.",
            price: 199,
          },
          {
            heading: "Mango Milkshake",
            sub_heading: "",
            description: "Alphonso Mango blended with milk to beat the heat.",
            price: 199,
          },
          {
            heading: "Cold Coffee/Mocha Coffee/Bon Bon Coffee",
            sub_heading: "",
            description:
              "Cold Brew Arabica Coffee with vanilla Frappe for all coffee lovers.",
            price: 199,
          },
        ],
      },
      {
        heading: "BOWL MEALS",
        sub_heading: "",
        image: "/assets/images/VadaPav.jpg",
        items: [
          {
            heading: "Tapioca Pearls",
            sub_heading: "",
            description: "",
            price: 179,
          },
          {
            heading: "Fruit Jelly (Strawberry/Mango/Litchi/coconut)",
            sub_heading: "",
            description: "",
            price: 199,
          },
          {
            heading: "Coffee Jelly",
            sub_heading: "",
            description: "",
            price: 199,
          },
          {
            heading: "Brown Sugar Jelly",
            sub_heading: "",
            description: "",
            price: 199,
          },
          {
            heading: "Rainbow Jelly (Assorted)",
            sub_heading: "",
            description: "",
            price: 199,
          },
          {
            heading: "Popping Boba (Orange/Green Apple)",
            sub_heading: "",
            description: "",
            price: 199,
          },
        ],
      },
      {
        heading: "MOMOS",
        sub_heading: "",
        image: "/assets/images/VadaPav.jpg",
        items: [
          {
            heading: "Tapioca Pearls",
            sub_heading: "",
            description: "",
            price: 179,
          },
          {
            heading: "Fruit Jelly (Strawberry/Mango/Litchi/coconut)",
            sub_heading: "",
            description: "",
            price: 199,
          },
          {
            heading: "Coffee Jelly",
            sub_heading: "",
            description: "",
            price: 199,
          },
          {
            heading: "Brown Sugar Jelly",
            sub_heading: "",
            description: "",
            price: 199,
          },
          {
            heading: "Rainbow Jelly (Assorted)",
            sub_heading: "",
            description: "",
            price: 199,
          },
          {
            heading: "Popping Boba (Orange/Green Apple)",
            sub_heading: "",
            description: "",
            price: 199,
          },
        ],
      },
      {
        heading: "COMBO",
        sub_heading: "(ADD CHAI AT INR 29)",
        image: "/assets/images/VadaPav.jpg",
        items: [
          {
            heading: "Tapioca Pearls",
            sub_heading: "",
            description: "",
            price: 179,
          },
          {
            heading: "Fruit Jelly (Strawberry/Mango/Litchi/coconut)",
            sub_heading: "",
            description: "",
            price: 199,
          },
          {
            heading: "Coffee Jelly",
            sub_heading: "",
            description: "",
            price: 199,
          },
          {
            heading: "Brown Sugar Jelly",
            sub_heading: "",
            description: "",
            price: 199,
          },
          {
            heading: "Rainbow Jelly (Assorted)",
            sub_heading: "",
            description: "",
            price: 199,
          },
          {
            heading: "Popping Boba (Orange/Green Apple)",
            sub_heading: "",
            description: "",
            price: 199,
          },
        ],
      },
    ],
  },
  food: {
    bestsellers: [],
    sections: [
      {
        heading: "",
        sub_heading: "",
        image: "/assets/images/VadaPav.jpg",
        items: [
          {
            heading: "",
            sub_heading: "",
            description: "",
            price: 0,
          },
        ],
      },
      {
        heading: "",
        sub_heading: "",
        image: "/assets/images/VadaPav.jpg",
        items: [
          {
            heading: "",
            sub_heading: "",
            description: "",
            price: 0,
          },
        ],
      },
      {
        heading: "",
        sub_heading: "",
        image: "/assets/images/VadaPav.jpg",
        items: [
          {
            heading: "",
            sub_heading: "",
            description: "",
            price: 0,
          },
        ],
      },
      {
        heading: "",
        sub_heading: "",
        image: "/assets/images/VadaPav.jpg",
        items: [
          {
            heading: "",
            sub_heading: "",
            description: "",
            price: 0,
          },
        ],
      },
      {
        heading: "",
        sub_heading: "",
        image: "/assets/images/VadaPav.jpg",
        items: [
          {
            heading: "",
            sub_heading: "",
            description: "",
            price: 0,
          },
        ],
      },
      {
        heading: "",
        sub_heading: "",
        image: "/assets/images/VadaPav.jpg",
        items: [
          {
            heading: "",
            sub_heading: "",
            description: "",
            price: 0,
          },
        ],
      },
      {
        heading: "",
        sub_heading: "",
        image: "/assets/images/VadaPav.jpg",
        items: [
          {
            heading: "",
            sub_heading: "",
            description: "",
            price: 0,
          },
        ],
      },
      {
        heading: "",
        sub_heading: "",
        image: "/assets/images/VadaPav.jpg",
        items: [
          {
            heading: "",
            sub_heading: "",
            description: "",
            price: 0,
          },
        ],
      },
    ],
  },
};

function Menu() {
  // const a = new Wor
  const [type, setType] = useState("drinks");
  return (
    <div
      className="bg-blend-lighten bg-opacity-80 bg-primary-q flex flex-col min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url(/assets/graphics/Background.svg)`,
      }}
    >
      <Header />

      <main className="flex-grow">
        <Hero />
        <div className="flex gap-16 justify-center my-16">
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                setType("drinks");
              }}
              className={`${
                type === "drinks" ? "text-primary-u" : " text-primary-r"
              } text-4xl font-semibold`}
            >
              Beverage Menu
            </button>
          </div>
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                setType("food");
              }}
              className={`${
                type === "food" ? "text-primary-u" : " text-primary-r"
              } text-4xl font-semibold`}
            >
              Food Menu
            </button>
          </div>
        </div>
        <div className="flex flex-col max-w-screen-2xl mx-auto my-16 gap-12">
          {menu.drinks.sections.map((section) => {
            return <MenuSectionCard {...section} />;
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Menu;
