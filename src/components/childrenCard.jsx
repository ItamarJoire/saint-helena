import { FaCircle } from 'react-icons/fa'

import ImgCard from '../assets/children-1.jpg'
import ImgCard2 from '../assets/children-2.jpg'
import ImgCard3 from '../assets/children-3.jpg'
import ImgCard4 from '../assets/children-4.jpg'
import ImgCard5 from '../assets/children-5.jpg'

import { Grid } from '../containers'

export function ChildrenCard(){
  return(
    <div className=''>
      <div className="pb-2">
          <Grid>
            <div class=" mx-auto bg-gradient-to-t from-primary-dark to-primary rounded-3xl ">
              <h1 className="pt-12 font-['Bungee'] text-white text-2xl text-center font-extrabold tracking-widest">Toodlers</h1>
              
              <div className="px-6">
                <div className="mt-8">
                  <h3 className="font-['Bungee'] text-secondary-yellow text-left">Matutino e vespertivo</h3>

                  <div className="mt-2 flex items-center gap-3">
                    <FaCircle className="text-secondary-yellow size-2"/>
                    <p className="text-white">2 professores para cada sala com 12 alunos<span className="text-secondary-yellow">;</span></p>
                  </div>
                </div>
              </div>

              <div className="px-6">
                <div className="mt-8">
                  <h3 className="font-['Bungee'] text-secondary-yellow text-left">Crianças a partir de 1 ano e 4 meses</h3>

                  <div className="space-y-4">
                    <div className="mt-2 flex items-center gap-3">
                      <FaCircle className="text-secondary-yellow size-2"/>
                      <div>
                        <p className="text-white">4 horas de aula na <u>língua inglesa</u><span className="text-secondary-yellow">;</span></p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <FaCircle className="text-secondary-yellow size-3"/>
                      <div>
                        <p className="text-white">1 aula semanal de <u>musicalização infantil</u> com <u>professora especialista</u><span className="text-secondary-yellow">;</span></p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <FaCircle className="text-secondary-yellow size-4"/>
                      <div>
                        <p className="text-white">1 aula semanal de <u>movimento corporal</u> para desenvolvimento psicomotor com <u>professor especialista</u><span className="text-secondary-yellow">;</span></p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <FaCircle className="text-secondary-yellow size-4"/>
                      <div>
                        <p className="text-white">Aprendizado por meios de <u>brincadeiras pedagógicas</u>, desenvolvendo a psicomotricidade e a cognição<span className="text-secondary-yellow">;</span></p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <FaCircle className="text-secondary-yellow size-4"/>
                      <div>
                        <p className="text-white">Momentos de <u>interação social</u>, para conversas sobre <u>inteligência socioemocional</u><span className="text-secondary-yellow">;</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                
              <div className="mt-12">
                <img class="border-mask w-full h-80 object-cover" src={ImgCard} alt="" />
              </div>
            </div>

          </Grid>
      </div>

      <div className="pb-2">
          <Grid>
            <div class=" mx-auto bg-gradient-to-t from-primary-dark to-primary rounded-3xl">
              <h1 className="pt-12 font-['Bungee'] text-white text-2xl text-center font-extrabold tracking-widest">Tiny Tots</h1>
              
              <div className="px-6">
                <div className="mt-8">
                  <h3 className="font-['Bungee'] text-secondary-yellow text-left">Matutino e vespertivo</h3>

                  <div className="mt-2 flex items-center gap-3">
                    <FaCircle className="text-secondary-yellow size-2"/>
                    <p className="text-white">2 professores para cada sala com 18 alunos<span className="text-secondary-yellow">;</span></p>
                  </div>
                </div>
              </div>

              <div className="px-6">
                <div className="mt-8">
                  <h3 className="font-['Bungee'] text-secondary-yellow text-left">Crianças de 3 anos</h3>

                  <div className="space-y-4">
                    <div className="mt-2 flex items-center gap-3">
                      <FaCircle className="text-secondary-yellow size-2"/>
                      <div>
                        <p className="text-white">2 horas de aula na <u>língua portuguesa</u><span className="text-secondary-yellow">;</span></p>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center gap-3">
                      <FaCircle className="text-secondary-yellow size-2"/>
                      <div>
                        <p className="text-white">2 horas de aula na <u>língua inglesa</u><span className="text-secondary-yellow">;</span></p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <FaCircle className="text-secondary-yellow size-3"/>
                      <div>
                        <p className="text-white">1 aula semanal de <u>musicalização infantil</u> com <u>professora especialista</u><span className="text-secondary-yellow">;</span></p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <FaCircle className="text-secondary-yellow size-4"/>
                      <div>
                        <p className="text-white">1 aula semanal de <u>movimento corporal</u> para desenvolvimento psicomotor com <u>professor especialista</u><span className="text-secondary-yellow">;</span></p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <FaCircle className="text-secondary-yellow size-4"/>
                      <div>
                        <p className="text-white">Aprendizado por meios de <u>brincadeiras pedagógicas</u>, desenvolvendo a psicomotricidade e a cognição<span className="text-secondary-yellow">;</span></p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <FaCircle className="text-secondary-yellow size-4"/>
                      <div>
                        <p className="text-white">Momentos de <u>interação social</u>, para conversas sobre <u>inteligência socioemocional</u><span className="text-secondary-yellow">;</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              
                
              <div className="mt-12">
                <img class="border-mask w-full h-80 object-cover" src={ImgCard3} alt="" />
              </div>
            </div>

          </Grid>
      </div>

      <div className="pb-2">
          <Grid>
            <div class=" mx-auto bg-gradient-to-t from-primary-dark to-primary rounded-3xl">
              <h1 className="pt-12 font-['Bungee'] text-white text-2xl text-center font-extrabold tracking-widest">Pre-kindergarten</h1>
              
              <div className="px-6">
                <div className="mt-8">
                  <h3 className="font-['Bungee'] text-secondary-yellow text-left">Matutino e vespertivo</h3>

                  <div className="mt-2 flex items-center gap-3">
                    <FaCircle className="text-secondary-yellow size-2"/>
                    <p className="text-white">2 professores para cada sala com 18 alunos<span className="text-secondary-yellow">;</span></p>
                  </div>
                </div>
              </div>

              <div className="px-6">
                <div className="mt-8">
                  <h3 className="font-['Bungee'] text-secondary-yellow text-left">Crianças de 4 anos</h3>

                  <div className="space-y-4">
                    <div className="mt-2 flex items-center gap-3">
                      <FaCircle className="text-secondary-yellow size-2"/>
                      <div>
                        <p className="text-white">2 horas de aula na <u>língua portuguesa</u><span className="text-secondary-yellow">;</span></p>
                      </div>
                    </div>

                    <div className="mt-2 flex items-center gap-3">
                      <FaCircle className="text-secondary-yellow size-2"/>
                      <div>
                        <p className="text-white">2 horas de aula na <u>língua inglesa</u><span className="text-secondary-yellow">;</span></p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <FaCircle className="text-secondary-yellow size-3"/>
                      <div>
                        <p className="text-white">1 aula semanal de <u>musicalização infantil</u> com <u>professora especialista</u><span className="text-secondary-yellow">;</span></p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <FaCircle className="text-secondary-yellow size-4"/>
                      <div>
                        <p className="text-white">1 aula semanal de <u>movimento corporal</u> para desenvolvimento psicomotor com <u>professor especialista</u><span className="text-secondary-yellow">;</span></p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <FaCircle className="text-secondary-yellow size-4"/>
                      <div>
                        <p className="text-white">Aprendizado por meios de <u>brincadeiras pedagógicas</u>, desenvolvendo a psicomotricidade e a cognição<span className="text-secondary-yellow">;</span></p>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center gap-3">
                      <FaCircle className="text-secondary-yellow size-2"/>
                      <div>
                        <p className="text-white">Aprendizagem <u>lúdica e significativa</u><span className="text-secondary-yellow">;</span></p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaCircle className="text-secondary-yellow size-4"/>
                      <div>
                        <p className="text-white">Momentos de <u>interação social</u>, para conversas sobre <u>inteligência socioemocional</u><span className="text-secondary-yellow">;</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              
                
              <div className="mt-12">
                <img class="border-mask w-full h-80 object-cover" src={ImgCard4} alt="" />
              </div>
            </div>

          </Grid>
      </div>

      <div className="pb-2">
          <Grid>
            <div class=" mx-auto bg-gradient-to-t from-primary-dark to-primary rounded-3xl">
              <h1 className="pt-12 font-['Bungee'] text-white text-2xl text-center font-extrabold tracking-widest">Kindergarten</h1>
              
              <div className="px-6">
                <div className="mt-8">
                  <h3 className="font-['Bungee'] text-secondary-yellow text-left">Matutino e vespertivo</h3>

                  <div className="mt-2 flex items-center gap-3">
                    <FaCircle className="text-secondary-yellow size-2"/>
                    <p className="text-white">2h30min professores para cada sala com 18 alunos<span className="text-secondary-yellow">;</span></p>
                  </div>
                </div>
              </div>

              <div className="px-6">
                <div className="mt-8">
                  <h3 className="font-['Bungee'] text-secondary-yellow text-left">Crianças de 5 anos</h3>

                  <div className="space-y-4">
                    <div className="mt-2 flex items-center gap-3">
                      <FaCircle className="text-secondary-yellow size-2"/>
                      <div>
                        <p className="text-white">2 horas de aula na <u>língua portuguesa</u><span className="text-secondary-yellow">;</span></p>
                      </div>
                    </div>

                    <div className="mt-2 flex items-center gap-3">
                      <FaCircle className="text-secondary-yellow size-2"/>
                      <div>
                        <p className="text-white">2 horas de aula na <u>língua inglesa</u><span className="text-secondary-yellow">;</span></p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <FaCircle className="text-secondary-yellow size-3"/>
                      <div>
                        <p className="text-white">1 aula semanal de <u>musicalização infantil</u> com <u>professora especialista</u><span className="text-secondary-yellow">;</span></p>
                      </div>
                    </div>

                    

                    <div className="flex items-center gap-3">
                      <FaCircle className="text-secondary-yellow size-4"/>
                      <div>
                        <p className="text-white">1 aula semanal de <u>movimento corportal</u> para desenvolvimento psicomotor com <u>professor especialista</u><span className="text-secondary-yellow">;</span></p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <FaCircle className="text-secondary-yellow size-4"/>
                      <div>
                        <p className="text-white">Introdução ao universo da alfabetização por meio de <u>atividades práticas</u> e <u>cheias de significado</u><span className="text-secondary-yellow">;</span></p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <FaCircle className="text-secondary-yellow size-4"/>
                      <div>
                        <p className="text-white">Aprendizado por meios de <u>brincadeiras pedagógicas</u>, desenvolvendo a psicomotricidade e a cognição<span className="text-secondary-yellow">;</span></p>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center gap-3">
                      <FaCircle className="text-secondary-yellow size-2"/>
                      <div>
                        <p className="text-white">Aprendizagem <u>lúdica e significativa</u><span className="text-secondary-yellow">;</span></p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaCircle className="text-secondary-yellow size-4"/>
                      <div>
                        <p className="text-white">Momentos de <u>interação social</u>, para conversas sobre <u>inteligência socioemocional</u><span className="text-secondary-yellow">;</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              
                
              <div className="mt-12">
                <img class="border-mask w-full h-80 object-cover" src={ImgCard5} alt="" />
              </div>
            </div>

          </Grid>
      </div>
    </div>
  )
}