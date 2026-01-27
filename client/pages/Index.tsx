export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-buc-black py-8 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/a4affbe34d2c1e7bd754780b389d2ef0fe9d92eb?width=644" 
              alt="Black Undergraduate Coalition" 
              className="h-16 md:h-20 lg:h-[133px] w-auto"
            />
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/black-undergraduate-coalition"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:opacity-80 transition-opacity"
              style={{ cursor: 'pointer', pointerEvents: 'auto' }}
            >
              <svg className="w-10 h-10 md:w-12 md:h-12 lg:w-[62px] lg:h-[62px]" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M41.3334 20.6666C45.4443 20.6666 49.3868 22.2997 52.2936 25.2065C55.2004 28.1133 56.8334 32.0558 56.8334 36.1666V54.25H46.5001V36.1666C46.5001 34.7963 45.9557 33.4822 44.9868 32.5132C44.0179 31.5443 42.7037 31 41.3334 31C39.9631 31 38.649 31.5443 37.68 32.5132C36.7111 33.4822 36.1667 34.7963 36.1667 36.1666V54.25H25.8334V36.1666C25.8334 32.0558 27.4664 28.1133 30.3733 25.2065C33.2801 22.2997 37.2226 20.6666 41.3334 20.6666Z" stroke="#F3F3F3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.5001 23.25H5.16675V54.25H15.5001V23.25Z" stroke="#F3F3F3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.3334 15.5C13.1869 15.5 15.5001 13.1868 15.5001 10.3333C15.5001 7.47982 13.1869 5.16663 10.3334 5.16663C7.47994 5.16663 5.16675 7.47982 5.16675 10.3333C5.16675 13.1868 7.47994 15.5 10.3334 15.5Z" stroke="#F3F3F3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/blackundergraduatecoalition/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:opacity-80 transition-opacity"
            >
              <svg className="w-10 h-10 md:w-12 md:h-12 lg:w-[63px] lg:h-[63px]" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M44.625 5.25H18.375C11.1263 5.25 5.25 11.1263 5.25 18.375V44.625C5.25 51.8737 11.1263 57.75 18.375 57.75H44.625C51.8737 57.75 57.75 51.8737 57.75 44.625V18.375C57.75 11.1263 51.8737 5.25 44.625 5.25Z" fill="white"/>
                <path d="M42 29.8463C42.324 32.0309 41.9508 34.2621 40.9336 36.2224C39.9164 38.1828 38.307 39.7725 36.3343 40.7654C34.3615 41.7583 32.1259 42.1039 29.9454 41.7531C27.765 41.4022 25.7506 40.3727 24.189 38.811C22.6273 37.2494 21.5978 35.235 21.2469 33.0546C20.8961 30.8741 21.2417 28.6385 22.2346 26.6657C23.2275 24.693 24.8172 23.0836 26.7776 22.0664C28.7379 21.0492 30.9691 20.676 33.1537 21C35.3822 21.3304 37.4452 22.3688 39.0382 23.9618C40.6312 25.5548 41.6696 27.6178 42 29.8463Z" fill="white"/>
                <path d="M45.9375 17.0625H45.9638M18.375 5.25H44.625C51.8737 5.25 57.75 11.1263 57.75 18.375V44.625C57.75 51.8737 51.8737 57.75 44.625 57.75H18.375C11.1263 57.75 5.25 51.8737 5.25 44.625V18.375C5.25 11.1263 11.1263 5.25 18.375 5.25ZM42 29.8462C42.324 32.0309 41.9508 34.2621 40.9336 36.2224C39.9164 38.1828 38.307 39.7725 36.3343 40.7654C34.3615 41.7583 32.1259 42.1039 29.9454 41.7531C27.765 41.4022 25.7506 40.3727 24.189 38.811C22.6273 37.2494 21.5978 35.235 21.2469 33.0546C20.8961 30.8741 21.2417 28.6385 22.2346 26.6657C23.2275 24.693 24.8172 23.0836 26.7776 22.0664C28.7379 21.0492 30.9691 20.676 33.1538 21C35.3822 21.3304 37.4452 22.3688 39.0382 23.9618C40.6312 25.5548 41.6696 27.6178 42 29.8462Z" stroke="#1E1E1E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:info@blackundergraduatecoalition.com"
              aria-label="Email"
              className="hover:opacity-80 transition-opacity"
            >
              <svg className="w-10 h-10 md:w-12 md:h-12 lg:w-[59px] lg:h-[59px]" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M46.7084 19.6666C44.6598 19.6666 42.9185 18.9496 41.4845 17.5156C40.0504 16.0816 39.3334 14.3402 39.3334 12.2916C39.3334 10.243 40.0504 8.5017 41.4845 7.06767C42.9185 5.63364 44.6598 4.91663 46.7084 4.91663C48.757 4.91663 50.4983 5.63364 51.9324 7.06767C53.3664 8.5017 54.0834 10.243 54.0834 12.2916C54.0834 14.3402 53.3664 16.0816 51.9324 17.5156C50.4983 18.9496 48.757 19.6666 46.7084 19.6666ZM9.83342 49.1666C8.48133 49.1666 7.32387 48.6852 6.36102 47.7224C5.39817 46.7595 4.91675 45.602 4.91675 44.25V14.75C4.91675 13.3979 5.39817 12.2404 6.36102 11.2776C7.32387 10.3147 8.48133 9.83329 9.83342 9.83329H34.6626C34.4987 10.6527 34.4167 11.4722 34.4167 12.2916C34.4167 13.1111 34.4987 13.9305 34.6626 14.75C34.9494 16.0611 35.4206 17.28 36.0761 18.4067C36.7317 19.5335 37.5306 20.527 38.473 21.3875L29.5001 27.0416L9.83342 14.75V19.6666L29.5001 31.9583L42.4678 23.8458C43.1643 24.0916 43.8608 24.276 44.5574 24.3989C45.2539 24.5218 45.9709 24.5833 46.7084 24.5833C48.0195 24.5833 49.3102 24.3784 50.5803 23.9687C51.8504 23.559 53.0181 22.9444 54.0834 22.125V44.25C54.0834 45.602 53.602 46.7595 52.6391 47.7224C51.6763 48.6852 50.5188 49.1666 49.1668 49.1666H9.83342Z" fill="white"/>
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[700px] lg:h-[900px] overflow-hidden">
        {/* Background Image */}
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/325d1d9edd703e9ba13cdb95390a92c8265323f1?width=2940" 
          alt="BUC Conference" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Hero Content */}
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 h-full flex flex-col justify-end pb-12 md:pb-16 lg:pb-24">
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px', paddingBottom: '30px' }} />
          <h1 className="text-white font-bold text-3xl md:text-5xl lg:text-[64px] leading-[120%] tracking-[-0.02em] mb-6 md:mb-8" style={{ maxWidth: '1097px' }}>
            Building The Next Generation of Black Leaders in Canada
          </h1>

          <a
            href="mailto:info@blackundergraduatecoalition.com"
            target="_blank"
            className="bg-buc-button text-white font-bold text-lg md:text-xl lg:text-2xl px-12 py-4 rounded-lg hover:bg-buc-button/90 transition-colors w-fit inline-block"
            style={{ marginLeft: 'auto', cursor: 'pointer', pointerEvents: 'auto' }}
          >
            Contact us
          </a>
        </div>
      </section>

      <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', marginTop: '1px', height: '54px' }} />

      {/* Black Students Section */}
      <section className="bg-buc-dark-gray py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-white font-bold text-3xl md:text-5xl lg:text-[64px] leading-[120%] tracking-[-0.02em] text-center mb-6 md:mb-8 lg:mb-10">
            Black Students Pushing National Dialogue
          </h2>
          
          <p className="text-white text-base md:text-xl lg:text-2xl leading-[120%] tracking-[-0.02em] text-center max-w-6xl mx-auto">
            The Black Undergraduate Coalition (BUC) is a national platform that connects Black students and Black student groups across Canada to support leadership, advocacy, and collective growth. Guided by the principles of the Scarborough Charter on Anti-Black Racism and Black Inclusion, BUC works to uphold institutional accountability while creating pathways for Black students to flourish academically, professionally, and socially.
          </p>
        </div>
      </section>

      {/* Stats Cards Section */}
      <section className="bg-buc-dark-gray py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 - Students */}
            <div className="bg-buc-card-bg rounded-3xl border-2 border-buc-card-border overflow-hidden flex flex-col">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/c6a3a0354d52bc9c52b96079b5e3ffcf7c59b306?width=764" 
                alt="Students at conference" 
                className="w-full h-64 lg:h-[324px] object-cover"
              />
              <div className="p-6 lg:p-8 flex-grow flex items-center justify-center">
                <h3 className="text-black font-bold text-3xl lg:text-[40px] leading-[100%] text-center">
                  350 Students Nation-wide
                </h3>
              </div>
            </div>

            {/* Card 2 - Universities */}
            <div className="bg-buc-card-bg rounded-3xl border-2 border-buc-card-border overflow-hidden flex flex-col">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/c27ac612d0b3c9a49d53ae1c55e3a278f80bdb10?width=764" 
                alt="University students" 
                className="w-full h-64 lg:h-[324px] object-cover"
              />
              <div className="p-6 lg:p-8 flex-grow flex items-center justify-center">
                <h3 className="text-black font-bold text-3xl lg:text-[40px] leading-[100%] text-center">
                  30 Universities
                </h3>
              </div>
            </div>

            {/* Card 3 - Platform */}
            <div className="bg-buc-card-bg rounded-3xl border-2 border-buc-card-border overflow-hidden flex flex-col">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/6403224d0868c745d4a580057cbab3c54b50a7b4?width=764" 
                alt="Platform members" 
                className="w-full h-64 lg:h-[324px] object-cover"
              />
              <div className="p-6 lg:p-8 flex-grow flex items-center justify-center">
                <h3 className="text-black font-bold text-3xl lg:text-[40px] leading-[100%] text-center">
                  1 Nation-Wide Platform
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email CTA Section */}
      <section className="bg-buc-dark-gray py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1440px] mx-auto flex flex-col">
          <a
            href="https://groups.google.com/a/blackundergraduatecoalition.com/g/emaillist-black-undergraduate-coalition"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-buc-black rounded-lg flex flex-col w-full md:w-[800px] items-center mx-auto"
            style={{ padding: '64px 18px' }}
          >
            <div
              href="https://groups.google.com/a/blackundergraduatecoalition.com/g/emaillist-black-undergraduate-coalition"
              target="_blank"
              className="text-white font-bold text-3xl md:text-5xl lg:text-[64px] leading-[120%] tracking-[-0.02em] text-center"
              style={{ cursor: 'pointer', pointerEvents: 'auto', display: 'flex' }}
            >
              Join our Email List:
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
