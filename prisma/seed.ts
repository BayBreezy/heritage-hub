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
  {
    type: "Information", // Always there
    location: "St Mary, Jamaica", // if experience
    title: "Living Exp", // Always there
    price: 54845.15, // if NOT information
    description: "lorem",
    whatsapp: "8745484854545", // if not information
    media: [
      "https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg?resize=480:*",
      "https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg?resize=480:*",
      "https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg?resize=480:*",
    ],
    topics: ["Beach"],
    countries: [],
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
