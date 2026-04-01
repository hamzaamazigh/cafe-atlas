import Hero from '@/src/components/Hero';
import WhyChooseUs from '@/src/components/WhyChooseUs';
import MenuPreview from '@/src/components/MenuPreview';
import Gallery from '@/src/components/Gallery';
import Reviews from '@/src/components/Reviews';
import Map from '@/src/components/Map';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <WhyChooseUs />
      <MenuPreview />
      <Gallery />
      <Reviews />
      <Map />
    </motion.div>
  );
}
