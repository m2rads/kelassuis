import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export function Contact() {
  return (
    <div className="relative isolate bg-black">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black pointer-events-none z-10"></div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden lg:w-1/2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-black to-black"></div>
              <div
                aria-hidden="true"
                className="absolute top-[calc(50%-7rem)] -left-56 transform-gpu blur-3xl"
              >
                <div
                  style={{
                    clipPath:
                      'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
                  }}
                  className="aspect-1155/678 w-288.75 bg-gradient-to-br from-blue-900/30 to-blue-950/20 opacity-50"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black"></div>
            </div>
            <h2 className="text-4xl font-sentient tracking-tight text-pretty text-white sm:text-5xl">
              Become a Kelussia Partner
            </h2>
            <p className="mt-6 font-mono text-sm sm:text-base text-white/60">
              Elevate your culinary creations with Persian Blue Salt—the ingredient that tells stories before the first taste. Let's discuss how we can support your brand excellence.
            </p>
            <dl className="mt-10 space-y-4 font-mono text-base/7 text-white/80">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-white/60" />
                </dt>
                <dd>
                  Partnership Inquiries
                  <br />
                  Global Distribution
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon aria-hidden="true" className="h-7 w-6 text-white/60" />
                </dt>
                <dd>
                  <a href="tel:+1 (555) 234-5678" className="hover:text-white">
                    Available upon inquiry
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-white/60" />
                </dt>
                <dd>
                  <a href="mailto:partnerships@kelussia.com" className="hover:text-white">
                    partnerships@kelussia.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form action="#" method="POST" className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm/6 font-mono font-semibold text-white">
                  Contact Name
                </label>
                <div className="mt-2.5">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white/5 px-3.5 py-2 font-mono text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/40 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-900"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm/6 font-mono font-semibold text-white">
                  Company/Brand Name
                </label>
                <div className="mt-2.5">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white/5 px-3.5 py-2 font-mono text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/40 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-900"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm/6 font-mono font-semibold text-white">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md bg-white/5 px-3.5 py-2 font-mono text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/40 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-900"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm/6 font-mono font-semibold text-white">
                  Business Type
                </label>
                <div className="mt-2.5">
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="tel"
                    autoComplete="tel"
                    className="block w-full rounded-md bg-white/5 px-3.5 py-2 font-mono text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/40 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-900"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm/6 font-mono font-semibold text-white">
                  Partnership Details
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md bg-white/5 px-3.5 py-2 font-mono text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/40 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-900"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-blue-900 px-3.5 py-2.5 font-mono text-center text-sm font-semibold text-white shadow-xs hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
              >
                Submit Inquiry
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
