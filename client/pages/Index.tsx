import { useState } from "react";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const navigationItems = [
  //  { label: "Home", href: "#home" },
    //{ label: "About Us", href: "#about" },
 //   { label: "Convergence", href: "#convergence" },
   // { label: "Resources", href: "#resources" },
  // ];

  return (
    <div className="min-h-screen bg-white">
      {/* Modern Sticky Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-black shadow-sm">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/a4affbe34d2c1e7bd754780b389d2ef0fe9d92eb?width=644"
                alt="Black Undergraduate Coalition"
                className="h-24 md:h-16 w-auto"
              />
            </div>

            {/* Desktop Navigation Menu */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white font-medium hover:text-gray-300 transition-all duration-200 relative group text-sm lg:text-base"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Desktop Social Icons */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              <a
                href="https://www.linkedin.com/company/black-undergraduate-coalition"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                <svg
                  className="w-7 h-7 lg:w-8 lg:h-8"
                  viewBox="0 0 62 62"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M41.3334 20.6666C45.4443 20.6666 49.3868 22.2997 52.2936 25.2065C55.2004 28.1133 56.8334 32.0558 56.8334 36.1666V54.25H46.5001V36.1666C46.5001 34.7963 45.9557 33.4822 44.9868 32.5132C44.0179 31.5443 42.7037 31 41.3334 31C39.9631 31 38.649 31.5443 37.68 32.5132C36.7111 33.4822 36.1667 34.7963 36.1667 36.1666V54.25H25.8334V36.1666C25.8334 32.0558 27.4664 28.1133 30.3733 25.2065C33.2801 22.2997 37.2226 20.6666 41.3334 20.6666Z"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.5001 23.25H5.16675V54.25H15.5001V23.25Z"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.3334 15.5C13.1869 15.5 15.5001 13.1868 15.5001 10.3333C15.5001 7.47982 13.1869 5.16663 10.3334 5.16663C7.47994 5.16663 5.16675 7.47982 5.16675 10.3333C5.16675 13.1868 7.47994 15.5 10.3334 15.5Z"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/blackundergraduatecoalition/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                <svg
                  className="w-7 h-7 lg:w-8 lg:h-8"
                  viewBox="0 0 63 63"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44.625 5.25H18.375C11.1263 5.25 5.25 11.1263 5.25 18.375V44.625C5.25 51.8737 11.1263 57.75 18.375 57.75H44.625C51.8737 57.75 57.75 51.8737 57.75 44.625V18.375C57.75 11.1263 51.8737 5.25 44.625 5.25Z"
                    fill="currentColor"
                  />
                  <path
                    d="M42 29.8463C42.324 32.0309 41.9508 34.2621 40.9336 36.2224C39.9164 38.1828 38.307 39.7725 36.3343 40.7654C34.3615 41.7583 32.1259 42.1039 29.9454 41.7531C27.765 41.4022 25.7506 40.3727 24.189 38.811C22.6273 37.2494 21.5978 35.235 21.2469 33.0546C20.8961 30.8741 21.2417 28.6385 22.2346 26.6657C23.2275 24.693 24.8172 23.0836 26.7776 22.0664C28.7379 21.0492 30.9691 20.676 33.1537 21C35.3822 21.3304 37.4452 22.3688 39.0382 23.9618C40.6312 25.5548 41.6696 27.6178 42 29.8463Z"
                    fill="white"
                  />
                  <path
                    d="M45.9375 17.0625H45.9638M18.375 5.25H44.625C51.8737 5.25 57.75 11.1263 57.75 18.375V44.625C57.75 51.8737 51.8737 57.75 44.625 57.75H18.375C11.1263 57.75 5.25 51.8737 5.25 44.625V18.375C5.25 11.1263 11.1263 5.25 18.375 5.25ZM42 29.8462C42.324 32.0309 41.9508 34.2621 40.9336 36.2224C39.9164 38.1828 38.307 39.7725 36.3343 40.7654C34.3615 41.7583 32.1259 42.1039 29.9454 41.7531C27.765 41.4022 25.7506 40.3727 24.189 38.811C22.6273 37.2494 21.5978 35.235 21.2469 33.0546C20.8961 30.8741 21.2417 28.6385 22.2346 26.6657C23.2275 24.693 24.8172 23.0836 26.7776 22.0664C28.7379 21.0492 30.9691 20.676 33.1538 21C35.3822 21.3304 37.4452 22.3688 39.0382 23.9618C40.6312 25.5548 41.6696 27.6178 42 29.8462Z"
                    stroke="#1E1E1E"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href="mailto:info@blackundergraduatecoalition.com"
                aria-label="Email"
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                <svg
                  className="w-7 h-7 lg:w-8 lg:h-8"
                  viewBox="0 0 59 59"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M46.7084 19.6666C44.6598 19.6666 42.9185 18.9496 41.4845 17.5156C40.0504 16.0816 39.3334 14.3402 39.3334 12.2916C39.3334 10.243 40.0504 8.5017 41.4845 7.06767C42.9185 5.63364 44.6598 4.91663 46.7084 4.91663C48.757 4.91663 50.4983 5.63364 51.9324 7.06767C53.3664 8.5017 54.0834 10.243 54.0834 12.2916C54.0834 14.3402 53.3664 16.0816 51.9324 17.5156C50.4983 18.9496 48.757 19.6666 46.7084 19.6666ZM9.83342 49.1666C8.48133 49.1666 7.32387 48.6852 6.36102 47.7224C5.39817 46.7595 4.91675 45.602 4.91675 44.25V14.75C4.91675 13.3979 5.39817 12.2404 6.36102 11.2776C7.32387 10.3147 8.48133 9.83329 9.83342 9.83329H34.6626C34.4987 10.6527 34.4167 11.4722 34.4167 12.2916C34.4167 13.1111 34.4987 13.9305 34.6626 14.75C34.9494 16.0611 35.4206 17.28 36.0761 18.4067C36.7317 19.5335 37.5306 20.527 38.473 21.3875L29.5001 27.0416L9.83342 14.75V19.6666L29.5001 31.9583L42.4678 23.8458C43.1643 24.0916 43.8608 24.276 44.5574 24.3989C45.2539 24.5218 45.9709 24.5833 46.7084 24.5833C48.0195 24.5833 49.3102 24.3784 50.5803 23.9687C51.8504 23.559 53.0181 22.9444 54.0834 22.125V44.25C54.0834 45.602 53.602 46.7595 52.6391 47.7224C51.6763 48.6852 50.5188 49.1666 49.1668 49.1666H9.83342Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>

            {/* Mobile Hamburger Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-900 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-3 border-t border-gray-700 pt-4 animate-in fade-in slide-in-from-top-2">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2 text-white hover:bg-gray-900 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex gap-4 px-4 pt-2">
                <a
                  href="https://www.linkedin.com/company/black-undergraduate-coalition"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 62 62"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M41.3334 20.6666C45.4443 20.6666 49.3868 22.2997 52.2936 25.2065C55.2004 28.1133 56.8334 32.0558 56.8334 36.1666V54.25H46.5001V36.1666C46.5001 34.7963 45.9557 33.4822 44.9868 32.5132C44.0179 31.5443 42.7037 31 41.3334 31C39.9631 31 38.649 31.5443 37.68 32.5132C36.7111 33.4822 36.1667 34.7963 36.1667 36.1666V54.25H25.8334V36.1666C25.8334 32.0558 27.4664 28.1133 30.3733 25.2065C33.2801 22.2997 37.2226 20.6666 41.3334 20.6666Z"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.5001 23.25H5.16675V54.25H15.5001V23.25Z"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.3334 15.5C13.1869 15.5 15.5001 13.1868 15.5001 10.3333C15.5001 7.47982 13.1869 5.16663 10.3334 5.16663C7.47994 5.16663 5.16675 7.47982 5.16675 10.3333C5.16675 13.1868 7.47994 15.5 10.3334 15.5Z"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/blackundergraduatecoalition/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 63 63"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M44.625 5.25H18.375C11.1263 5.25 5.25 11.1263 5.25 18.375V44.625C5.25 51.8737 11.1263 57.75 18.375 57.75H44.625C51.8737 57.75 57.75 51.8737 57.75 44.625V18.375C57.75 11.1263 51.8737 5.25 44.625 5.25Z"
                      fill="currentColor"
                    />
                    <path
                      d="M42 29.8463C42.324 32.0309 41.9508 34.2621 40.9336 36.2224C39.9164 38.1828 38.307 39.7725 36.3343 40.7654C34.3615 41.7583 32.1259 42.1039 29.9454 41.7531C27.765 41.4022 25.7506 40.3727 24.189 38.811C22.6273 37.2494 21.5978 35.235 21.2469 33.0546C20.8961 30.8741 21.2417 28.6385 22.2346 26.6657C23.2275 24.693 24.8172 23.0836 26.7776 22.0664C28.7379 21.0492 30.9691 20.676 33.1537 21C35.3822 21.3304 37.4452 22.3688 39.0382 23.9618C40.6312 25.5548 41.6696 27.6178 42 29.8463Z"
                      fill="white"
                    />
                    <path
                      d="M45.9375 17.0625H45.9638M18.375 5.25H44.625C51.8737 5.25 57.75 11.1263 57.75 18.375V44.625C57.75 51.8737 51.8737 57.75 44.625 57.75H18.375C11.1263 57.75 5.25 51.8737 5.25 44.625V18.375C5.25 11.1263 11.1263 5.25 18.375 5.25ZM42 29.8462C42.324 32.0309 41.9508 34.2621 40.9336 36.2224C39.9164 38.1828 38.307 39.7725 36.3343 40.7654C34.3615 41.7583 32.1259 42.1039 29.9454 41.7531C27.765 41.4022 25.7506 40.3727 24.189 38.811C22.6273 37.2494 21.5978 35.235 21.2469 33.0546C20.8961 30.8741 21.2417 28.6385 22.2346 26.6657C23.2275 24.693 24.8172 23.0836 26.7776 22.0664C28.7379 21.0492 30.9691 20.676 33.1538 21C35.3822 21.3304 37.4452 22.3688 39.0382 23.9618C40.6312 25.5548 41.6696 27.6178 42 29.8462Z"
                      stroke="#1E1E1E"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                <a
                  href="mailto:info@blackundergraduatecoalition.com"
                  aria-label="Email"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 59 59"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M46.7084 19.6666C44.6598 19.6666 42.9185 18.9496 41.4845 17.5156C40.0504 16.0816 39.3334 14.3402 39.3334 12.2916C39.3334 10.243 40.0504 8.5017 41.4845 7.06767C42.9185 5.63364 44.6598 4.91663 46.7084 4.91663C48.757 4.91663 50.4983 5.63364 51.9324 7.06767C53.3664 8.5017 54.0834 10.243 54.0834 12.2916C54.0834 14.3402 53.3664 16.0816 51.9324 17.5156C50.4983 18.9496 48.757 19.6666 46.7084 19.6666ZM9.83342 49.1666C8.48133 49.1666 7.32387 48.6852 6.36102 47.7224C5.39817 46.7595 4.91675 45.602 4.91675 44.25V14.75C4.91675 13.3979 5.39817 12.2404 6.36102 11.2776C7.32387 10.3147 8.48133 9.83329 9.83342 9.83329H34.6626C34.4987 10.6527 34.4167 11.4722 34.4167 12.2916C34.4167 13.1111 34.4987 13.9305 34.6626 14.75C34.9494 16.0611 35.4206 17.28 36.0761 18.4067C36.7317 19.5335 37.5306 20.527 38.473 21.3875L29.5001 27.0416L9.83342 14.75V19.6666L29.5001 31.9583L42.4678 23.8458C43.1643 24.0916 43.8608 24.276 44.5574 24.3989C45.2539 24.5218 45.9709 24.5833 46.7084 24.5833C48.0195 24.5833 49.3102 24.3784 50.5803 23.9687C51.8504 23.559 53.0181 22.9444 54.0834 22.125V44.25C54.0834 45.602 53.602 46.7595 52.6391 47.7224C51.6763 48.6852 50.5188 49.1666 49.1668 49.1666H9.83342Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[650px] lg:h-[900px] overflow-hidden">
        {/* Background Image */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/325d1d9edd703e9ba13cdb95390a92c8265323f1?width=2940"
          alt="BUC Conference"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Content */}
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 h-full flex flex-col justify-end pb-16 md:pb-24 lg:pb-32">
          <h1
            className="text-white font-bold text-3xl md:text-5xl lg:text-[64px] leading-[120%] tracking-[-0.02em] mb-8 md:mb-12 lg:mb-14 animate-fade-in-up"
            style={{ maxWidth: "1097px" }}
          >
            Building The Next Generation of Black Leaders in Canada
          </h1>

          <a
            href="mailto:info@blackundergraduatecoalition.com"
            target="_blank"
            className="bg-buc-button text-white font-bold text-lg md:text-xl px-8 md:px-10 py-3 md:py-4 rounded-xl hover:bg-buc-button/90 hover:shadow-lg transform hover:scale-105 transition-all duration-300 w-fit inline-block"
          >
            Contact us
          </a>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-20 md:py-28 lg:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-buc-black font-bold text-4xl md:text-5xl lg:text-6xl leading-[130%] tracking-[-0.02em] text-center mb-8 md:mb-12">
            Black Students Pushing National Dialogue
          </h2>

          <p className="text-gray-700 text-lg md:text-xl lg:text-2xl leading-[160%] text-center max-w-4xl mx-auto">
            The Black Undergraduate Coalition (BUC) is a national platform that
            connects Black students and Black student groups across Canada to
            support leadership, advocacy, and collective growth. Guided by the
            principles of the Scarborough Charter on Anti-Black Racism and Black
            Inclusion, BUC works to uphold institutional accountability while
            creating pathways for Black students to flourish academically,
            professionally, and socially.
          </p>
        </div>
      </section>

      {/* Stats Cards Section */}
      <section className="bg-gray-50 py-20 md:py-28 lg:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Card 1 - Students */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:translate-y-[-4px]">
              <div className="relative h-64 lg:h-72 overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/c6a3a0354d52bc9c52b96079b5e3ffcf7c59b306?width=764"
                  alt="Students at conference"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 lg:p-10 flex-grow flex items-center justify-center">
                <h3 className="text-gray-900 font-bold text-3xl lg:text-4xl leading-tight text-center">
                  350 Students <span className="text-buc-black">Nation-wide</span>
                </h3>
              </div>
            </div>

            {/* Card 2 - Universities */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:translate-y-[-4px]">
              <div className="relative h-64 lg:h-72 overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/c27ac612d0b3c9a49d53ae1c55e3a278f80bdb10?width=764"
                  alt="University students"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 lg:p-10 flex-grow flex items-center justify-center">
                <h3 className="text-gray-900 font-bold text-3xl lg:text-4xl leading-tight text-center">
                  <span className="text-buc-black">25+</span> Universities
                </h3>
              </div>
            </div>

            {/* Card 3 - Platform */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:translate-y-[-4px]">
              <div className="relative h-64 lg:h-72 overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/6403224d0868c745d4a580057cbab3c54b50a7b4?width=764"
                  alt="Platform members"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 lg:p-10 flex-grow flex items-center justify-center">
                <h3 className="text-gray-900 font-bold text-3xl lg:text-4xl leading-tight text-center">
                  1 <span className="text-buc-black">Nation-Wide</span> Platform
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email CTA Section */}
      <section className="bg-buc-black py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1440px] mx-auto flex flex-col items-center">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-white font-bold text-3xl md:text-5xl lg:text-[56px] leading-[130%] tracking-[-0.02em] mb-2">
              Stay Connected
            </h2>
            <p className="text-gray-400 text-lg md:text-xl">
              Join thousands of Black students across Canada
            </p>
          </div>
          <a
            href="https://groups.google.com/a/blackundergraduatecoalition.com/g/emaillist-black-undergraduate-coalition"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-buc-black font-bold text-lg md:text-xl px-10 md:px-14 py-4 md:py-5 rounded-xl hover:bg-gray-100 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-block"
          >
            Join our Email List
          </a>
        </div>
      </section>
    </div>
  );
}
