export default defineEventHandler(async (event) => {
  return await prisma.entity.findMany({
    where: {
      type: "Information",
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      countries: true,
      topics: true,
      media: {
        orderBy: {
          format: "asc",
        },
      },
    },
  });
});
