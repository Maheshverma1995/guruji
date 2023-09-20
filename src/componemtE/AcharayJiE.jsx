import React, { useEffect } from 'react'
import '../App.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import HomeSectionE from './HomeSectionE';

const AcharayJiE = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  },
    []);
  return (
    <div>
  <div className='body'>
      <HomeSectionE/>
      <div className='container mt-5 mb-5'>
        <div className='row'>
          <div className='col' data-aos="fade-up">
            <img className='img-fluid rounded shadow p-3 w-100 h-auto' src="./images/acharya-vishuddha-sagar-ji-.webp" alt="" />
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h1 data-aos="fade-up" className=' mb-5 mt-5 text-center'>Adhyatma Yogi Acharya Vishuddha Sagar</h1>
              <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, earum laudantium libero dignissimos fugiat provident autem labore, ab cum nisi iusto fugit facilis blanditiis minus quis quae adipisci. Iure, animi.</p>
              <p data-aos="fade-up">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, officiis consequatur excepturi voluptatem odit iusto dolor nostrum consectetur deleniti atque ab dolore vero asperiores suscipit aliquid quidem nesciunt error. Culpa?</p>
              <p data-aos="fade-up">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum magnam dolore deserunt ad nesciunt blanditiis sit, harum maiores assumenda modi excepturi placeat sunt vero enim ut, dicta veniam optio ipsa? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus beatae excepturi tempore aut, doloremque sunt porro, asperiores eos culpa doloribus laudantium neque dicta? Vel explicabo quia doloremque quas repudiandae enim.</p>
              <p data-aos="fade-up"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore id in accusamus beatae minus. Maxime nulla molestias recusandae tempore numquam mollitia neque temporibus modi dignissimos optio ipsa expedita adipisci labore, reprehenderit non nemo quasi exercitationem nihil veniam soluta facilis voluptatibus. Incidunt doloribus ad consectetur obcaecati tenetur neque magni pariatur nihil dolorem, soluta porro tempora fugit distinctio aliquam nulla numquam tempore, in maxime impedit esse architecto eveniet saepe iure? Ipsa corrupti, minus neque consequuntur aliquam tempora laudantium corporis facilis sequi ut? Ex nesciunt, nemo nam consectetur commodi soluta, exercitationem fuga ad fugit deleniti enim repellendus asperiores reiciendis! Omnis et commodi fugit?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 mt-3' data-aos="fade-right">
              <img className='img-fluid shadow-lg p-3 mb-5 bg-body rounded ' style={{ width: '80%', height: '80%' }} src="./images/download (1).jpg" alt="" />
            </div>
            <div className='col-md-6 mt-3' data-aos="fade-up">
              <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores vero assumenda fugit aspernatur soluta quis temporibus nobis, quos, sunt unde pariatur doloribus animi hic a corrupti aut rem rerum, eos nam. Aut obcaecati cum quia, ratione quod tempora voluptatibus atque sint reprehenderit eos culpa officia. Rem perferendis adipisci pariatur fugit!</p>
              <p data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo nulla, eveniet id amet qui ratione cumque dignissimos suscipit corporis mollitia libero at, unde quis cum sed minus nobis non maxime odit totam vel impedit. Eius, cumque magni. Ratione dolorum dolorem tenetur quaerat velit itaque recusandae! Laborum commodi dignissimos iste dicta!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <p data-aos="fade-up">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere aspernatur consectetur quidem id esse ipsam eos sint cumque aliquam rem illum cupiditate architecto reprehenderit aliquid necessitatibus voluptates officia expedita labore velit libero, delectus ea error. Enim sunt, neque molestias ipsam recusandae, aperiam quod nemo error rerum, debitis deserunt blanditiis suscipit sint. Suscipit ullam hic beatae maxime quam officia veniam labore ea nam nesciunt, consequuntur eaque. Provident qui facilis repellendus, debitis eum cupiditate, tempore minima amet dignissimos aperiam accusamus nesciunt, reprehenderit at deserunt reiciendis officiis tempora! Dolore ullam maxime ratione laborum ea tempore quia tempora accusamus a officiis! Quidem, eligendi exercitationem.</p>
              <p data-aos="fade-up"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, atque totam. Alias aliquam veniam cumque voluptates amet nemo ea odit nesciunt consequuntur, voluptate odio numquam sunt et, corrupti ad officia quidem quae sint praesentium incidunt esse iusto placeat eveniet nulla? Sit quas tenetur quod animi eius sunt dolorem, exercitationem facere nobis culpa doloremque a, veritatis, laborum est. Eligendi, cum quam?

              </p>
              <p className='text-center fs-2 mt-5 mb-5' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi vero voluptatem repellat magnam quos saepe ipsa nihil, fugit eligendi id.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AcharayJiE
