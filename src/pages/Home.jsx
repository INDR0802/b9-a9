import { Helmet } from "react-helmet";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Client from "../components/Client";

const Home = () => {
  return (
    <div className="relative">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dream Home</title>
      </Helmet>
      <Banner />
      <div className="absolute top-0 -z-10 w-full">
      <img src="/bg.jpg" alt="" className=" w-[1200px] mx-auto h-[475px] -mt-8"/>
      </div>
      <div className="text-center my-10">
        <h1 className="font-bold text-3xl">Estates</h1>
        <p className="font-extralight md:w-[600px] mx-auto">
          Acquire prestigious properties: mansions, villas, and estates. Invest
          in luxury living. Contact us for exclusive opportunities. Your dream
          awaits!
        </p>
      </div>
      <Card />
      <Client />
    </div>
  );
};

export default Home;
