import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AboutPage, CartPage, ContactUsPage, CourseDetailsPage, Courses, FarmingEssentialsProducts, FarmProduceProducts, GovernmentSubsidies, HomePage, InventoryManagement, Login, PlaylistPage, PrivacyPolicyPage, ProductDetailsPage, Register, ShopPage, TermsAndConditionsPage } from '../pages'

const courses = [
  {
    id: 1,
    title: "Introduction to Organic Farming",
    description: "Learn the basics of organic farming, including soil health, crop rotation, and organic pest management.",
    image: "https://via.placeholder.com/1080x720/FFDDC1/000000?text=Organic+Farming",
    thumbnail: "https://via.placeholder.com/50x50/FFDDC1/000000?text=Leaf",
    duration: "4 weeks",
    level: "Beginner",
    price: 0,
    playlist: [
      { id: 1, title: "Soil Health Basics", videoUrl: "https://www.youtube.com/watch?v=WhOrIUlrnPo&pp=ygUeb3JnYW5pYyBmYXJtaW5nIGFuaW1hdGVkIHZpZGVv", isLocked: false },
      { id: 2, title: "Crop Rotation Techniques", videoUrl: "https://www.youtube.com/watch?v=WhOrIUlrnPo&pp=ygUeb3JnYW5pYyBmYXJtaW5nIGFuaW1hdGVkIHZpZGVv", isLocked: true },
      { id: 3, title: "Organic Pest Management 101", videoUrl: "https://www.youtube.com/watch?v=WhOrIUlrnPo&pp=ygUeb3JnYW5pYyBmYXJtaW5nIGFuaW1hdGVkIHZpZGVv", isLocked: true },
    ]
  },
  {
    id: 2,
    title: "Advanced Organic Farming Techniques",
    description: "Deep dive into advanced techniques for organic farming, including permaculture, agroecology, and integrated pest management.",
    image: "https://via.placeholder.com/1080x720/9BBAF5/000000?text=Advanced+Farming",
    thumbnail: "https://via.placeholder.com/50x50/9BBAF5/000000?text=Tools",
    duration: "6 weeks",
    level: "Advanced",
    price: 7500,
    playlist: [
      { id: 1, title: "Permaculture Basics", videoUrl: "https://www.youtube.com/watch?v=WhOrIUlrnPo&pp=ygUeb3JnYW5pYyBmYXJtaW5nIGFuaW1hdGVkIHZpZGVv", isLocked: false },
      { id: 2, title: "Agroecology Principles", videoUrl: "https://www.youtube.com/watch?v=WhOrIUlrnPo&pp=ygUeb3JnYW5pYyBmYXJtaW5nIGFuaW1hdGVkIHZpZGVv", isLocked: true },
      { id: 3, title: "Integrated Pest Management", videoUrl: "https://www.youtube.com/watch?v=WhOrIUlrnPo&pp=ygUeb3JnYW5pYyBmYXJtaW5nIGFuaW1hdGVkIHZpZGVv", isLocked: true },
    ]
  },
  {
    id: 3,
    title: "Organic Gardening at Home",
    description: "Start your own organic garden at home with easy-to-follow methods for growing healthy and sustainable crops.",
    image: "https://via.placeholder.com/1080x720/7CC576/000000?text=Home+Gardening",
    thumbnail: "https://via.placeholder.com/50x50/7CC576/000000?text=Pot",
    duration: "3 weeks",
    level: "Beginner",
    price: 0,
    playlist: [
      { id: 1, title: "Planning Your Organic Garden", videoUrl: "https://www.youtube.com/watch?v=WhOrIUlrnPo&pp=ygUeb3JnYW5pYyBmYXJtaW5nIGFuaW1hdGVkIHZpZGVv", isLocked: false },
      { id: 2, title: "Soil Preparation for Gardens", videoUrl: "https://www.youtube.com/watch?v=WhOrIUlrnPo&pp=ygUeb3JnYW5pYyBmYXJtaW5nIGFuaW1hdGVkIHZpZGVv", isLocked: true },
      { id: 3, title: "Planting Vegetables and Herbs", videoUrl: "https://www.youtube.com/watch?v=WhOrIUlrnPo&pp=ygUeb3JnYW5pYyBmYXJtaW5nIGFuaW1hdGVkIHZpZGVv", isLocked: true },
    ]
  },
  {
    id: 4,
    title: "Soil Health and Composting",
    description: "Master the art of maintaining healthy soil, composting techniques, and building a sustainable ecosystem for your farm.",
    image: "https://via.placeholder.com/1080x720/FF9A8B/000000?text=Soil+Health",
    thumbnail: "https://via.placeholder.com/50x50/FF9A8B/000000?text=Soil",
    duration: "5 weeks",
    level: "Intermediate",
    price: 7500,
    playlist: [
      { id: 1, title: "Composting 101", videoUrl: "https://www.youtube.com/watch?v=WhOrIUlrnPo&pp=ygUeb3JnYW5pYyBmYXJtaW5nIGFuaW1hdGVkIHZpZGVv", isLocked: false },
      { id: 2, title: "Healthy Soil Techniques", videoUrl: "https://www.youtube.com/watch?v=WhOrIUlrnPo&pp=ygUeb3JnYW5pYyBmYXJtaW5nIGFuaW1hdGVkIHZpZGVv", isLocked: true },
      { id: 3, title: "Building Fertile Soil", videoUrl: "https://www.youtube.com/watch?v=WhOrIUlrnPo&pp=ygUeb3JnYW5pYyBmYXJtaW5nIGFuaW1hdGVk IHZpZGVv", isLocked: true },
    ]
  },
  {
    id: 5,
    title: "Permaculture Design and Implementation",
    description: "Learn the principles of permaculture and how to implement a sustainable, self-sufficient farming system on your land.",
    image: "https://via.placeholder.com/1080x720/8E7CFF/000000?text=Permaculture+Design",
    thumbnail: "https://via.placeholder.com/50x50/8E7CFF/000000?text=Tree",
    duration: "8 weeks",
    level: "Advanced",
    price: 7500,
    playlist: [
      { id: 1, title: "Introduction to Permaculture", videoUrl: "https://www.youtube.com/watch?v=WhOrIUlrnPo&pp=ygUeb3JnYW5pYyBmYXJtaW5nIGFuaW1hdGVkIHZpZGVv", isLocked: false },
      { id: 2, title: "Designing Your Permaculture System", videoUrl: "https://www.youtube.com/watch?v=WhOrIUlrnPo&pp=ygUeb3JnYW5pYyBmYXJtaW5nIGFuaW1hdGVk IHZpZGVv", isLocked: true },
      { id: 3, title: "Implementing Sustainable Practices", videoUrl: "https://www.youtube.com/watch?v=WhOrIUlrnPo&pp=ygUeb3JnYW5pYyBmYXJtaW5nIGFuaW1hdGVk IHZpZGVv", isLocked: true },
    ]
  },
  {
    id: 6,
    title: "Agroecology: Farming for Sustainability",
    description: "Understand the relationship between ecology and farming to create an environmentally sustainable agricultural system.",
    image: "https://via.placeholder.com/1080x720/62E6B7/000000?text=Agroecology",
    thumbnail: "https://via.placeholder.com/50x50/62E6B7/000000?text=Earth",
    duration: "6 weeks",
    level: "Intermediate",
    price: 7500,
    playlist: [
      { id: 1, title: "What is Agroecology?", videoUrl: "https://www.youtube.com/watch?v=WhOrIUlrnPo&pp=ygUeb3JnYW5pYyBmYXJtaW5nIGFuaW1hdGVk IHZpZGVv", isLocked: false },
      { id: 2, title: "Principles of Sustainable Farming", videoUrl: "https://www.youtube.com/watch?v=WhOrIUlrnPo&pp=ygUeb3JnYW5pYyBmYXJtaW5nIGFuaW1hdGVk IHZpZGVv", isLocked: true },
      { id: 3, title: "Agroecology for Future Farms", videoUrl: "https://www.youtube.com/watch?v=WhOrIUlrnPo&pp=ygUeb3JnYW5pYyBmYXJtaW5nIGFuaW1hdGVk IHZpZGVv", isLocked: true },
    ]
  },
  {
    id: 7,
    title: "Organic Pest Management",
    description: "Learn natural and organic methods of pest control, including companion planting, organic pesticides, and biological control.",
    image: "https://via.placeholder.com/1080x720/FFC45C/000000?text=Organic+Pest+Management",
    thumbnail: "https://via.placeholder.com/50x50/FFC45C/000000?text=Bug",
    duration: "4 weeks",
    level: "Beginner",
    price: 0,
    playlist: [
      { id: 1, title: "Natural Pest Control Techniques", videoUrl: "https://www.youtube.com/watch?v=WhOrIUlrnPo&pp=ygUeb3JnYW5pYyBmYXJtaW5nIGFuaW1hdGVk IHZpZGVv", isLocked: false },
      { id: 2, title: "Organic Pesticides and Repellents", videoUrl: "https://www.youtube.com/watch?v=WhOrIUlrnPo&pp=ygUeb3JnYW5pYyBmYXJtaW5n IGFuaW1hdGVkIHZpZGVv", isLocked: true },
      { id: 3, title: "Companion Planting for Pest Control", videoUrl: "https://www.youtube.com/watch?v=WhOrIUlrnPo&pp=ygUeb3JnYW5pYyBmYXJtaW5n IGFuaW1hdGVk IHZpZGVv", isLocked: true },
    ]
  },
  {
    id: 8,
    title: "Urban Organic Farming",
    description: "Grow organic crops in urban spaces with techniques for container gardening, rooftop farming, and small-space gardening.",
    image: "https://via.placeholder.com/1080x720/F2D652/000000?text=Urban+Farming",
    thumbnail: "https://via.placeholder.com/50x50/F2D652/000000?text=City",
    duration: "4 weeks",
    level: "Beginner",
    price: 0,
    playlist: [
      { id: 1, title: "Urban Gardening Basics", videoUrl: "https://www.youtube.com/watch?v=WhOrIUlrnPo&pp=ygUeb3JnYW5pYyBmYXJtaW5nIGFuaW1hdGVk IHZpZGVv", isLocked: false },
      { id: 2, title: "Container Gardening for Beginners", videoUrl: "https://www.youtube.com/watch?v=WhOrIUlrnPo&pp=ygUeb3JnYW5pYyBmYXJtaW5n IGFuaW1hdGVk IHZpZGVv", isLocked: true },
      { id: 3, title: "Vertical Farming Techniques", videoUrl: "https://www.youtube.com/watch?v=WhOrIUlrnPo&pp=ygUeb3JnYW5pYyBmYXJtaW5n IGFuaW1hdGVk IHZpZGVv", isLocked: true },
    ]
  },
  {
    id: 9,
    title: "Building a Sustainable Farm Business",
    description: "Learn how to run a profitable organic farm, from business planning and marketing to finance and farm management.",
    image: "https://via.placeholder.com/1080x720/E1C6E2/000000?text=Farm+Business",
    thumbnail: "https://via.placeholder.com/50x50/E1C6E2/000000?text=Business",
    duration: "6 weeks",
    level: "Advanced",
    price: 7500,
    playlist: [
      { id: 1, title: "Introduction to Sustainable Farm Business", videoUrl: "https://www.youtube.com/watch?v=WhOrIUlrnPo&pp=ygUeb3JnYW5pYyBmYXJtaW5nIGFuaW1hdGVk IHZpZGVv", isLocked: false },
      { id: 2, title: "Farm Management Essentials", videoUrl: "https://www.youtube.com/watch?v=WhOrIUlrnPo&pp=ygUeb3JnYW5pYyBmYXJtaW5n IGFuaW1hdGVk IHZpZGVv", isLocked: true },
      { id: 3, title: "Marketing Your Farm Products", videoUrl: "https://www.youtube.com/watch?v=WhOrIUlrnPo&pp=ygUeb3JnYW5pYyBmYXJtaW5n IGFuaW1hdGVk IHZpZGVv", isLocked: true },
    ]
  },
  {
    id: 10,
    title: "Organic Seed Saving and Breeding",
    description: "Master the techniques for saving and breeding your own organic seeds to ensure sustainable crop production year after year.",
    image: "https://via.placeholder.com/1080x720/F6D8A3/000000?text=Seed+Saving",
    thumbnail: "https://via.placeholder.com/50x50/F6D8A3/000000?text=Seed",
    duration: "5 weeks",
    level: "Intermediate",
    price: 7500,
    playlist: [
      { id: 1, title: "Seed Saving Basics", videoUrl: "https://www.youtube.com/watch?v=WhOrIUlrnPo&pp=ygUeb3JnYW5pYyBmYXJtaW5nIGFuaW1hdGVk IHZpZGVv", isLocked: false },
      { id: 2, title: "Breeding Your Own Seeds", videoUrl: "https://www.youtube.com/watch?v=WhOrIUlrnPo&pp=ygUeb3JnYW5pYyBmYXJtaW5n IGFuaW1hdGVk IHZpZGVv", isLocked: true },
      { id: 3, title: "Maintaining Genetic Diversity", videoUrl: "https://www.youtube.com/watch?v=WhOrIUlrnPo&pp=ygUeb3JnYW5pYyBmYXJtaW5n IGFuaW1hdGVk IHZpZGVv", isLocked: true },
    ]
  },
];

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/shop' element={<ShopPage/>}></Route>
        <Route path='/shop/farming-essentials' element={<FarmingEssentialsProducts/>}></Route>
        <Route path='/shop/farm-produce' element={<FarmProduceProducts/>}></Route>
        <Route path='/products/:id' element={<ProductDetailsPage/>}></Route>
        <Route path='/cart' element={<CartPage/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
        <Route path='/privacy-policy' element={<PrivacyPolicyPage/>}></Route>
        <Route path='/terms-and-conditions' element={<TermsAndConditionsPage/>}></Route>
        <Route path='/contact-us' element={<ContactUsPage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/subsidies' element={<GovernmentSubsidies/>}></Route>
        <Route path='/inventory-management' element={<InventoryManagement/>}></Route>
        <Route path='/Courses' element={<Courses courses={courses}/>}></Route>
        <Route path='/courses/:id' element={<CourseDetailsPage courses={courses}/>}></Route>  {/* Course Details Page */}
        <Route path='/playlist/:id' element={<PlaylistPage courses={courses}/>}></Route>  {/* Playlist Page */}
    </Routes>
  )
}
