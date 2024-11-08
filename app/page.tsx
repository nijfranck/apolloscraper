import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Play, Download, Chrome, PlayCircle } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Announcement Bar */}
      <div className="bg-[#00A693] p-3 text-center text-white">
        <Link
          href="https://buy.stripe.com/9AQ9DN9Krerr8FyfZm"
          className="text-sm font-medium"
        >
          Download Now - Lifetime Access for just $49
        </Link>
        <Link href="https://buy.stripe.com/9AQ9DN9Krerr8FyfZm">
          <button className="ml-4 rounded-full bg-[#FFD700] px-4 py-1 text-xs font-bold text-black hover:bg-yellow-400">
            Get Extension
          </button>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex items-center space-x-2">
              <div className="h-1 w-8 bg-[#FFD700]"></div>
              <span className="font-semibold text-[#00A693]">
                CHROME EXTENSION
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-6xl">
              Supercharge Your
              <span className="text-[#00A693]"> Apollo.io</span>
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              Stop wasting time with manual exports. Our Chrome extension
              bypasses Apollo&apos;s limits and automates your lead generation
              process in seconds.
            </p>
            <div className="flex flex-col items-start space-y-2">
              <div className="flex flex-col space-y-2">
                <div className="relative inline-flex">
                  <Link href="https://buy.stripe.com/9AQ9DN9Krerr8FyfZm">
                    <button className="w-full rounded-lg bg-[#00A693] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-teal-600 sm:w-auto">
                      Add to Chrome for{" "}
                      <span className="line-through mr-2 opacity-70 ">$79</span>
                      $49
                    </button>
                  </Link>
                  <div className="absolute -right-2 -top-3 z-10">
                    <div className="flex items-center justify-center rounded-full bg-yellow-400 px-3 py-1 text-sm font-bold text-black shadow-md">
                      Save $30
                    </div>
                  </div>
                </div>
                <span className="flex items-center text-sm text-gray-600">
                  <svg
                    className="mr-1.5 h-4 w-4 text-[#00A693]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  One-time payment, unlimited usage forever
                </span>
              </div>
              <div className="flex flex-col space-y-4">
                {/* Trust Indicators */}
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    {/* User Avatars - using placeholder images */}
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="relative h-8 w-8 rounded-full border-2 border-white bg-gray-200"
                        aria-hidden="true"
                      >
                        <Image
                          src={`/testimonials/profile${i + 1}.png`}
                          alt=""
                          layout="fill"
                          className="rounded-full"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">Join 2,000+ users</span>{" "}
                    already saving time
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <svg
                      className="mr-1.5 h-4 w-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    4.9/5 rating
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="mr-1.5 h-4 w-4 text-[#00A693]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Instant Setup
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="mr-1.5 h-4 w-4 text-[#00A693]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    Secure payment
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="flex items-center text-sm text-gray-500">
                  <div className="relative mr-2 h-2 w-2">
                    <div className="absolute h-2 w-2 rounded-full bg-green-400"></div>
                    <div className="absolute h-2 w-2 animate-ping rounded-full bg-green-400"></div>
                  </div>
                  <span>
                    <span className="font-medium">28 people</span> downloaded in
                    the last 24 hours
                  </span>
                </div>

                {/* Mini Testimonial */}
                <div className="rounded-lg bg-gray-50 p-3 text-sm text-gray-600">
                  <div className="flex items-center">
                    <svg
                      className="mr-1 h-3 w-3 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-medium">John D.</span>
                    <span className="mx-2">·</span>
                    <span className="text-gray-400">Sales Manager</span>
                  </div>
                  <p className="mt-1">
                    &quot;Saved me 4 hours per day on lead generation. Best
                    investment for my sales workflow.&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Social Proof Section */}
          </div>

          {/* Logo Section remains the same */}
          <div className="flex items-center justify-center">
            <div className="relative h-96 w-full">
              {/* Chrome Extension logo as base layer */}
              <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform">
                <img
                  src="/chrome.png"
                  alt="Chrome Extension"
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Apollo logo positioned inside the puzzle piece circle */}
              <div className="absolute left-[calc(50%+106px)] top-[calc(50%+100px)] h-[110px] w-[110px] -translate-x-1/2 -translate-y-1/2 transform">
                <img
                  src="/apollo.png"
                  alt="Apollo.io"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-xl border-2 border-gray-100 bg-white p-6 text-center transition-all hover:border-[#00A693]"
            >
              <div className="mb-4 flex justify-center">
                <div className="rounded-lg bg-gray-50 p-3">
                  <div className="text-[#00A693]">{feature.icon}</div>
                </div>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works Section - Updated descriptions */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900">
            Install in Minutes
          </h2>
          <p className="mb-12 text-center text-gray-600">
            Quick setup, instant results. Start generating more leads today.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="rounded-xl bg-white p-6 shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD700]">
                  <div className="text-black">{step.icon}</div>
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  Step {index + 1}: {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
                {step.note && (
                  <div className="mt-4 rounded-lg bg-gray-50 p-3">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Important: </span>
                      {step.note}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA - Updated for extension focus */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="rounded-2xl bg-[#00A693] p-12">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Ready to Scale Your Lead Generation?
          </h2>
          <p className="mb-8 text-lg text-white opacity-90">
            Join thousands of sales professionals already using our extension
          </p>
          <Link href="https://buy.stripe.com/9AQ9DN9Krerr8FyfZm">
            <button className="rounded-lg bg-[#FFD700] px-8 py-4 text-lg font-semibold text-black shadow-lg transition-all hover:bg-yellow-400">
              Download Extension - $49 Lifetime Access
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Updated Features data
const features = [
  {
    title: "No More Limits",
    description:
      "Break free from Apollo's 25 contact export limit. Export unlimited leads with one click.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
  {
    title: "10x Faster Exports",
    description:
      "What takes hours manually now takes minutes. Automated scraping saves you precious time.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "One-Click Export",
    description:
      "Set your parameters once and let the extension handle everything automatically.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Lifetime Access",
    description:
      "One-time payment of $49. No subscriptions, no hidden fees, unlimited usage forever.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

// Steps data remains largely the same, but with clearer instructions

// Steps data remains the same
const steps = [
  {
    title: "Download & unzip the Chrome Extension",
    description:
      "After you purchase the Chrome Extension, you will receive a zip file. Download and unzip (detailed instructions for Windows and MacOS) the file to your computer.",
    icon: <Download className="h-6 w-6" />,
    note: "You must remove your current version of the extension before proceeding. Right-click on the extension's icon and click 'Remove from Chrome'.",
  },
  {
    title: "Install the Chrome Extension",
    description:
      "Click on the extensions icon (puzzle) on the top of your Chrome window, then click on 'Manage Extensions'. Go to the top right of the extensions manager page and click on 'Developer Mode' to activate it. Click on 'Load unpacked' and select the folder you previously unzipped. Keep the folder in that directory because if you delete it, the extension will not work.",
    icon: <Chrome className="h-6 w-6" />,
  },
  {
    title: "Run the Chrome Extension",
    description:
      "Once the Chrome Extension is installed, open Apollo, go to Search > People and apply the required filters. Click on 'Net New' tab and open the Apollo Contact Scraper Chrome extension. Press 'Scrape all Pages' on the extension popup. Then wait until it finishes the task. When it is finished, you will be prompted to download the CSV. For best performance, limit scraping to a maximum of 50 pages at once.",
    icon: <PlayCircle className="h-6 w-6" />,
  },
];

export default LandingPage;
