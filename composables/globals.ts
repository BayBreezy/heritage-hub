import { TEntity } from "~~/types";

export const useTypes = () =>
  useState("creationTypes", () => ["Product", "Experience", "Information"]);

export const useEntity = () =>
  useState<TEntity>("entity", () => {
    return {} as TEntity;
  });

export const COUNTRY_KEY = "countries";
export const TOPICS_KEY = "topics";
export const useStoreCountries = (list: (typeof useCountryList)[] = []) => {
  // store them in local storage
  localStorage.setItem(COUNTRY_KEY, JSON.stringify(list));
  localStorage.setItem("countrySet", "true");
};
export const useStoreTopics = (list: (typeof useTopics)[] = []) => {
  // store them in local storage
  localStorage.setItem(TOPICS_KEY, JSON.stringify(list));
  localStorage.setItem("topicsSet", "true");
};
export const useGetCountries = () => {
  // get them in local storage
  const items = localStorage.getItem(COUNTRY_KEY);
  return items ? JSON.parse(items) : [];
};

/**
 * Method used to format currency
 * @param money - valud to be formatted
 * @returns returns formatted currency
 */
export const useCurrency = (money: number) => {
  if (!money) money = 0;
  if (isNaN(money)) money = 0;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(money);
};
