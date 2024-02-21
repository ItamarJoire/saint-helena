
export function Hero() {
  return (
    <section className="pt-20 flex items-center justify-center w-full bg-hero-pattern bg-no-repeat bg-center bg-cover md:justify-start md:pt-0 md:h-[40vh] lg:h-[70vh]">
        <div className="m-4 text-center px-4 py-8 bg-white rounded-xl sm:max-w-[60%]  lg:max-w-[40%] lg:mx-0 lg:ml-16 lg:px-8">
          <div className='border-2 rounded-sm mb-8 w-[30%] border-secondary-red'></div>
          <div>
            <h1 className="font-['Bungee'] text-primary text-4xl font-extrabold tracking-widest">Anos de excelência em <span className="">educação bilíngue</span></h1>
            <h3 className="mt-3 text-gray-400 text-2xl font-medium">Inspirada no sonho de um avô visionário em Maringá.</h3> 
          </div>
          <button className="mt-8 text-lg border border-gray-300 font-medium rounded-lg px-6 py-3 bg-gradient-to-r from-primary-blue-dark to-primary-blue-light text-white hover:opacity-90">
            Saiba mais
          </button>
        </div>  
    </section>
  );
}