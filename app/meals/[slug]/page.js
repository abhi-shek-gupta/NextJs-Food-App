export default function DynamicMeals({ params }) {
  return (
    <main>
      <h1>Dynamic Meals</h1>
      <p>{params.slug}</p>
    </main>
  );
}
