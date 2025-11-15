import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'What makes Persian Blue Salt unique?',
      answer:
        'Persian Blue Salt is a geological rarity with natural blue crystalline structure. No dyes or additives—just pure, hand-mined mineral complexity that creates visual drama and culinary distinction.',
    },
    {
      question: 'Who are your ideal partners?',
      answer: 'We partner with Michelin-starred restaurants, gourmet product brands, luxury distributors, and culinary innovators who value authenticity, rarity, and storytelling in their offerings.',
    },
    {
      question: 'What is the minimum order quantity?',
      answer:
        'Minimum orders vary based on packaging format and destination. Contact us to discuss your volume needs and we\'ll create a custom solution that fits your operational requirements.',
    },
  ],
  [
    {
      question: 'How do you ensure quality and authenticity?',
      answer:
        'Every batch is hand-selected from verified ancient salt deposits. We maintain full traceability from source to delivery, with complete documentation and quality assurance protocols.',
    },
    {
      question:
        'Can you provide custom packaging or white-label solutions?',
      answer:
        'Yes. We offer bulk professional formats, custom packaging, white-label options, and co-branding opportunities designed for brand integration and operational efficiency.',
    },
    {
      question:
        'What is the delivery timeline for new partnerships?',
      answer:
        'Initial consultation to first delivery typically ranges from 2-4 weeks, depending on volume, packaging requirements, and destination. We prioritize reliability and documentation.',
    },
  ],
  [
    {
      question: 'How is the flavor profile different from regular salt?',
      answer:
        'Persian Blue Salt offers mineral-rich complexity with subtle depth that enhances dishes without overpowering. The flavor is distinctive yet balanced—perfect for professional culinary applications.',
    },
    {
      question: 'Do you offer seasonal availability or limited runs?',
      answer: 'As a naturally hand-mined product, availability can fluctuate. Partnership clients receive priority access and advance notice of seasonal trends and supply updates.',
    },
    {
      question: 'How do I start a partnership inquiry?',
      answer:
        'Submit a partnership inquiry through our contact form with your company details, business type, and volume needs. We\'ll schedule a consultation to discuss your culinary vision and supply strategy.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-black py-20 sm:py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-black to-blue-900/10" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black pointer-events-none z-10"></div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-white sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white/80">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg/7 text-white">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-white/60">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
