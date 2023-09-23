import loading from '../assets/icons/loading.svg'
const Loading = () => {
  return (
    <div className="flex items-center justify-center flex-grow">
        <img src={loading} alt="loading icon" className='animate-spin h-8 w-8 block' />
        <p className="ml-2 text-sm">Loading...</p>
    </div>
  );
};

export default Loading;
