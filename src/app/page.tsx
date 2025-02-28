import Hero from '@/components/home/Hero'
import ServicesSection from '@/components/home/ServicesSection'
import ContactCTA from '@/components/home/ContactCTA'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white dark:bg-gray-900">
      <Hero />
      <ServicesSection />
      <ContactCTA />
    </main>
  )
}
