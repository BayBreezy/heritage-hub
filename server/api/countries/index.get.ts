export default defineEventHandler(async (event) => {
  try {
    const countries = await prisma.country.findMany();
    return countries;
  } catch (error: any) {
    throw createError(error);
  }
});
