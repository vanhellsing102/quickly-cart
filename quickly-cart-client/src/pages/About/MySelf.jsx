import MyImage from "../../assets/about/murad.jpg";

const MySelf = () => {
    return (
        <div>
            <h2 className='text-4xl font-semibold text-fuchsia-600 mb-1 text-center'>Who am I:</h2>
            <div className="flex justify-center md:gap-20 gap-3 items-center md:flex-row flex-col-reverse">
                <p className='text-slate-800 gap-5 md:w-2/4'>I’m Murad — a passionate full-stack web developer from Bangladesh.
                With a deep interest in MERN stack development, I love creating interactive, real-world applications likechat apps, e-commerce platforms, and review-based services. <br />
                My journey began with curiosity and has turned into a passion for solving real-world problems through code.
                I enjoy learning new technologies, experimenting with UI/UX, and continuously improving myself as a developer.
                I believe in building with purpose — and Quicky Cart is a reflection of that belief.</p>
                <img className="w-[250px] rounded-xl border border-slate-600 shadow-2xl shadow-blue-400" src={MyImage} alt="" />
            </div>
        </div>
    );
};

export default MySelf;