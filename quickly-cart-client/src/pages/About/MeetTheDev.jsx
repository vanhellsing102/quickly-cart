import { FaConnectdevelop } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FiGithub } from "react-icons/fi";
import {Link} from "react-router-dom"

const MeetTheDev = () => {
    return (
        <div className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-6">Meet the Developer</h2>
      <div className="space-y-6">
        <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <FaConnectdevelop className="text-3xl text-blue-600" />
          <div>
            <p className="text-xl font-semibold text-blue-800">Murad</p>
            <p className="text-lg text-gray-700">Full Stack Developer</p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <TfiEmail className="text-3xl text-blue-600" />
          <a href="mailto:vvanhellsing30@gmail.com" className="text-lg text-blue-800 hover:underline">vvanhellsing30@gmail.com</a>
        </div>
        <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <FiGithub className="text-3xl text-blue-600" />
          <a href="https://github.com/vanhellsing102" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-800 hover:underline">GitHub Profile</a>
        </div>
      </div>
    </div>
    );
};

export default MeetTheDev;