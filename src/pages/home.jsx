import { Header, Hero, HeaderContact, Services } from "../components";

export function Home(){
  return(
    <>
      <HeaderContact />
      <Header />
      <Hero />
      <Services />
      <div className="h-[80vh]">

      </div>
    </>
  )
}