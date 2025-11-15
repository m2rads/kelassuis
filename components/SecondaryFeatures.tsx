const incentives = [
  {
    name: 'Free Shipping',
    description: 'Complimentary shipping on all partnership orders. Fast, reliable delivery to your location.',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-delivery-light.svg',
  },
  {
    name: '24/7 Customer Service',
    description: 'Dedicated partnership support available around the clock for all your inquiries and needs.',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-chat-light.svg',
  },
  {
    name: 'Fast Shipping',
    description: 'Expedited fulfillment and processing to ensure your Persian Blue Salt arrives when you need it.',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-fast-checkout-light.svg',
  },
  {
    name: 'Amazing Deals on Bulk Purchase',
    description: 'Exclusive volume pricing for professional kitchens and brands. Better rates as you scale.',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce/icons/icon-gift-card-light.svg',
  },
]

import secondaryFeaturesImage from '@/images/secondaryfeature.jpeg'
import Image from 'next/image'

export function SecondaryFeatures() {
  return (
    <div className="relative bg-black">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="bg-black">
            <div className="mx-auto max-w-2xl px-4 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="grid grid-cols-1 gap-y-16 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4 lg:gap-x-12">
                {incentives.map((incentive) => (
                  <div key={incentive.name}>
                    <img alt="" src={incentive.imageSrc} className="h-24 w-auto" />
                    <h3 className="mt-6 text-sm font-mono font-medium text-white">{incentive.name}</h3>
                    <p className="mt-2 text-sm font-mono text-white/60">{incentive.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <Image
              alt=""
              src={secondaryFeaturesImage}
              width={800}
              height={800}
              className="w-full max-h-[600px] rounded-lg bg-white/5 object-cover"
            />
            <div>
              <h2 className="text-4xl font-sentient tracking-tight text-white">
                Transform Your Culinary Offering
              </h2>
              <p className="mt-4 font-mono text-sm sm:text-base text-white/60">
                Add a globally rare ingredient that commands attention, storytelling, and premium pricing. Your competitors source standard ingredients. You source geological art.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
    </div>
  )
}