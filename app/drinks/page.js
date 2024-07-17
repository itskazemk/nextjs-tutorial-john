const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const Drinks = async () => {
  let data = await fetch(url).then((res) => res.json());
  console.log(111, data);

  return <div>Drinks</div>;
};

export default Drinks;
