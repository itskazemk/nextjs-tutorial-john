const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  let data = await fetch(url).then((res) => res.json());
  return data;
};

const Drinks = async () => {
  const data = await fetchDrinks();

  console.log(111, data);

  return <div>Drinks</div>;
};

export default Drinks;
