import { Grid } from "../containers";

import ImgStamp from '../assets/stampCamb.png'

import { FaCircle } from "react-icons/fa"

export function Excellence(){
  return(
    <section>
      <div className="bg-hero-pattern-camb bg-cover h-auto pb-12">
        <Grid >
          <div className="flex flex-col items-center space-y-6">

            <h1 className="font-['Bungee'] text-primary text-2xl text-center font-extrabold tracking-widest">Currículo internacional <span className="text-secondary-yellow">"Cambridge internacional school"</span></h1>

            <img src={ImgStamp}  className="w-[260px]" alt="" />
          </div>
        </Grid>
      </div>

      <div className="pt-4 pb-14 bg-[#EDEDEF]">
        <Grid>
          <div className="space-y-8">
            <div className="py-14 mx-auto bg-secondary-yellow rounded-3xl">
              <h1 className=" font-['Bungee'] text-primary text-2xl text-center font-extrabold tracking-widest">Cambridge primary</h1>
              
              <div className="px-6">
                <div className="mt-8">
                  <h3 className=" text-primary-2 text-left font-medium">O Cambridge Primary é o programa voltado aos alunos do Grade 1 ao Grade 5 para que desenvolvam seus conhecimentos em:</h3>

                  <div className="mt-2 flex items-center gap-3">
                    <FaCircle className="text-primary size-2"/>
                    <p className="text-white">Inglês como a segunda língua<span className="text-primary">;</span></p>
                  </div>
                  <div className="mt-2 flex items-center gap-3">
                    <FaCircle className="text-primary size-2"/>
                    <p className="text-white">Matemática<span className="text-primary">;</span></p>
                  </div>
                  <div className="mt-2 flex items-center gap-3">
                    <FaCircle className="text-primary size-2"/>
                    <p className="text-white">Ciências<span className="text-primary">;</span></p>
                  </div>
                  <div className="mt-2 flex items-center gap-3">
                    <FaCircle className="text-primary size-2"/>
                    <p className="text-white">Perpectivas globais (Cambridge Global Perpectives)<span className="text-primary">;</span></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-14 mx-auto bg-primary rounded-3xl">
              <h1 className=" font-['Bungee'] text-secondary-yellow text-2xl text-center font-extrabold tracking-widest">Cambridge lower secondary</h1>
              
              <div className="px-6">
                <div className="mt-8">
                  <h3 className=" text-primary-2 text-left font-medium">O Cambridge Lower Secondary é o programa voltado aos alunos do Grade 6 ao Grade 9 para que desenvolvam habilidades e conhecimentos em:</h3>

                  <div className="mt-2 flex items-center gap-3">
                    <FaCircle className="text-secondary-yellow size-2"/>
                    <p className="text-white">Inglês como a segunda língua<span className="text-secondary-yellow">;</span></p>
                  </div>
                  <div className="mt-2 flex items-center gap-3">
                    <FaCircle className="text-secondary-yellow size-2"/>
                    <p className="text-white">Matemática<span className="text-secondary-yellow">;</span></p>
                  </div>
                  <div className="mt-2 flex items-center gap-3">
                    <FaCircle className="text-secondary-yellow size-2"/>
                    <p className="text-white">Ciências<span className="text-secondary-yellow">;</span></p>
                  </div>
                  <div className="mt-2 flex items-center gap-3">
                    <FaCircle className="text-secondary-yellow size-2"/>
                    <p className="text-white">Perpectivas globais (Cambridge Global Perpectives)<span className="text-secondary-yellow">;</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </div>

      <div className="">
        <Grid>

        </Grid>
      </div>
    </section>
  )
}