import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <li>
        <ul>
          <Link href={"/meals"}>Meals</Link>
        </ul>
        <ul>
          <Link href={"/meals/share"}>Meals Share</Link>
        </ul>
        <ul>
          <Link href={"/meals/biryani"}>MealsDynamic</Link>
        </ul>
        <ul>
          <Link href={"/community"}>Community</Link>
        </ul>
      </li>
    </main>
  );
}
