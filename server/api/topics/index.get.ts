export default defineEventHandler(async (event) => {
  try {
    const topics = await prisma.topic.findMany();
    return topics;
  } catch (error: any) {
    console.log(error);
    throw createError(error);
  }
});
