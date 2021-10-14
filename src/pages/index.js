import Head from "next/head";
import BottomNav from "../components/bottom-nav";
import Categories from "../components/categories";
import Header from "../components/header";
import HorizontalList from "../components/horizontal-list";
import HorizontalPriceList from "../components/horizontal_price_list";
import ImageSlider from "../components/ImageSlider";
import {
  featuredNovels,
  latestNovels,
  novels,
  recommendedNeetBooks,
} from "../utils/datas";

export default function Home() {
  return (
    <div className="min-h-screen w-full font-open-sans">
      <Head>
        <title>Nogozo - Book selling app</title>
      </Head>

      <Header />

      <main className="container max-w-3xl mx-auto px-4 pb-20 pt-36 relative z-0 overflow-hidden">
        {/* slider */}
        <ImageSlider />

        <Categories />

        {/* novels */}
        <HorizontalList title="Novels for you">
          {novels.map((item, key) => (
            <img
              key={key}
              src={item.img}
              alt={item?.title || "novels"}
              className="w-64 h-32 object-cover mx-2 rounded-2xl"
            />
          ))}
        </HorizontalList>

        {/* Featured Novels */}
        <HorizontalPriceList title="Featured Novels" list={featuredNovels} />

        {/* Latest Novels Arrival */}
        <HorizontalPriceList
          title="Latest Novels Arrival"
          list={latestNovels}
        />

        {/* Recommended NEET Books */}
        <HorizontalPriceList
          title="Recommended NEET Books"
          list={recommendedNeetBooks}
        />

        <BottomNav />
      </main>
    </div>
  );
}
