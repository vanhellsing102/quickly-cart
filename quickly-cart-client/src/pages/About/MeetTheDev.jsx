import { FaConnectdevelop } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FiGithub } from "react-icons/fi";
import {Link} from "react-router-dom"

const MeetTheDev = () => {
    return (
        <div className="flex flex-col items-center">
            <h2 className='text-3xl font-semibold text-blue-600 mb-1'>Meet the developer:</h2>
            <div>
                <p className="flex items-center gap-2">
                    <FaConnectdevelop className="text-2xl"></FaConnectdevelop>
                    <span className="text-lg">Developed by <span className="font-medium text-red-500">Murad</span></span>
                </p>
                <p className="flex items-center gap-2">
                    <TfiEmail className="text-xl"></TfiEmail>
                    <span className="font-semibold">Email:</span>
                    <span className="text-lg">vvanhellsing30@gmail.com</span>
                </p>
                <p className="flex items-center gap-2">
                    <FiGithub className="text-2xl"></FiGithub>
                    <span className="font-semibold">Github:</span>
                    <a className="underline underline-offset-2" href="https://github.com/vanhellsing102" target="_blank">Github</a>
                </p>
            </div>
        </div>
    );
};

export default MeetTheDev;