import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const countries = [
  { name: "Jamaica", icon: "flag:jm-4x3", value: "JM" },
  { name: "Trinidad & Tobago", icon: "flag:tt-4x3", value: "TT" },
  { name: "Belize", icon: "flag:bz-4x3", value: "BZ" },
  { name: "Barbados", icon: "flag:bb-4x3", value: "BB" },
  { name: "Grenada", icon: "flag:gd-4x3", value: "GD" },
  { name: "St. Lucia", icon: "flag:lc-4x3", value: "LC" },
  { name: "St. Vincent & the Grenadines", icon: "flag:vc-4x3", value: "VC" },
  { name: "Dominica", icon: "flag:dm-4x3", value: "DM" },
  { name: "St. Kitts & Nevis", icon: "flag:kn-4x3", value: "KN" },
  { name: "Antigua & Barbuda", icon: "flag:ag-4x3", value: "AG" },
  { name: "Bahamas", icon: "flag:bs-4x3", value: "BS" },
];

const topics = [
  { name: "Business", icon: "ph:buildings", value: "business" },
  { name: "Music", icon: "ph:music-note", value: "music" },
  { name: "Beaches", icon: "ph:waves", value: "beach" },
  { name: "Food", icon: "ph:bowl-food", value: "food" },
  { name: "Sports", icon: "ph:football", value: "sports" },
  { name: "Culture", icon: "ph:book-open", value: "culture" },
  { name: "Nature", icon: "ph:tree", value: "nature" },
  { name: "History", icon: "ph:book-open", value: "history" },
  { name: "Nightlife", icon: "ph:martini", value: "nightlife" },
  { name: "Shopping", icon: "ph:shopping-bag", value: "shopping" },
  { name: "Adventure", icon: "ph:mountains", value: "adventure" },
  { name: "Relaxation", icon: "ph:umbrella", value: "relaxation" },
  { name: "Romance", icon: "ph:heart", value: "romance" },
  { name: "Family", icon: "ph:users", value: "family" },
];

