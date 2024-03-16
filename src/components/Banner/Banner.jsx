import banner from '../../assets/banner.png'
export default function Banner() {
  return (
    <div className="relative bg-gradient-to-b from-[rgba(21,11,43,0.90)] via-transparent to-[rgba(21,11,43,0.00)] bg-no-repeat bg-cover bg-center rounded-3xl mt-7" style={{ backgroundImage: `url(${banner})` }}>
      <div className="w-full lg:w-[900px] flex flex-col items-center justify-center text-center mx-auto h-full py-10 lg:py-0 px-2 lg:px-0 lg:h-[600px]">
        <h1 className="text-3xl lg:text-5xl font-bold text-white">Discover an exceptional cooking class tailored for you!</h1>
        <p className="text-base lg:text-lg font-normal text-white mt-6">
          Experience cooking like never before with our tailored class just for you! Our expert chefs will guide you through personalized recipes and techniques, ensuring a delightful and enriching culinary journey. Unleash your inner chef and savor the satisfaction of creating dishes perfectly suited to your taste.
        </p>
        <div className="mt-6 lg:mt-10 space-x-3 lg:space-x-6">
          <button className="bg-[#0BE58A] rounded-full py-3 lg:py-5 px-5 lg:px-7 text-base lg:text-xl font-semibold text-[#150B2B]">Explore Now</button>
          <button className="bg-transparent border border-white rounded-full py-3 lg:py-5 px-5 lg:px-7 text-base lg:text-xl font-semibold text-white">Our Feedback</button>
        </div>
      </div>
    </div>
  )
}
