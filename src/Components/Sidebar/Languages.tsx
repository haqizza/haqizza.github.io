import { FaGlobe, FaRegStar } from 'react-icons/fa';

const Languages = (props:any) => {
    return (
        <div className={ "py-4 border-b-2 border-white " + props.className }>
            <div className="p-2 flex flex-row items-center">
                <FaGlobe className="text-teal-700 mr-3" /> Languages
            </div>
            <div className="flex flex-row flex-wrap justify-start">
                <div className="flex flex-row py-2 px-3 m-2 bg-teal-700 rounded-xl">Indonesian<FaRegStar/></div>
                <div className="flex flex-row py-2 px-3 m-2 bg-teal-700 rounded-xl">Sundanese<FaRegStar/></div>
                <div className="py-2 px-3 m-2 bg-teal-700 rounded-xl">English</div>
                <div className="py-2 px-3 m-2 bg-teal-700 rounded-xl">Japanese</div>
                <div className="py-2 px-3 m-2 bg-teal-700 rounded-xl">Arabic</div>
            </div>
        </div>
    )
}


export default Languages;