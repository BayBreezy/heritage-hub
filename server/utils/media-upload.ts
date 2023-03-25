import { v2 } from "cloudinary";

/**
 * Method used to upload a single file
 * @param file - base64 encoded file
 * @returns Return the uploaded file
 */
export const uploadFile = async (file: string) => {
  try {
    const { API_KEY, API_SECRET, CLOUD_NAME } = useRuntimeConfig();
    v2.config({
      cloud_name: CLOUD_NAME,
      api_key: API_KEY,
      api_secret: API_SECRET,
    });

    return await v2.uploader.upload(file, {
      folder: "heritage-hub",
      resource_type: "auto",
    });
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      message: error.message,
    });
  }
};
/**
 * Method used to upload many files
 * @param file - base64 encoded files
 * @returns Return the uploaded files
 */
export const uploadFiles = async (files: []) => {
  try {
    const { API_KEY, API_SECRET, CLOUD_NAME } = useRuntimeConfig();
    v2.config({
      cloud_name: CLOUD_NAME,
      api_key: API_KEY,
      api_secret: API_SECRET,
    });

    // get req body
    let mediaFiles = [];
    // upload each file
    for (let i = 0; i < files.length; i++) {
      const media = files[i];
      const d = await v2.uploader.upload(media, {
        folder: "heritage-hub",
        resource_type: "auto",
      });
      mediaFiles.push(d);
    }

    // return the uploaded files
    return mediaFiles;
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      message: error.message,
    });
  }
};
