import DrinksList from "@/components/DrinksList";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  let data = await fetch(url)
    .then((res) => res.json())
    .catch((err) => {
      throw new Error("failed to fetch drinks");
    });
  return data;
};

const Drinks = async () => {
  const data = await fetchDrinks();

  return (
    <div>
      <DrinksList drinks={data.drinks} />
    </div>
  );
};

export default Drinks;
