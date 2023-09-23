// eslint-disable-next-line react/prop-types
const PouUp = ({children}) => {
  return (
    <div className="fixed top-0 left-0 min-w-full h-full z-20 bg-custom-purple-one bg-opacity-80 flex justify-center items-center">
        <div className='max-w-2xl w-[80%] border border-custom-purple-three rounded-lg h-[60vh] lg:h-[80vh] flex items-center'>
            {children}
        </div>
    </div>
  )
}

export default PouUp