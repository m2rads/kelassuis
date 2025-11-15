const incentives = [
  {
    name: 'Competitive Differentiation',
    description: 'Add a globally rare ingredient that signals commitment to quality and culinary innovation.',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-delivery-light.svg',
  },
  {
    name: 'Brand Elevation',
    description: 'Persian Blue Salt becomes a signature element in your brand identity and storytelling.',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-chat-light.svg',
  },
  {
    name: 'Visual Impact',
    description: 'Creates Instagram-worthy plating moments and elevates brand presentation naturally.',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-fast-checkout-light.svg',
  },
  {
    name: 'Professional Assurance',
    description: 'Fully documented sourcing and consistent supply chain. Traceable provenance you can trust.',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-gift-card-light.svg',
  },
]

export function SecondaryFeatures() {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-white">
                Transform Your Culinary Offering
              </h2>
              <p className="mt-4 text-white/80">
                Add a globally rare ingredient that commands attention, storytelling, and premium pricing. Your competitors source standard ingredients. You source geological art.
              </p>
            </div>
            <img
              alt=""
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/incentives-07-hero.jpg"
              className="aspect-3/2 w-full rounded-lg bg-white/5 object-cover"
            />
          </div>
          <div className="bg-black">
            <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
              <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
                {incentives.map((incentive) => (
                  <div key={incentive.name}>
                    <img alt="" src={incentive.imageSrc} className="h-24 w-auto" />
                    <h3 className="mt-6 text-sm font-medium text-white">{incentive.name}</h3>
                    <p className="mt-2 text-sm text-white/60">{incentive.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}