import { FaCog } from 'react-icons/fa';

const Skills = (props:any) => {
    return (
        <div className={ "py-4 border-b-2 border-white " + props.className }>
            <div className="p-2 flex flex-row items-center">
                <FaCog className="text-teal-700 mr-3" /> Skills
            </div>
            <div className="flex flex-row flex-wrap justify-start">
                <div className="py-2 px-3 m-2 bg-teal-700 rounded-xl">HTML</div>
                <div className="py-2 px-3 m-2 bg-teal-700 rounded-xl">CSS</div>
                <div className="py-2 px-3 m-2 bg-teal-700 rounded-xl">Javascript</div>
                <div className="py-2 px-3 m-2 bg-teal-700 rounded-xl">Vue</div>
                <div className="py-2 px-3 m-2 bg-teal-700 rounded-xl">ReactJS</div>
                <div className="py-2 px-3 m-2 bg-teal-700 rounded-xl">Tailwind</div>
                <div className="py-2 px-3 m-2 bg-teal-700 rounded-xl">C/C++</div>
                <div className="py-2 px-3 m-2 bg-teal-700 rounded-xl">Python</div>
                <div className="py-2 px-3 m-2 bg-teal-700 rounded-xl">Machine Learning</div>
            </div>
        </div>
    )
}


export default Skills;