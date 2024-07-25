'use client'

import { useEffect, useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Logo from '../../Assests/Logo.png'
import { TransitionLink } from '@/app/utlis/TransitionLink'


const products = [
  { name: 'MCA Live Transfer Leads', description: 'Most effective way to increase your business', href: 'mca-live-transfer-leads', icon: ChartPieIcon },
  { name: 'MCA Callback Leads', description: 'Discover the power of MCA callback leads', href: 'mca-callback-leads', icon: CursorArrowRaysIcon },
  { name: 'Aged MCA Leads', description: 'Aged MCA Leads are the key to a budget-friendly solution', href: 'aged-mca-leads', icon: FingerPrintIcon },
  { name: 'MCA Digital Marketing Leads', description: 'Digital marketing leads can be complex, but we simplify it', href: 'digital-marketing-leads', icon: SquaresPlusIcon },
  { name: 'Real-Time Business Loan Leads', description: 'We have an exceptional importance to the lenders and brokers as per current market trends.', href: 'business-loan-leads', icon: ArrowPathIcon },
]


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [navbarColor, setNavbarColor] = useState('fixed top-20 right-10 left-10 mt-4');
  const [textColor , settextColor ] = useState('text-white')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarColor('fixed top-0 right-0 left-0 shadow transition-all');
        settextColor('text-white')
      } else {
        setNavbarColor('fixed top-20 right-10 left-10 mt-4');
        settextColor('text-white font-bold headerTransitionLinks transition-all')
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${navbarColor} themeBackground duration-300  z-20 `}>
      <nav aria-label="Global" className="mx-auto flex max-w-[65rem] items-center justify-between p-6 lg:px-8 py-8">
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
        <TransitionLink href="/" className={` font-semibold leading-6 ${textColor}`}>
            Home
          </TransitionLink>
          <Popover className="relative">
            <PopoverButton className={`flex items-center gap-x-1  font-semibold leading-6 ${textColor}`}>
              Services
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <TransitionLink href={item.href} className="block font-semibold text-black">
                        {item.name}
                        <span className="absolute inset-0" />
                      </TransitionLink>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>  
            </PopoverPanel>
          </Popover>
          <a href="#" className={` font-semibold leading-6 ${textColor}`}>
            Pricing
          </a>
          <TransitionLink href="/about" className={` font-semibold leading-6 ${textColor}`}>
            About Us
          </TransitionLink>
          <a href="/blog" className={` font-semibold leading-6 ${textColor}`}>
            Blog
          </a>
          <TransitionLink href="/contact-us" className={` font-semibold leading-6 ${textColor}`}>
            Contact
          </TransitionLink>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className={` font-semibold leading-6 ${textColor}`}>
            Get A Quote <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                width={600}
                height={600}
                alt=""
                src={Logo}
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-black hover:bg-gray-50">
                    Product
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-black hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-black hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}