// entities
const entities = [
   // Rums

  {
    type: "Information",
    title: "Havana Club",
    description: "Havana Club is a renowned Cuban rum with a rich history and smooth, well-balanced flavors. Its range includes Añejo 3 Años, Añejo 7 Años, and Selección de Maestros, often used in classic cocktails like the Mojito and the Cuba Libre.",
    media: ["https://www.pernod-ricard.com/sites/default/files/styles/brand_tile_3_in_row_desktop_958x1048_/public/2021-06/HC_3_0.jpg?h=deb634c4&itok=3XNmJ5-U"],
    topics: ["Rum"],
    countries: ["Cuba"],
    location: "", // if experience
    price: "", // if NOT information
    whatsapp: "", // if not information
  },

  {
    type: "Information",
    title: "Mount Gay",
    description: "Mount Gay, originating in Barbados, is the world's oldest rum distillery, dating back to 1703. The brand offers a variety of rums, such as Eclipse, Extra Old (XO), and 1703 Master Select, known for their rich, full-bodied taste with hints of caramel, vanilla, and spice.",
    media: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5LcYC0mU64DLPI0Mcvddb3POIOBsji1bodA&usqp=CAU"],
    topics: ["Rum"],
    countries: ["Barbados"],
    location: "", // if experience
    price: "", // if NOT information
    whatsapp: "", // if not information
  },

  {
    type: "Information",
    title: "Appleton Estate",
    description: "Appleton Estate, a Jamaican rum distillery since 1749, is celebrated for its complex flavors, often featuring notes of tropical fruits, spices, and oak. The range includes Signature Blend, Reserve Blend, Rare Blend 12 Year Old, and the limited-edition Joy Anniversary Blend.",
    media: ["https://excursionsinjamaica.com/wp-content/uploads/2021/06/Appleton.png"],
    topics: ["Rum"],
    countries: ["Jamaica"],
    location: "", // if experience
    price: "", // if NOT information
    whatsapp: "", // if not information
  },

  {
    type: "Experience",
    title: "Appleton Estate Rum Tour",
    price: "20",
    description: "Visit the original landscape and buildings where it all began, back in 1703. Our Historic Distillery Tours take you through our fully-operational rum making headquarters. Steeped in over 300 years of heritage and expertise, the experiences are tales to be told forever and a rum-lover’s paradise. This is the heart of Mount Gay. This is more than a rum.",
    whatsapp: "8764482237",
    media: ["https://chukka.com/wp-content/uploads/2021/09/Molasses-6.jpg"],
    topics: ["Beach"],
    countries: ["Jamaica", "Barbadoes", "Cuba"],
  },

  {
    type: "Experience",
    title: "MOUNT GAY MASTERCLASS AND COCKTAIL WORKSHOP",
    price: "110",
    description: "Immerse yourself into our heritage, craftmanship and terroir. You will be guided through an in-depth tasting session with our Rum Experts, followed by an interactive Cocktail session lead by an Award Winning Mixologist. Get all the tips, tricks, techniques and recipes as we shake, stir and muddle!",
    whatsapp: "12462278862",
    media: ["https://www.mountgayrum.com/wp-content/uploads/PHOTO-2022-08-23-19-21-13.jpg"],
    topics: ["Beach"],
    countries: ["Jamaica", "Barbadoes", "Cuba"],
  },

  {
    type: "Product",
    title: "Caribbean Rum Haven",
    price: "100",
    description: "Discover an extraordinary collection of Caribbean rums at our duty-free store, Caribbean Rum Haven. Explore a wide range of premium rums from across the region, including Appleton Estate, Mount Gay, and Havana Club. Our knowledgeable staff will guide you through the unique flavors and rich history of each bottle, ensuring an unforgettable shopping experience.",
    whatsapp: "1234567890",
    media: ["https://thepointsguy.global.ssl.fastly.net/us/originals/2018/01/duty-free-bottle-shop.jpg"],
    topics: ["Rum", "Shopping"],
    countries: ["Jamaica", "Barbadoes", "Cuba"],
  },




  // Great Houses

  {
    type: "Information",
    title: "Rose Hall Great House",
    description: "Rose Hall Great House, located in Montego Bay, Jamaica, is an 18th-century Georgian mansion with a rich history and tales of ghostly encounters. Once owned by the infamous Annie Palmer, also known as the 'White Witch of Rose Hall,' this great house is now a popular tourist attraction.",
    media: ["https://jamaicagreathouses.com/rosehall/images/bg-rosehall.jpg"],
    topics: ["Great House", "History"],
    countries: ["Jamaica"],
    location: "", // if experience
    price: "", // if NOT information
    whatsapp: "", // if not information
  },

  {
    type: "Information",
    title: "St. Nicholas Abbey",
    description: "St. Nicholas Abbey, situated in Barbados, is a well-preserved Jacobean plantation house built in the mid-17th century. This architectural gem is one of only three remaining Jacobean-style houses in the Western Hemisphere and offers a glimpse into the island's rich history and culture.",
    media: ["https://paradiserentalsbarbados.com/wp-content/uploads/2019/02/st-nicholas-abbey-1024x685-1-1024x685.jpg"],
    topics: ["Great House", "History"],
    countries: ["Barbados"],
    location: "", // if experience
    price: "", // if NOT information
    whatsapp: "", // if not information
  },

  {
    type: "Information",
    title: "Habitation Clement",
    description: "Habitation Clement, located in Martinique, is a historic Creole great house built in the late 19th century. The estate, known for its role in the island's sugar and rum industries, is now a museum and distillery showcasing the history of Martinique's plantation society and Clement Rum production.",
    media: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/c4/f4/7f/maison-principale-de.jpg?w=1200&h=-1&s=1"],
    topics: ["Great House", "History"],
    countries: ["Martinique"],
    location: "", // if experience
    price: "", // if NOT information
    whatsapp: "", // if not information
  },

  {
    type: "Product",
    title: "Art Connect Ja",
    price: "5000",
    description: "Explore the vibrant world of Jamaican art at Art Connect Ja, a unique gallery and art space showcasing the talent of local artists. Browse through a diverse collection of paintings, sculptures, and mixed-media creations that celebrate the rich cultural heritage and breathtaking beauty of Jamaica. Immerse yourself in the inspiring atmosphere and take home a piece of Jamaica's artistic soul.",
    whatsapp: "8761234567",
    media: ["https://img.theculturetrip.com/wp-content/uploads/2017/11/island-village-768x576.jpg"],
    topics: ["Art", "Culture", "Great House", "History"],
    countries: ["Jamaica"],
  },


  // Beach

  {
    type: "Information",
    title: "Grace Bay Beach",
    description: "Grace Bay Beach, located in Providenciales, Turks and Caicos, is renowned for its powdery white sand and crystal-clear turquoise waters. With calm waves and stunning coral reefs, this beach is perfect for swimming, snorkeling, and other water activities.",
    media: ["https://www.beaches.com/blog/content/images/2019/11/Beaches-Turks-and-Caicos-Grace-Bay-Beach.jpg"],
    topics: ["Beach"],
    countries: ["Aruba", "Cayman Islands", "Turks and Caicos"],
    location: "", // if experience
    price: "", // if NOT information
    whatsapp: "", // if not information
  },

  {
    type: "Information",
    title: "Eagle Beach",
    description: "Eagle Beach, situated in Aruba, is known for its wide stretch of white sand, clear blue waters, and iconic Divi Divi trees. This picturesque beach offers a perfect blend of relaxation and water sports, attracting visitors from all around the world.",
    media: ["https://edam-media.costa.it/media_guid/zc11_f686e59a24054a06bb29d16cefc31091/original.jpg?Expires=1593521278&Signature=AwTlbCNgVzbhSdOelEAOjxUsWfDD1xrH7LZlP663yHIR1SVlZO9SD9rCsyi8DO9OiZFDDP0FR8WME7qEigY3dPYND3~zBYSPjSr8VnLZ31Sm9SiDgN5P-cEr~0eV6ZyantQng8ehCw1ndntyv13Siid5aqWbEDBUa0ZzJpGZQzQXJ3s6ZdW-e1vFGpj1UhC0cdHmHyqJYDXM7sMUrVxRuJ5fUCfWQxF2E~XsxkNSXwmZZTJ9FkkEzBE4jH9d7x2wTSib2mLJxGeSRA83Jslz3nzQLQv4qjZvNcZ9F45b-BoSkYt90lLi41wvzLchC-KLakbzgCfB9U2TU7bh1cbgUQ__&Key-Pair-Id=APKAJ47SWE2MWEJD256A"],
    topics: ["Beach"],
    countries: ["Aruba", "Cayman Islands", "Turks and Caicos"],
    location: "", // if experience
    price: "", // if NOT information
    whatsapp: "", // if not information
  },

  {
    type: "Information",
    title: "Seven Mile Beach",
    description: "Seven Mile Beach, located in Grand Cayman, Cayman Islands, is a pristine crescent-shaped beach that stretches for approximately 5.5 miles. This popular destination offers crystal-clear waters, vibrant marine life, and various water sports, making it an ideal spot for beach lovers and adventure seekers alike.",
    media: ["https://www.sandals.com/blog/content/images/2021/02/BNG_Long-Beach-from-Watersports-121-edit.jpg"],
    topics: ["Beach"],
    countries: ["Cayman Islands"],
    location: "", // if experience
    price: "", // if NOT information
    whatsapp: "", // if not information
  },

  {
    type: "Experience",
    title: "Ocean Vibes Snorkeling",
    price: "35",
    description: "Amazing blue water which makes it ideal for snorkeling and for diving. Travel to 3 different islands and see Dolphins.",
    whatsapp: "(649) 244-1744",
    media: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/fc/44/ce/catch-of-the-day.jpg?w=1200&h=-1&s=1"],
    topics: ["Beach"],
    countries: ["Aruba", "Cayman Islands", "Turks and Caicos"],
  },


  {
    type: "Experience",
    title: "MVC Eagle Beach Resort",
    price: "200",
    description: "Small Intimate Resort, Personal Service, Cozy Room",
    whatsapp: "246-824-1148",
    media: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/9a/95/36/mvc-eagle-beach.jpg?w=700&h=-1&s=1"],
    topics: ["Beach"],
    countries: ["Aruba", "Cayman Islands", "Turks and Caicos"],
  },


  {
    type: "Product",
    title: "Paradise Swimwear",
    price: "65",
    description: "Multicolored Monokini",
    whatsapp: "246-824-1148",
    media: ["https://cdn.shopify.com/s/files/1/0248/3024/6994/products/5669449760936-2t.jpg?v=1598265391"],
    topics: ["Beach"],
    countries: ["Aruba", "Cayman Islands", "Turks and Caicos"],
  },


  // Food 

  {
    type: "Information",
    title: "Jerk Chicken",
    description: "Jerk Chicken is a Jamaican specialty known for its spicy, smoky flavor. The dish is made by marinating chicken in a blend of spices, including allspice and Scotch bonnet peppers, then slow-cooking it over pimento wood to achieve a tender, flavorful result.",
    media: ["https://loopnewslive.blob.core.windows.net/liveimage/sites/default/files/2021-05/PIE4ghpEuK.jpg"],
    topics: ["Food"],
    countries: ["Jamaica"],
    location: "", // if experience
    price: "", // if NOT information
    whatsapp: "", // if not information
  },

  {
    type: "Information",
    title: "Roti",
    description: "Roti is a popular Caribbean dish, particularly in Trinidad and Tobago. It consists of a flatbread, typically filled with a savory mixture of spiced vegetables, legumes, or meats, such as curry chicken, beef, or goat. This delicious, filling meal is enjoyed throughout the region and has its roots in Indian cuisine.",
    media: ["https://img.taste.com.au/macIZauT/taste/2016/11/roti-canai-87562-1.jpeg"],
    topics: ["Food"],
    countries: ["Trinidad and Tobago"],
    location: "", // if experience
    price: "", // if NOT information
    whatsapp: "", // if not information
  },

  {
    type: "Information",
    title: "Cou-Cou and Flying Fish",
    description: "Cou-Cou and Flying Fish is the national dish of Barbados, showcasing the island's unique culinary heritage. Cou-Cou is made from cornmeal and okra, cooked to a smooth, polenta-like consistency. Flying Fish, often marinated in a Bajan seasoning blend, is either steamed or fried and served alongside the Cou-Cou.",
    media: ["https://mybajan.com/wp-content/uploads/2020/04/barbados-cou-cou-fish-bajan-recipe-678x381.jpg"],
    topics: ["Food"],
    countries: ["Barbados"],
    location: "", // if experience
    price: "", // if NOT information
    whatsapp: "", // if not information
  },

  {
    type: "Product",
    title: "Boston Jerk",
    price: "1000",
    description: "Savor the mouthwatering flavors of authentic Jamaican jerk chicken at Island Fire Jerk Chicken. Our succulent, perfectly seasoned chicken is grilled over an open flame, infusing it with the irresistible combination of spices and smokiness that defines this Caribbean classic. Visit us for a true taste of Jamaica and let your taste buds embark on a culinary adventure they'll never forget.",
    whatsapp: "1234567890",
    media: ["https://c8.alamy.com/comp/2D86CMB/boston-jerk-centre-portland-parish-jamaica-2D86CMB.jpg"],
    topics: ["Food", "Cuisine"],
    countries: ["Barbados", "Trinidad and Tobago", "Jamaica"],
  },

  {
    type: "Product",
    title: "Kent's Hot Doubles and Pies",
    price: "500",
    description: "Indulge in the delicious and authentic flavors of Trinidadian street food at Kent's Hot Doubles and Pies. Our signature doubles, made with soft bara and perfectly seasoned channa, are a must-try for locals and visitors alike. And don't miss out on our scrumptious pies, filled with mouthwatering ingredients that will make you crave more. Join us for a taste of Trinidad's culinary gems in a warm and welcoming atmosphere.",
    whatsapp: "0987654321",
    media: ["data:image/jpeg;base64,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"],
    topics: ["Food", "Cuisine"],
    countries: ["Barbados", "Trinidad and Tobago", "Jamaica"],
  },

  {
    type: "Product",
    title: "Cou-Cou and Flying Fish at Fred's Bar and Restaurant",
    price: "Varies",
    description: "Delight your taste buds with Barbados' national dish, Cou-Cou and Flying Fish, at Fred's Bar and Restaurant. Enjoy our expertly prepared cou-cou, a creamy blend of cornmeal and okra, paired with tender, perfectly seasoned flying fish in a delicious tomato-based sauce. Dine with us and experience the warm Bajan hospitality while savoring a true taste of Barbadian culture and cuisine.",
    whatsapp: "2461234567",
    media: ["https://lh3.googleusercontent.com/p/AF1QipOJBcm2pZRPDlNGKvvrYjvplqHkdSITPEdRBv5S=w1080-h608-p-k-no-v0"],
    topics: ["Food", "Cuisine"],
    countries: ["Barbados", "Trinidad and Tobago", "Jamaica"],
  },



  // Carnival 

  {
    type: "Information",
    title: "Trinidad and Tobago Carnival",
    description: "The Trinidad and Tobago Carnival is one of the most famous and vibrant celebrations in the Caribbean. This annual pre-Lenten event is characterized by elaborate costumes, steelpan music, soca, and calypso, attracting visitors from around the world to participate in the festivities.",
    media: ["https://newsday.co.tt/wp-content/uploads/2022/11/21402211-1024x653.jpg"],
    topics: ["Carnival", "Culture"],
    countries: ["Trinidad and Tobago"],
    location: "", // if experience
    price: "", // if NOT information
    whatsapp: "", // if not information
  },

  {
    type: "Information",
    title: "Crop Over Festival",
    description: "The Crop Over Festival in Barbados is a traditional harvest festival that has evolved into a spectacular summer celebration. The festival, which lasts several weeks, features calypso and soca music, cultural events, and culminates with the Grand Kadooment Day parade, showcasing elaborate costumes and lively dancing.",
    media: ["https://www.plantationreserve.co.bb/wp-content/uploads/2017/05/festival3-795px.jpg"],
    topics: ["Carnival", "Culture"],
    countries: ["Barbados"],
    location: "", // if experience
    price: "", // if NOT information
    whatsapp: "", // if not information
  },

  {
    type: "Information",
    title: "Antigua Carnival",
    description: "Antigua Carnival is an annual event that commemorates the island's emancipation from slavery in 1834. The festivities, which take place in late July and early August, include vibrant street parades, colorful costumes, steelpan music, and calypso competitions, showcasing Antigua and Barbuda's rich cultural heritage.",
    media: ["https://antiguaobserver.com/wp-content/uploads/2022/06/front-2-carnival.jpeg"],
    topics: ["Carnival", "Culture"],
    countries: ["Antigua and Barbuda"],
    location: "", // if experience
    price: "", // if NOT information
    whatsapp: "", // if not information
  },


  {
    type: "Experience",
    title: "Yuma Vibe",
    price: "500",
    description: "Join the Yuma Vibe Band and immerse yourself in the heart of Trinidad Carnival. Revel in our stunning costumes, pulsating soca music, and contagious energy as we parade through the streets of Port of Spain. Experience the true spirit of Trinidad Carnival and create unforgettable memories with fellow masqueraders from around the world.",
    whatsapp: "1234567890",
    media: ["https://dzfkddprr.mo.cloudinary.net/Risque_Section_Cover.jpg"],
    topics: ["Carnival", "Culture", "Music"],
    countries: ["Antigua and Barbuda", "Barbados", "Trinidad and Tobago"],
  },
  {
    type: "Experience",
    title: "Krave the Band",
    price: "500",
    description: "Unleash your inner reveler with Krave the Band, one of Barbados' most popular carnival bands during the annual Crop Over Festival. Indulge in an unforgettable experience as you parade through Bridgetown, adorned in our dazzling costumes and dancing to the irresistible rhythms of soca and calypso. Join Krave the Band and immerse yourself in the Bajan culture, making friends and memories that will last a lifetime.",
    whatsapp: "2461234567",
    media: ["https://hellocarnival.com/images/sections/1120/630/c/Myth%20front.jpg"],
    topics: ["Carnival", "Culture"],
    countries: ["Antigua and Barbuda", "Trinidad and Tobago", "Barbados"],
  },

  {
    type: "Experience",
    title: "Insane Carnival Band",
    price: "500",
    description: "Experience the exhilarating Antigua Carnival with Insane Carnival Band, a dynamic group known for its captivating costumes and high-energy performances. As we traverse the streets of St. John's, you'll lose yourself in the vibrant fusion of soca, calypso, and steelpan music that defines Antigua's unique cultural celebration. Join Insane Carnival Band and create lasting memories while embracing the enchanting spirit of Antigua Carnival.",
    whatsapp: "2687654321",
    media: ["https://static.wixstatic.com/media/4a507c_a4968cfcfede4d27b100a9a86ae61d19~mv2.png/v1/fill/w_640,h_962,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/4a507c_a4968cfcfede4d27b100a9a86ae61d19~mv2.png"],
    topics: ["Carnival", "Culture"],
    countries: ["Antigua and Barbuda", "Trinidad and Tobago", "Barbados"],
  },





  // Musicians

  {
    type: "Information",
    title: "Bob Marley",
    description: "Bob Marley was a legendary Jamaican reggae musician, singer-songwriter, and guitarist. He achieved international fame with his band, The Wailers, and later as a solo artist. With hits like 'No Woman, No Cry,' 'One Love,' and 'Redemption Song,' Marley's music continues to inspire generations.",
    media: ["https://cdn.britannica.com/73/101873-050-D341E939/Bob-Marley-1978.jpg"],
    topics: ["Music", "Culture"],
    countries: ["Jamaica"],
    location: "", // if experience
    price: "", // if NOT information
    whatsapp: "", // if not information
  },

  {
    type: "Information",
    title: "Rihanna",
    description: "Rihanna is a Barbadian-born singer, songwriter, actress, and businesswoman. She rose to prominence with her debut album, 'Music of the Sun,' and has since released numerous chart-topping hits, such as 'Umbrella,' 'We Found Love,' and 'Work.' Rihanna's incredible vocal range and versatility have made her one of the most successful artists of her generation.",
    media: ["https://pyxis.nymag.com/v1/imgs/6de/08c/1abb5c792286f8d7b9f800dd74308007f6-rihanna.rsquare.w700.jpg"],
    topics: ["Music", "Culture"],
    countries: ["Barbados"],
    location: "", // if experience
    price: "", // if NOT information
    whatsapp: "", // if not information
  },

  {
    type: "Information",
    title: "Celia Cruz",
    description: "Celia Cruz, known as the 'Queen of Salsa,' was a Cuban singer and one of the most influential figures in Latin music. Her powerful voice, extraordinary stage presence, and vibrant personality made her an international sensation. Cruz's extensive discography includes hits like 'La Vida Es Un Carnaval,' 'Quimbara,' and 'Rie y Llora.'",
    media: ["https://www.rollingstone.com/wp-content/uploads/2022/03/celia-cruz-ARD_20791710552.jpg"],
    topics: ["Music", "Culture"],
    countries: ["Cuba"],
    location: "", // if experience
    price: "", // if NOT information
    whatsapp: "", // if not information
  },

  {
    type: "Experience",
    title: "Reggae Sumfest",
    price: "10000",
    description: "Experience the rhythm and energy of Jamaica's premier music festival, Reggae Sumfest. Held annually in Montego Bay, this week-long celebration features a lineup of both local and international artists showcasing the best of reggae, dancehall, and other popular genres. Feel the beat of Jamaica's musical heart and immerse yourself in an unforgettable cultural experience.",
    whatsapp: "8765551234",
    media: ["https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/jamaica/DSC_3267_D7F9E3C3-5056-A36A-075FFBBF60631BF8_d7fbc509-5056-a36a-07740857b715728c.jpg"],
    topics: ["Music", "Festival"],
    countries: ["Jamaica"],
    },

    {
      type: "Experience",
      title: "St. Lucia Jazz Festival",
      price: "2000",
      description: "Discover the soulful melodies and smooth rhythms of the St. Lucia Jazz Festival, an annual music event that showcases the best of local and international jazz talent. Set against the stunning backdrop of the island's lush landscapes, the festival offers a series of concerts and workshops that highlight the beauty and diversity of jazz music. Indulge in a unique and sophisticated Caribbean experience at the St. Lucia Jazz Festival.",
      whatsapp: "7585551234",
      media: ["https://caricom.org/wp-content/uploads/st-lucia-jazz-and-arts-festival.jpg"],
      topics: ["Music", "Festival"],
      countries: ["St. Lucia"],
      }, 





  {
    type: "", // Always there
    location: "", // if experience
    title: "", // Always there
    price: 15.15, // if NOT information
    description: "",
    whatsapp: "", // if not information
    media: [],
    topics: [],
    countries: [],
  },
];

async function main() {
  const countryCount = await prisma.country.count();
  if (countryCount === 0 || countryCount !== countries.length) {
    await prisma.country.deleteMany();
    await prisma.country.createMany({
      data: countries,
    });
    console.log("Seeded countries");
  }

  const topicCount = await prisma.topic.count();
  if (topicCount === 0 || topicCount !== topics.length) {
    await prisma.topic.deleteMany();
    await prisma.topic.createMany({
      data: topics,
    });
    console.log("Seeded topics");
  }

  // const entityCount = await prisma.entity.count();
  // if (entityCount === 0 || entityCount !== entities.length) {
  //   await prisma.entity.deleteMany();
  //   await prisma.entity.createMany({
  //     data: entities,
  //   });
  //   console.log("Seeded entities");
  // }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
