import { Poppins } from "next/font/google";
import Link from "next/link";
import { TbBook } from "react-icons/tb";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
export default function OurResources() {
  return (
    <section
      className={
        poppins.className +
        " flex flex-col justify-center min-h-screen items-center gap-10 py-20 lg:py-40 bg-bgwhite"
      }
    >
      <div className="flex flex-col items-center">
        <h1 className="lg:text-[47px] text-[40px] font-semibold">
          Our Resources
        </h1>
        <div className="h-[3px] w-[50%] bg-bgpurple"></div>
      </div>
      <p className="lg:w-7/12 w-10/12 md:text-center text-justify font-light md:text-lg">
        At MyMoMa, we are committed to supporting women and LGBTQIA+
        entrepreneurs by providing valuable resources to help you thrive in your
        business endeavors. Explore our curated materials designed to empower
        and guide you on your path to success.
      </p>
      <div className="w-11/12 transition-all lg:w-9/12 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 2xl:grid-cols-4 pt-10">
        <Link href="/Resources/Handbook">
          <div className="transition-all duration-700 ease-in-out flex flex-col rounded-lg p-5 bg-mentorpink/50">
            <p className="text-4xl text-bgpurple">
              <TbBook />
            </p>
            <h2 className="text-xl font-semibold pt-2">
              From StartUp to ScaleUp
            </h2>
            <p className="text-neutral-700 font-light italic pt-2 pb-5">
              A comprehensive guide to help you build, grow, and sustain your
              business.
            </p>
            <p className="text-sm text-bgpurple">read more</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
