import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-black py-32"
    >
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black pointer-events-none z-10"></div>
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Defining Modern Culinary Luxury
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Kelussia begins with Persian Blue Salt—but our vision extends to a curated portfolio of the world's rarest ingredients. Today, it's the blue that defines rarity. Tomorrow, it's the partnerships that define excellence.
          </p>
          <Button href="/register" color="blue" className="mt-10">
            Become a Partner
          </Button>
        </div>
      </Container>
    </section>
  )
}
