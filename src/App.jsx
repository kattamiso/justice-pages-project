import './index.css'
import Call from "../public/Icons/Call/Call.svg"
import Mail from "../public/Icons/Mail/Mail.svg"
import Copyright from "../public/Icons/Copyright/Copyright.svg"
import JusticeHouse from "../public/Img/Justice-house.png"
import VectorIcon from "../public/Icons/VectorIcon/VectorIcon.svg"


export default function App() {
  return (
    <div className='flex w-full justify-center items-end h-screen '>
      <div className='flex flex-col justify-between h-[560px] w-[719px]'>
        <div className='w-2 h-2'></div>

        <div className='flex flex-col h-[50%] justify-center items-center '>

          <div className='flex flex-col gap-3'>
            <span className='text-sm'>იუსტიციის სახლის</span>
            <span className='text-[rgba(0,0,0,0.70)] text-2xl font-bold leading-[115%] tracking-[-0.64px] '>კონტაქტი</span>
          </div>

          <div className='flex py-4 gap-2'>
            <div>
              <img src={Call} />
            </div>
            <div className="flex ">
              <span className='text-base'>2 405 405</span>
            </div>

            <div className="ml-4 gap-2">
              <img src={Mail} />
            </div>
            <span className='text-base'>Info@psh.gov.ge</span>
          </div>

          <div className='flex gap-2'>
            <div className='flex p-4 justify-center items-center gap-12 w-[157px] bg-[rgba(0,0,0,0.04)]'>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <button>Facebook</button>
              </a>
            </div>
            <div className='flex p-4 justify-center items-center gap-12 w-[157px] bg-[rgba(0,0,0,0.04)]'>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <button>LinkedIn</button>
              </a>
            </div>

            <div className='flex p-4 justify-center items-center gap-12 w-[157px] bg-[rgba(0,0,0,0.04)]'>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <button>YouTube</button>
              </a>
            </div>
          </div>
        </div>

        <div className='flex relative gap-3 justify-center py-4 '>
          <div className='rounded-full border-[2px] border-black w-[20px] h-[20px] flex justify-center items-center'>
            <img src={Copyright} alt="Copyright" />
          </div>
          <span>2023 ყველა უფლება დაცულია სსიპ ციფრული მმართველობის სააგენტო</span>
        </div>
      </div>

      <div className="flex p-10 bg-white rounded-full absolute mb-[200px] items-start ">
    <img src={VectorIcon} alt="Vector Icon"  className='relative pl-[2x5px]'/>
</div>

      <div className='p-0'>
        <img src={JusticeHouse} />
      </div>
    </div>
  )
}
