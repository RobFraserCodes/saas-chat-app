import PricingCards from '@/components/pricing-cards'
import { faqs } from '@/data/faqs'
import Image from 'next/image'

export default function PricingPage() {

  return (
    <div className="">
        
        {/* Pricing section */}
        <PricingCards />

        {/* Testimonial section */}
        <div className="mx-auto max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
                <Image 
                className="h-12 self-start" 
                src="https://tailwindui.com/img/logos/tuple-logo-white.svg" 
                alt="" 
                width={160}
                height={37}
                />
              <figure className="mt-10 flex flex-auto flex-col justify-between">
                <blockquote className="text-lg leading-8">
                  <p>
                    “Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare
                    arcu gravida natoque erat et cursus tortor consequat at. Vulputate gravida sociis enim nullam
                    ultricies habitant malesuada lorem ac. Tincidunt urna dui pellentesque sagittis.”
                  </p>
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-x-6">
                  <Image
                    className="h-14 w-14 rounded-full bg-gray-800"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    width={64}
                    height={64}
                  />
                  <div className="text-base">
                    <div className="font-semibold text-white">Judith Black</div>
                    <div className="mt-1 text-gray-400">CEO of Tuple</div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="flex flex-col border-t border-white/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
                <Image 
                className="h-12 self-start" 
                src="https://tailwindui.com/img/logos/reform-logo-white.svg" 
                alt="" 
                width={160}
                height={37}
                />
              <figure className="mt-10 flex flex-auto flex-col justify-between">
                <blockquote className="text-lg leading-8 text-white">
                  <p>
                    “Excepteur veniam labore ullamco eiusmod. Pariatur consequat proident duis dolore nulla veniam
                    reprehenderit nisi officia voluptate incididunt exercitation exercitation elit. Nostrud veniam sint
                    dolor nisi ullamco.”
                  </p>
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-x-6">
                  <Image
                    className="h-14 w-14 rounded-full bg-gray-800"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    width={64}
                    height={64}
                  />
                  <div className="text-base">
                    <div className="font-semibold text-white">Joseph Rodriguez</div>
                    <div className="mt-1 text-gray-400">CEO of Reform</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        {/* FAQ section */}
        <div className="mx-auto mt-24 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">Frequently asked questions</h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300">
            Have a different question and can’t find the answer you’re looking for? Reach out to our support team by{' '}
            <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
              sending us an email
            </a>{' '}
            and we’ll get back to you as soon as we can.
          </p>
          <div className="mt-20">
            <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <dt className="text-base font-semibold leading-7 text-white">{faq.question}</dt>
                  <dd className="mt-2 text-base leading-7 text-gray-300">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
    </div>
  )
}