import { Topic } from "@prisma/client";

export const useTopics = () => useState<Topic[]>("loadedTopics");
/**
 * Method used to get topics from API
 * @returns - list of topics from the DB
 */
export const useLoadTopics = async () => {
  const topics = useTopics();
  const res = await $fetch<Topic[]>("/api/topics");
  topics.value = res;
  return res;
};
