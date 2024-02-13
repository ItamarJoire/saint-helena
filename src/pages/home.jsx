import { Header, Hero, Footer, About, Highlights, Services } from "../components";

export function Home(){
  return(
    <>
      <Header />
      <Hero />
      <Highlights />
      <About />
      <Services />
      {/* <Carousel /> */}
      {/* <Forms /> */}
      <Footer />
    </>
  )
}