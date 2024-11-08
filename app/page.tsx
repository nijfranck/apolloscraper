import React from "react";
import { Play, Download, Chrome, PlayCircle } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Announcement Bar */}
      <div className="bg-[#00A693] p-3 text-center text-white">
        <span className="text-sm font-medium">
          Get Lifetime License for just $49 - Limited Period Offer
        </span>
        <button className="ml-4 rounded-full bg-[#FFD700] px-4 py-1 text-xs font-bold text-black hover:bg-yellow-400">
          Buy Now
        </button>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex items-center space-x-2">
              <div className="h-1 w-8 bg-[#FFD700]"></div>
              <span className="font-semibold text-[#00A693]">
                Chrome Extension
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-6xl">
              Apollo Lead
              <span className="text-[#00A693]"> Scraper</span>
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              Save hours on Apollo.io by automating your lead generation process
            </p>
            <div className="space-y-4">
              <button className="w-full rounded-lg bg-[#00A693] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-teal-600 sm:w-auto">
                Download Apollo Scraper Chrome Extension
              </button>
            </div>
          </div>

          {/* Right Column */}
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

      {/* How It Works Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            How Apollo Lead Scraper Works?
          </h2>

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

      {/* Final CTA */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="rounded-2xl bg-[#00A693] p-12">
          <h2 className="mb-6 text-3xl font-bold text-white">
            Buy a Lifetime License for just $49
          </h2>
          <button className="rounded-lg bg-[#FFD700] px-8 py-4 text-lg font-semibold text-black shadow-lg transition-all hover:bg-yellow-400">
            Buy Now for Just $49
          </button>
        </div>
      </div>
    </div>
  );
};

// Features and steps data remain the same as before
const features = [
  {
    title: "Bypass Export Limit",
    description:
      "No more 25 selection limit. Get unlimited leads from your Apollo.io searches.",
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
    title: "Export Data Faster",
    description:
      "Manual exports are time-consuming. Our tool automates the entire process.",
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
    title: "100% Automated",
    description:
      "Set your parameters and let our extension handle the rest automatically.",
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
    title: "Save Time & Costs",
    description:
      "Maximize your efficiency and reduce manual work with automated scraping.",
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
      "Once the Chrome Extension is installed, open Apollo, go to Search > People and apply the required filters. Click on 'Net New' tab and open the Apollo Lead Scraper Chrome extension. Enter the number of pages to scrape along with the 'Name of the list'. Then click 'Start' and wait until it finishes the task. For best performance, limit scraping to a maximum of 50 pages at once.",
    icon: <PlayCircle className="h-6 w-6" />,
  },
];

export default LandingPage;
