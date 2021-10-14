import Link from "next/link";
import BottomNav from "../components/bottom-nav";
import Header from "../components/header";

function Custom404() {
  return (
    <div className="min-h-screen w-full font-open-sans">
      <Header />
      <main className="container max-w-3xl mx-auto px-4 pb-16 pt-36">
        <div className="flex flex-col items-center justify-center py-8">
          <h1>404 - Page Not Found</h1>
          <Link href="/">
            <a className="text-[#2F76A9] mt-4">Back to Home</a>
          </Link>
        </div>
        <BottomNav />
      </main>
    </div>
  );
}

export default Custom404;
