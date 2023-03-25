import { UploadApiResponse } from "cloudinary";
import { prisma } from "../../utils/db";

export default defineEventHandler(async (event) => {
  try {
    // validate the request body
    const body = await readBody(event);

    await entitySchema.validate(body);
    // create entity
    const entity = await prisma.entity.create({
      data: {
        countries: {
          connect: body.countries.map((country: any) => ({ id: country.id })),
        },
        topics: {
          connect: body.topics.map((t: any) => ({ id: t.id })),
        },
        title: body.title,
        description: body.description,
        type: body.type,
        location: body.location,
        price: body.price,
        tags: body.tags,
        whatsapp: body.whatsapp,
      },
    });
    // upload images
    const media = await uploadFiles(body.media);
    // create medias
    const medias = await prisma.media.createMany({
      data: media.map((m: UploadApiResponse) => ({
        format: m.format,
        public_id: m.public_id,
        secure_url: m.secure_url,
        resource_type: m.resource_type,
        type: m.type,
        entityId: entity.id,
      })),
    });

    return entity;
  } catch (error: any) {
    console.log(error);

    throw createError({
      statusCode: 500,
      message: error.message,
    });
  }
});
