export default function Item({ingreedient}) {
  return (
    <div>
      {" "}
      <img
        src={
          `https://spoonacular.com/cdn/ingredients_100x100/` + ingreedient.image
        }
      />
      <h3>{ingreedient.original}</h3>
    </div>
  );
}
