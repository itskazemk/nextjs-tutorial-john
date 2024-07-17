import Image from "next/image";
import Link from "next/link";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const fetchDrinkDetail = async ({ id }) => {
  const data = await fetch(url + id)
    .then((res) => res.json())
    .catch((err) => {
      throw new Error("failed to fetch drink details.");
    });

  return data;
};

const SingleDrinkPage = async ({ params }) => {
  const data = await fetchDrinkDetail({ id: params.id });
  const title = data?.drinks[0]?.strDrink;
  const imgSource = data?.drinks[0]?.strDrinkThumb;

  return (
    <div>
      <Link href={"/drinks"} className="btn btn-primary mt-8 mb-12">
        Back to Drinks
      </Link>
      <Image
        src={imgSource}
        priority
        width={300}
        height={300}
        className="w-48 h-48 rounded-lg shadow-lg mb-2"
        alt={`image of ${title}`}
      />
      <h3 className="text-4xl ">{title}</h3>
    </div>
  );
};

export default SingleDrinkPage;
