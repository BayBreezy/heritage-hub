import { Country } from "@prisma/client";

export const useCountries = () => useState<Country[]>("loadedCountries");
/**
 * Method used to get countries from API
 * @returns - list pof countries from the DB
 */
export const useLoadCountries = async () => {
  const countries = useCountries();
  const res = await $fetch<Country[]>("/api/countries");
  countries.value = res;
  return res;
};
