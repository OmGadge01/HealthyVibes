import Hero from "@/src/components/Hero"
import HowItWorks from "@/src/components/HowItWorks"
import MealPlans from "@/src/components/MealPlans"
import MenuPreview from "@/src/components//MenuPreview"
import Testimonials from "@/src/components/Testimonals"
import CTA from "@/src/components/CTA"
import Footer from "@/src/components/Footer"
import Navbar from "../components/Navbar"
import About from "../components/AboutUs"

export default function Home() {
 return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <HowItWorks />
      <MealPlans />
      <MenuPreview />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}
