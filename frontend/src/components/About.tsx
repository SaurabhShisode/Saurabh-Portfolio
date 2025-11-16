import robot from "../assets/robot.png";

export default function About() {
    return (
        <section className="bg-[#0d1117] text-white py-20 px-10 min-h-screen">
            <h1 className="font-inter text-5xl mb-10 text-center font-bold">
                A little bit <span className="text-[#caa9d3]">About Me</span>
            </h1>

            <div className="grid grid-cols-5 grid-rows-12 gap-10 mx-44 ">
                <div
                    className="col-span-3 row-span-6 bg-[#121924] border border-[#1f2b3f] rounded-2xl p-4 h-160 bg-cover bg-center bg-no-repeat group"

                >
                    <h1 className="font-inter text-3xl font-bold p-5 mr-18 group-hover:ml-3 transition-all duration-300 ease-in-out">
                        I create software that turns ideas into scalable products
                    </h1>
                </div>


                <div className="col-span-2 row-span-3 col-start-4 bg-[#121924] border border-[#1f2b3f]  rounded-2xl p-4 group"><h1 className="font-inter text-3xl font-bold p-5 mr-18 group-hover:ml-3 transition-all duration-300 ease-in-out">
                    My expertise include Web, AI, and backend
                </h1></div>

                <div className="col-span-2 row-span-3 col-start-4 row-start-4 bg-[#121924] border border-[#1f2b3f] rounded-2xl p-4 group">
                    <h1 className="font-inter text-3xl font-bold p-5 mr-18 leading-relaxed group-hover:ml-3 transition-all duration-300 ease-in-out">
                        <span className="text-sm font-light block">
                            I build products
                            <span className="block">with optimised</span>
                        </span>
                        <span className="block">tech stacks</span>
                    </h1>
                </div>


                <div className="col-span-2 row-span-3 row-start-7 bg-[#121924] border border-[#1f2b3f]  rounded-2xl p-4 group"><h1 className="font-inter text-3xl font-bold p-5 mr-20 group-hover:ml-3 transition-all duration-300 ease-in-out">
                    A curious developer obsessed with problem solving and user experience
                </h1></div>
                <div className="col-span-2 row-span-3 col-start-1 row-start-10 bg-[#121924] border border-[#1f2b3f]  rounded-2xl p-4">5</div>
                <div className="col-span-3 row-span-6 col-start-3 row-start-7 bg-[#121924]  border border-[#1f2b3f] rounded-2xl p-4 h-160 group">

                    <h1 className="font-inter text-3xl font-bold p-5 mr-20 group-hover:ml-3 transition-all duration-300 ease-in-out">
                        <span className="mb-3 text-sm font-light block">
                            The Insider

                        </span>
                        Solving real-world algorithmic challenges to sharpen problem-solving and system thinking
                    </h1></div>
            </div>
        </section>
    );
}
