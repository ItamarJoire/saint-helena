import { FaCircle } from 'react-icons/fa'

import { Grid } from '../containers'

import { ImgsGallery } from '../lib/imgs'


export function ChildrenCard(){
  return(
    <div className=''>
      <div className="relative pb-2">
      
          <Grid>
            <div class="mx-auto bg-gradient-to-t from-primary-dark to-primary rounded-3xl xl:mx-28">
              <h1 className="pt-12 font-['Bungee'] text-white text-2xl text-center font-extrabold tracking-widest xl:text-3xl">Toodlers</h1>
              
              <div className="px-6">
                <div className="mt-8">
                  <h3 className="font-['Bungee'] text-secondary-yellow text-left xl:text-xl">Matutino e vespertivo</h3>

                  <div className="mt-2 flex">
                    <li className='text-secondary-yellow'></li>
                    <p className="text-white xl:text-xl">2 professores para cada sala com 12 alunos, podendo chegar a 15 alunos com a presença de mais um adulto<span className="text-secondary-yellow">.</span></p>
                  </div>
                </div>
              </div>

              <div className="px-6">
                <div className="mt-8">
                  <h3 className="font-['Bungee'] text-secondary-yellow text-left xl:text-xl">Crianças a partir de 1 ano e 4 meses</h3>

                  <div className="space-y-4">
                    <div className="mt-2 flex">
                    <li className='text-secondary-yellow'></li>
                      <div>
                        <p className="text-white xl:text-xl">4 horas de aula na <u>língua inglesa</u><span className="text-secondary-yellow">.</span></p>
                      </div>
                    </div>

                    <div className="flex">
                    <li className='text-secondary-yellow'></li>
                      <div>
                        <p className="text-white xl:text-xl">1 aula semanal de <u>musicalização infantil</u> com <u>professora especialista</u><span className="text-secondary-yellow">.</span></p>
                      </div>
                    </div>

                    <div className="flex ">
                      <li className='text-secondary-yellow'></li>
                      <div>
                        <p className="text-white xl:text-xl">1 aula semanal de <u>corpo e movimento</u> para <u>desenvolvimento psicomotor</u> com <u>professora especialista</u><span className="text-secondary-yellow">.</span></p>
                      </div>
                    </div>

                    <div className="flex ">
                    <li className='text-secondary-yellow'></li>
                      <div>
                        <p className="text-white xl:text-xl">1 aula semanal de <u>teatro</u> para <u>desenvolvimento da expressão</u> por meio de <u>múltiplas linguagens, da criatividade e do imaginário</u> com <u>professor especialista</u><span className="text-secondary-yellow">.</span></p>
                      </div>
                    </div>

                    <div className="flex">
                    <li className='text-secondary-yellow'></li>
                      <div>
                        <p className="text-white xl:text-xl">Aprendizagem através das <u>interações e brincadeiras</u><span className="text-secondary-yellow">.</span></p>
                      </div>
                    </div>

                    <div className="flex">
                    <li className='text-secondary-yellow'></li>
                      <div>
                        <p className="text-white xl:text-xl">Momentos de <u>interação social</u>, para conversas sobre <u>inteligência socioemocional</u><span className="text-secondary-yellow">.</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                
              <div className="mt-12">
                <img class="border-mask w-full h-80 object-cover" src={ImgsGallery[0].src} alt="" />
              </div>
            </div>
          </Grid>
      </div>

      <div className="pb-2">
          <Grid>
            <div class=" mx-auto bg-gradient-to-t from-primary-dark to-primary rounded-3xl xl:mx-28">
              <h1 className="pt-12 font-['Bungee'] text-white text-2xl text-center font-extrabold tracking-widest xl:text-3xl">Tiny Tots</h1>
              
              <div className="px-6">
                <div className="mt-8">
                  <h3 className="font-['Bungee'] text-secondary-yellow text-left xl:text-xl">Matutino e vespertivo</h3>

                  <div className="mt-2 flex">
                  <li className='text-secondary-yellow'></li>
                    <p className="text-white xl:text-xl">2 professores para cada sala com até 18 alunos<span className="text-secondary-yellow">.</span></p>
                  </div>
                </div>
              </div>

              <div className="px-6">
                <div className="mt-8">
                  <h3 className="font-['Bungee'] text-secondary-yellow text-left xl:text-xl">Crianças de 3 anos</h3>

                  <div className="space-y-4">
                    <div className="flex">
                    <li className='text-secondary-yellow'></li>
                      <div>
                        <p className="text-white xl:text-xl">2 horas de aula na <u>língua portuguesa</u><span className="text-secondary-yellow">.</span></p>
                      </div>
                    </div>
                    <div className="flex">
                    <li className='text-secondary-yellow'></li>
                      <div>
                        <p className="text-white xl:text-xl">2 horas de aula na <u>língua inglesa</u><span className="text-secondary-yellow">.</span></p>
                      </div>
                    </div>

                    <div className="flex">
                    <li className='text-secondary-yellow'></li>
                      <div>
                        <p className="text-white xl:text-xl">1 aula semanal de <u>musicalização infantil</u> com <u>professora especialista</u><span className="text-secondary-yellow">.</span></p>
                      </div>
                    </div>

                    <div className="flex">
                    <li className='text-secondary-yellow'></li>
                      <div>
                        <p className="text-white xl:text-xl">1 aula semanal de <u>teatro</u> para <u>desenvolvimento da expressão</u> por meio de <u>múltiplas linguagens, da criatividade e do imaginário</u> com <u>professora especialista</u><span className="text-secondary-yellow">.</span></p>
                      </div>
                    </div>

                    <div className="flex">
                    <li className='text-secondary-yellow'></li>
                      <div>
                        <p className="text-white xl:text-xl">1 aula semanal de <u>LIV (Laboratório Inteligência de Vida)</u>: um currículo especialmente elaborado para o <u>desenvolvimento socioemocional</u> de nossas crianças<span className="text-secondary-yellow">.</span></p>
                      </div>
                    </div>

                    <div className="flex">
                    <li className='text-secondary-yellow'></li>
                      <div>
                        <p className="text-white xl:text-xl">1 aula semanal de <u>MAKER</u> - uma proposta para que nossas crianças aprendam a resolver problemas através da <u>inovação de ideias</u><span className="text-secondary-yellow">.</span></p>
                      </div>
                    </div>

                    <div className="flex">
                    <li className='text-secondary-yellow'></li>
                      <div>
                        <p className="text-white xl:text-xl">1 aula semanal de <u>corpo e movimento</u> para <u>desenvolvimento psicomotor</u> com <u>professor especialista</u><span className="text-secondary-yellow">.</span></p>
                      </div>
                    </div>

                    <div className="flex">
                    <li className='text-secondary-yellow'></li>
                      <div>
                        <p className="text-white xl:text-xl">Aprendizagem através das <u>interações e brincadeiras</u><span className="text-secondary-yellow">.</span></p>
                      </div>
                    </div>

                    <div className="flex">
                    <li className='text-secondary-yellow'></li>
                      <div>
                        <p className="text-white xl:text-xl">Momentos de <u>interação social</u>, para conversas sobre <u>inteligência socioemocional</u><span className="text-secondary-yellow">.</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              
                
              <div className="mt-12">
                <img class="border-mask w-full h-80 object-cover" src={ImgsGallery[1].src} alt="" />
              </div>
            </div>

          </Grid>
      </div>

      <div className="pb-2">
          <Grid>
            <div class=" mx-auto bg-gradient-to-t from-primary-dark to-primary rounded-3xl xl:mx-28">
              <h1 className="pt-12 font-['Bungee'] text-white text-2xl text-center font-extrabold tracking-widest xl:text-3xl">Pre-kindergarten</h1>
              
              <div className="px-6">
                <div className="mt-8">
                  <h3 className="font-['Bungee'] text-secondary-yellow text-left">Matutino e vespertivo</h3>

                  <div className="flex">
                  <li className='text-secondary-yellow'></li>
                    <p className="text-white xl:text-xl">2 professores para cada sala com até 18 alunos<span className="text-secondary-yellow">.</span></p>
                  </div>
                </div>
              </div>

              <div className="px-6">
                <div className="mt-8">
                  <h3 className="font-['Bungee'] text-secondary-yellow text-left xl:text-xl">Crianças de 4 anos</h3>

                  <div className="space-y-4">
                    <div className="mt-2 flex">
                    <li className='text-secondary-yellow'></li>
                      <div>
                        <p className="text-white xl:text-xl">2 horas de aula na <u>língua portuguesa</u><span className="text-secondary-yellow">.</span></p>
                      </div>
                    </div>

                    <div className="flex">
                    <li className='text-secondary-yellow'></li>
                      <div>
                        <p className="text-white xl:text-xl">2 horas de aula na <u>língua inglesa</u><span className="text-secondary-yellow">.</span></p>
                      </div>
                    </div>

                    <div className="flex">
                    <li className='text-secondary-yellow'></li>
                      <div>
                        <p className="text-white xl:text-xl">1 aula semanal de <u>musicalização infantil</u> com <u>professora especialista</u><span className="text-secondary-yellow">.</span></p>
                      </div>
                    </div>

                    

                    <div className="flex">
                    <li className='text-secondary-yellow'></li>
                      <div>
                        <p className="text-white xl:text-xl">1 aula semanal de <u>teatro</u> para <u>desenvolvimento da expressão</u> por meio de <u>múltiplas linguagens, da criatividade e do imaginário</u> com <u>professora especialista</u><span className="text-secondary-yellow">.</span></p>
                      </div>
                    </div>

                    <div className="flex">
                    <li className='text-secondary-yellow'></li>
                      <div>
                        <p className="text-white xl:text-xl">1 aula semanal de <u>LIV (Laboratório Inteligência de Vida)</u>: um currículo especialmente elaborado para o <u>desenvolvimento socioemocional</u> de nossas crianças<span className="text-secondary-yellow">.</span></p>
                      </div>
                    </div>

                    <div className="flex">
                    <li className='text-secondary-yellow'></li>
                      <div>
                        <p className="text-white xl:text-xl">1 aula semanal de <u>MAKER</u> - uma proposta para que nossas crianças aprendam a resolver problemas através da <u>inovação de ideias</u><span className="text-secondary-yellow">.</span></p>
                      </div>
                    </div>

                    <div className="flex">
                    <li className='text-secondary-yellow'></li>
                      <div>
                      <p className="text-white xl:text-xl">1 aula semanal de <u>corpo e movimento</u> para <u>desenvolvimento psicomotor</u> com <u>professor especialista</u><span className="text-secondary-yellow">.</span></p>
                      </div>
                    </div>

                    <div className="flex">
                    <li className='text-secondary-yellow'></li>
                      <div>
                      <p className="text-white xl:text-xl">Aprendizagem através das <u>interações e brincadeiras</u><span className="text-secondary-yellow">.</span></p>
                      </div>
                    </div>
                    
                    <div className="flex">
                    <li className='text-secondary-yellow'></li>
                      <div>
                        <p className="text-white xl:text-xl">Momentos de <u>interação social</u>, para conversas sobre <u>inteligência socioemocional</u><span className="text-secondary-yellow">.</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              
                
              <div className="mt-12">
                <img class="border-mask w-full h-80 object-cover" src={ImgsGallery[11].src} alt="" />
              </div>
            </div>

          </Grid>
      </div>

      <div className="pb-2">
          <Grid>
            <div class=" mx-auto bg-gradient-to-t from-primary-dark to-primary rounded-3xl xl:mx-28">
              <h1 className="pt-12 font-['Bungee'] text-white text-2xl text-center font-extrabold tracking-widest xl:text-3xl">Kindergarten</h1>
              
              <div className="px-6">
                <div className="mt-8">
                  <h3 className="font-['Bungee'] text-secondary-yellow text-left xl:text-xl">Matutino e vespertivo</h3>

                  <div className="mt-2 flex">
                  <li className='text-secondary-yellow'></li>
                    <p className="text-white xl:text-xl">2 professores para cada sala com 18 alunos<span className="text-secondary-yellow">.</span></p>
                  </div>
                </div>
              </div>

              <div className="px-6">
                <div className="mt-8">
                  <h3 className="font-['Bungee'] text-secondary-yellow text-left xl:text-xl">Crianças de 5 anos</h3>

                  <div className="space-y-4">
                    <div className="mt-2 flex">
                    <li className='text-secondary-yellow'></li>
                      <div>
                        <p className="text-white xl:text-xl">2 horas e 30 minutos de aula na <u>língua portuguesa</u><span className="text-secondary-yellow">.</span></p>
                      </div>
                    </div>

                    <div className="mt-2 flex">
                    <li className='text-secondary-yellow'></li>
                      <div>
                        <p className="text-white xl:text-xl">2 horas de aula na <u>língua inglesa</u><span className="text-secondary-yellow">.</span></p>
                      </div>
                    </div>

                    <div className="flex">
                    <li className='text-secondary-yellow'></li>
                      <div>
                        <p className="text-white xl:text-xl">1 aula semanal de <u>musicalização infantil</u> com <u>professora especialista</u><span className="text-secondary-yellow">.</span></p>
                      </div>
                    </div>

                    

                    <div className="flex">
                    <li className='text-secondary-yellow'></li>
                      <div>
                        <p className="text-white xl:text-xl">1 aula semanal de <u>corpo e movimento</u> para desenvolvimento psicomotor com <u>professor especialista</u><span className="text-secondary-yellow">.</span></p>
                      </div>
                    </div>

                    <div className="flex">
                    <li className='text-secondary-yellow'></li>
                      <div>
                        <p className="text-white xl:text-xl">1 aula semanal de <u>teatro</u> para desenvolvimento da expressão por meio de <u>múltiplas linguagens, da criatividade e do imaginário</u><span className="text-secondary-yellow">.</span></p>
                      </div>
                    </div>

                    <div className="flex">
                    <li className='text-secondary-yellow'></li>
                      <div>
                      <p className="text-white xl:text-xl">Aprendizagem através das <u>interações e brincadeiras</u><span className="text-secondary-yellow">.</span></p>
                      </div>
                    </div>

                    <div className="flex">
                    <li className='text-secondary-yellow'></li>
                      <div>
                        <p className="text-white xl:text-xl">Introdução ao universo da alfabetização por meio de <u>atividades práticas</u> e <u>cheias de significado</u><span className="text-secondary-yellow">.</span></p>
                      </div>
                    </div>

                    <div className="flex">
                    <li className='text-secondary-yellow'></li>
                      <div>
                        <p className="text-white xl:text-xl">Aprendizado por meios de <u>brincadeiras pedagógicas</u>, desenvolvendo a psicomotricidade e a cognição<span className="text-secondary-yellow">.</span></p>
                      </div>
                    </div>
                    <div className="mt-2 flex">
                    <li className='text-secondary-yellow'></li>
                      <div>
                        <p className="text-white xl:text-xl">Aprendizagem <u>lúdica e significativa</u><span className="text-secondary-yellow">.</span></p>
                      </div>
                    </div>
                    <div className="flex">
                    <li className='text-secondary-yellow'></li>
                      <div>
                        <p className="text-white xl:text-xl">Momentos de <u>interação social</u>, para conversas sobre <u>inteligência socioemocional</u><span className="text-secondary-yellow">.</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <img class="border-mask w-full h-80 object-cover" src={ImgsGallery[11].src} alt="" />
              </div>
            </div>

          </Grid>
      </div>
    </div>
  )
}
