const ProfileCard = ({children,className,...props}) => {
    return(<div className={`${className} grid  grid-cols-[65px,auto,1fr,1fr]
     gap-y-4  grid-rows-[auto,auto,auto,auto] `} {...props}>
        {children}
        {/* @Img name  follow */}
        {/* paragraph */}
        {/* link joined date */}
        {/* follwers following */}
    </div>)
}
export default ProfileCard

const Img = ({className,...props}) => {
    return(
        <img className={`${className} rounded-[50%] aspect-square h-[65px] text-2xl col-span-1`} {...props} />
    )
}

const Name = ({className,children,...props}) => {
    return(
        <div className={`col-span-2 px-4 flex flex-col justify-center  ${className}`} {...props}> 
        {children}
      </div> 
    )
}

const FollowBtn = ({className,children,...props}) => {
    return(<button className={`transition duration-500 w-fit px-3 py-1 h-fit text-center items-center
        hover:text-customBlue 
        text-white border-[#0d6dfd] border-[2px]
         rounded-[50rem] ml-auto my-auto ${className}`} 
        {...props}>
         {children}
       </button>)
}

const Bio = ({className,children,...props}) => {
    return(<p className={` col-span-4  text-customWhite font-semibold ${className}`} 
        {...props}>
         {children}
       </p>)
}
ProfileCard.Img = Img
ProfileCard.Name = Name
ProfileCard.FollowBtn = FollowBtn
ProfileCard.Bio = Bio