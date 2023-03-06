import Image from "next/image";
import { Montserrat } from "next/font/google";
import styles from "./page.module.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fetchQuotes = async () => {
  const res = await fetch(`https://dummyjson.com/quotes`);
  const { quotes } = await res.json();
  console.log("quotes", quotes);
  return quotes;
};

async function Home() {
  const quotes = await fetchQuotes();
  return (
    <main className={`${styles.main}  ${montserrat.className} `}>
      {quotes.map(quote => (
        <div key={quote.id}>
          <p>{quote.author}</p>
          <p>{quote.quote}</p>
        </div>
      ))}
    </main>
  );
}
export default Home;
