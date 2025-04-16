import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../../../assets/hero.mp4";
// import MobileHero from "../../../assets/heroMobile.jpg";

export const HeroSection = () => {
    return (
        <figure className="relative max-w-max max-h-max text-white">
                <video className="hidden sm:block sm:w-[100%] sm:h-[100%]" autoPlay muted loop src = { HeroImage }  alt="description" />
                {/* <img className=" sm:hidden sm:w-[100%] sm:h-[100%]" src = { MobileHero }  alt="description" /> */}
            <figcaption className="absolute px-4 top-5 left-[20%] sm:top-[30%] sm:left-10 ">
                <div>
                    <h2 className="mb-4 p-4 text-2xl font-semibold sm:font-semibold tracking-tight leading-none lg:text-3xl">
                    "Rooted in a commitment to nurture nature, we embrace organic farming to enrich our soil and support biodiversity. Together, we cultivate a sustainable future where fresh, healthy produce nourishes our communities and fosters harmony with the Earth."
                    </h2>
                    <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-4 sm:justify-center">
                        <Link
                            to="/about"
                            className="inline-flex justify-center items-center py-2 px-5 sm:ms-4 text-base font-medium text-center text-primary-900 border-primary-700 sm:text-white rounded-lg border sm:border-white hover:text-white hover:border-white hover:bg-primary-500 hover:bg-opacity-50"
                        >
                            Learn more
                        </Link>
                        <Link
                            to="/shop"
                            className="inline-flex justify-center items-center py-2 px-5 text-base font-medium text-center text-white rounded-lg border-white border-2 bg-primary-500 hover:bg-primary-600"
                        >
                            Discover Organic Goodness
                            <svg
                                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </figcaption>
        </figure>
    );
};
