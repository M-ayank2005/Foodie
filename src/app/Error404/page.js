import Link from 'next/link';
import gif from "../../../public/err.gif"; 
import Image from 'next/image';
export default function Page() {
  return (
    <div className="h-screen w-full bg-yellow-600 text-gray-900">
      
      <section className="home grid h-screen pt-32 pb-16">
        <div className="home__container container grid content-center gap-12 lg:max-w-5xl lg:grid-cols-2 lg:items-center">
          <div className="home__data justify-self-center text-center lg:text-left">
            <p className="pb-2 text-5xl font-semibold lg:text-6xl">Error 404</p>
            <h1 className="pb-4 text-5xl font-bold ">Sorry Customers</h1>
            <p className="pb-8 font-semibold">
              We can&apos;t seem to find the page <br />
              you are looking for.
            </p>
            <Link legacyBehavior href="/" passHref>
              <a className="inline-flex items-center justify-center rounded-full bg-gray-900 py-4 px-8 font-bold text-white">
                Go Home
              </a>
            </Link>
          </div>

          <div className="home__img justify-self-center">
            <Image src={gif} alt="Error 404" /> 
          </div>
        </div>

        <div className="home__footer flex items-center justify-center gap-2 self-end text-sm font-semibold">
          <p>+91-8493628282</p>
          <p>|</p>
          <p>info@Foodie.com</p>
        </div>
      </section>
    </div>
  );
}
