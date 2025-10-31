import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import FeatureCards from '@/components/FeatureCards'
import InteractiveDemo from '@/components/InteractiveDemo'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <FeatureCards />
      <InteractiveDemo />
    </Layout>
  )
}