import React from "react";
import { Link, useParams } from "react-router-dom";
import { ProductCard } from "../shop/components/ProductCard";

export const CourseDetailsPage = ({ courses }) => {
    const { id } = useParams();
    const course = courses.find((course) => course.id === parseInt(id));

    if (!course) {
        return (
            <p className="text-center text-red-500 font-semibold text-xl">
                Course not found!
            </p>
        );
    }

    // Define the products array inside the component
    const products = [
        {
            id: 1,
            name: "Organic Soil Conditioner",
            image_url: "/product-images/product_1.jpg",
            price: 350,
            rating: 4.3,
            weight: "5 kg",
            description:
                "This soil conditioner is made from organic matter and natural minerals, designed to improve soil structure and fertility. It helps retain moisture and provides essential nutrients to plants.",
        },
        {
            id: 2,
            name: "Worm Composting Bin (Vermicompost Kit)",
            image_url: "/product-images/product_2.jpg",
            price: 300,
            rating: 4.2,
            weight: "5 kg",
            description:
                "A complete vermicomposting kit that includes a bin, red worms, and instructions. Ideal for turning organic waste into nutrient-rich compost using earthworms.",
        },
        {
            id: 3,
            name: "Organic Plant Food (Liquid Fertilizer)",
            image_url: "/product-images/product_3.jpg",
            price: 300,
            rating: 4.46,
            description:
                "A concentrated liquid fertilizer made from organic plant extracts and seaweed. Suitable for all types of plants, including vegetables, fruits, and flowers.",
        },
        {
            id: 4,
            name: "Organic Seedling Starter Kit",
            image_url: "/product-images/product_4.jpg",
            price: 150,
            rating: 4,
            weight: "250 g",
            description:
                "A kit containing organic soil mix, biodegradable pots, and a variety of organic seeds. Perfect for starting seedlings indoors or in a greenhouse.",
        },
        {
            id: 5,
            name: "Drip Irrigation System for Organic Gardens",
            image_url: "/product-images/product_5.jpg",
            price: 1000,
            discounted_price: 750,
            rating: 4,
            description:
                "A customizable drip irrigation system designed for small to medium-sized organic gardens. It conserves water and delivers it directly to plant roots.",
        },
        {
            id: 6,
            name: "Organic Fruit & Vegetable Wash",
            image_url: "/product-images/product_6.jpg",
            price: 400,
            rating: 4.1,
            weight: "1000 ml",
            description:
                "A natural, non-toxic wash for cleaning fruits and vegetables, removing dirt, wax, and pesticide residues. Safe for all produce.",
        },
        {
            id: 7,
            name: "Eco Friendly Plant Pots",
            image_url: "/product-images/product_7.jpg",
            price: 2050,
            discounted_price: 1500,
            rating: 4.1,
            description:
                "Biodegradable plant pots made from recycled materials. These pots decompose naturally and can be planted directly in the ground, reducing transplant shock.",
        },
        {
            id: 8,
            name: "Organic Mulch (Coconut Coir)",
            image_url: "/product-images/product_8.jpg",
            price: 320,
            rating: 4,
            weight: "4 kg",
            description:
                "Organic mulch made from coconut coir, perfect for retaining moisture and suppressing weeds.",
        },
        {
            id: 9,
            name: "Insect-Repelling Plant Mix",
            image_url: "/product-images/product_9.jpg",
            price: 290,
            weight: "200 ml",
            rating: 4,
            description:
                "A collection of organic seeds for plants known to repel insects, such as marigold, basil, and lavender. Perfect for natural pest control in your garden.",
        },
        {
            id: 10,
            name: "Bee-Friendly Flower Seeds",
            image_url: "/product-images/product_10.jpg",
            price: 150,
            rating: 4.3,
            weight: "15 per packet",
            description:
                "A mix of flower seeds that attract bees and other pollinators, promoting biodiversity in your garden.",
        },
        {
            id: 11,
            name: "Organic Plant Disease Control",
            image_url: "/product-images/product_11.jpg",
            price: 290,
            rating: 4.1,
            weight: "400 gm",
            description:
                "A natural, organic fungicide and bactericide for controlling plant diseases like blight, mildew, and rust. Safe for edible plants.",
        },
        {
            id: 12,
            name: "Organic Plant Stakes with Ties",
            image_url: "/product-images/product_12.jpg",
            price: 200,
            rating: 4.3,
            weight: "Pack of 3",
            description:
                "Bamboo plant stakes paired with natural fiber ties, ideal for supporting growing plants without damaging them. Perfect for tomatoes, cucumbers, and other vine crops.",
        },
    ];

    // Function to shuffle an array randomly
    function shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    // Get a random number of products to show (for example, 3 random products)
    const requiredProducts = shuffleArray(products).slice(0, 3); // You can change the number 3 to any number

    return (
        <div className="container mx-auto py-12 px-6 lg:px-24 mt-16">
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
                {/* Course Header */}
                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden">
                        <img
                            src={
                                course.image ||
                                "https://via.placeholder.com/800x600?text=Course+Image"
                            }
                            alt={course.title}
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-4xl font-extrabold text-gray-800">
                            {course.title}
                        </h2>
                        <p className="text-lg text-gray-700">
                            {course.description}
                        </p>
                        <div>
                            <h3 className="font-semibold text-gray-800">
                                Duration:
                                <span className="font-normal text-gray-600">
                                    {" "}
                                    {course.duration}
                                </span>
                            </h3>
                            <h4 className="font-semibold text-gray-800">
                                Level:
                                <span className="font-normal text-gray-600">
                                    {" "}
                                    {course.level}
                                </span>
                            </h4>
                            <p className="font-semibold text-3xl text-green-600 mt-4">
                                ₹{course.price}
                            </p>
                        </div>
                        <div className="mt-8 text-center">
                            <Link
                                to={`/playlist/${course.id}`}
                                className="bg-green-600 text-white py-4 px-8 rounded-full text-lg font-semibold hover:bg-green-700 transition-all duration-300"
                            >
                                Go to Playlist
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Course Details Section */}
                <div className="mt-16 space-y-12">
                    <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                            What You'll Learn
                        </h3>
                        <ul className="list-disc list-inside text-lg text-gray-700">
                            <li>Understand the basics of organic farming</li>
                            <li>Learn about soil health and crop rotation</li>
                            <li>
                                Discover organic pest control and management
                                techniques
                            </li>
                            <li>
                                Apply sustainable farming practices to increase
                                yields
                            </li>
                            <li>
                                Explore marketing and selling of organic
                                products
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                            Course Prerequisites
                        </h3>
                        <p className="text-lg text-gray-700">
                            No prior farming experience required. However, basic
                            knowledge of plants and gardening is beneficial.
                        </p>
                    </div>

                    {/* Instructor Details Section */}
                    <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                            Meet Your Instructor
                        </h3>
                        <div className="flex items-center space-x-6">
                            <img
                                src="https://avatar.iran.liara.run/public/job/teacher/male"
                                alt="Instructor"
                                className="w-32 h-32 rounded-full shadow-lg"
                            />
                            <div>
                                <p className="text-xl font-semibold text-gray-800">
                                    John Doe
                                </p>
                                <p className="text-lg text-gray-600">
                                    John is an expert in organic farming and
                                    sustainable agriculture with over 15 years
                                    of experience. He has trained hundreds of
                                    farmers in implementing eco-friendly
                                    practices for better yields.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recommended Products Section */}
                {requiredProducts.length > 0 && (
    <div className="mt-16 space-y-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Required Products for this Course
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {requiredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    </div>
)}


                {/* Testimonials Section */}
                <div className="mt-16">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-8">
                        What Our Students Say
                    </h3>
                    <div className="flex space-x-6">
                        <div className="w-1/3 bg-gray-50 p-6 rounded-lg shadow-md">
                            <p className="text-lg text-gray-700 italic">
                                "This course helped me understand organic
                                farming from scratch. I am now applying what I
                                learned on my farm!"
                            </p>
                            <p className="font-semibold text-gray-800 mt-4">
                                - Sarah, Organic Farmer
                            </p>
                        </div>
                        <div className="w-1/3 bg-gray-50 p-6 rounded-lg shadow-md">
                            <p className="text-lg text-gray-700 italic">
                                "The instructor is amazing! His knowledge and
                                teaching style made the concepts easy to
                                understand and apply."
                            </p>
                            <p className="font-semibold text-gray-800 mt-4">
                                - Raj, Aspiring Farmer
                            </p>
                        </div>
                        <div className="w-1/3 bg-gray-50 p-6 rounded-lg shadow-md">
                            <p className="text-lg text-gray-700 italic">
                                "I highly recommend this course to anyone
                                looking to get into organic farming. It's
                                practical, thorough, and very engaging."
                            </p>
                            <p className="font-semibold text-gray-800 mt-4">
                                - Priya, Agricultural Consultant
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
