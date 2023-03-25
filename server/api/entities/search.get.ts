export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { search } = query;
  if (!search) {
    return [];
  } else {
    const searchQuery = await prisma.entity.findMany({
      where: {
        OR: [
          { type: { contains: search, mode: "insensitive" } },
          { title: { contains: search, mode: "insensitive" } },
        ],
      },
      include: {
        countries: true,
        topics: true,
        media: {
          orderBy: {
            resource_type: "asc",
          },
        },
      },
      take: 10,
    });
    return searchQuery;
  }
});
