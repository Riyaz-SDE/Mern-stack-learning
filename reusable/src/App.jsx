
import './App.css'

import img from '../Screenshot (15).png'
import ProfileCard from './component/profile/ProfileCard'
import { IoMdLink } from "react-icons/io";
import { FaCalendar } from "react-icons/fa";
function App() {

const p = `#ececec`
const gray = `#99a2ab`
const blue = `#0d6efd`
const primary = `16px`
const secondary = `13px`
  return (
    <>
      <div className='w-screen h-screen p-10  bg-black'>
        <ProfileCard className={`bg-[#333] px-4 py-4 rounded-[16px] `}>
          <ProfileCard.Img src={img}/> {/*image */}
          <ProfileCard.Name>
            <h3 className={`text-customWhite text-primary font-bold`}>lorem</h3>
            <h4 className={`text-customGray text-secondary`}>@lorem</h4>
          </ProfileCard.Name>
          <ProfileCard.FollowBtn>+Follow</ProfileCard.FollowBtn>
          <ProfileCard.Bio>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatum pariatur laborum, fugit accusamus 
            aliquid assumenda magnam autem temporibus dolore optio quo nulla corporis officiis doloremque. Voluptatem, consequuntur? Eius, possimus.
          </ProfileCard.Bio>
          
          <div className=" col-span-2  flex items-center gap-1">
            <IoMdLink color='#999'/> <a className={`text-secondary hover:opacity-75 text-customBlue cursor-pointer`}>profile/name</a>
          </div>

          <div className={`col-span-1  flex items-center gap-1 ml-4 font-medium text-customWhite text-secondary`}>
            <FaCalendar color='#999'/> <p className='text-secondary'>Joined on Feb 2024</p>
          </div>

          <div className={`row-start-4 row-end-5 col-span-2 flex gap-1 text-secondary`}>
            <span className={`text-customWhite`}>1k</span>
            <p className={`text-customGray`}>Followers</p>
          </div>

          <div className={`row-start-4 row-end-5  flex gap-1 text-secondary`}>
            <span className={`text-customWhite`}>1k</span>
            <p className={`text-customGray`}>Following</p>
          </div>

        </ProfileCard>
      </div>
    </>
  )
}

export default App
