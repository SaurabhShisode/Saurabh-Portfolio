"use client";


export default function Testimonials() {
    const testimonialsCol1 = [
        "Saurabh delivers clean and reliable engineering every single time.",
        "Exceptionally strong at breaking down complex logic.",
        "Writes code that is both scalable and easy to maintain.",
        "Always brings clarity and structure to the team.",
        "A problem solver who thinks in systems, not snippets.",
        "Knows how to balance speed with quality.",
        "Very consistent with performance and delivery.",
        "Thrives in high-pressure and fast-paced environments.",
        "Understands modern tech stacks deeply.",
        "Transforms ideas into solid products quickly."
    ];

    const testimonialsCol2 = [
        "One of the most dependable developers I've collaborated with.",
        "Communicates clearly and works extremely well with teams.",
        "Has a sharp eye for UI, UX and smooth user flow.",
        "Always contributes meaningful suggestions in discussions.",
        "Great ability to debug and resolve issues efficiently.",
        "Learns new technologies fast and applies them well.",
        "Shows ownership and responsibility on all tasks.",
        "Builds stable and secure backend systems.",
        "Brings positive energy to the team.",
        "A developer who genuinely loves building things."
    ];

    const testimonialsCol3 = [
        "Consistently produces high quality and efficient code.",
        "Amazing at identifying edge cases others miss.",
        "Understands both frontend and backend deeply.",
        "Takes initiative without being asked.",
        "Always meets deadlines with well tested work.",
        "Brilliant logic and strong computer science foundation.",
        "Very quick at converting ideas into prototypes.",
        "Has a natural sense for clean architecture.",
        "Pays attention to small yet important details.",
        "Reliable, skilled and highly passionate developer."
    ];

    return (
        <section id="testimonials" className="pb-10 md:pb-20 bg-[#0d1117] text-white font-inter">
            <h1
                className="font-inter text-3xl md:text-4xl mb-10 text-center font-bold text-white z-10 rotate-[-1deg]"
               
            >
                What People <span className="text-[#caa9d3]">Say</span>
            </h1>

            <div className="relative overflow-hidden overflow-x-visible h-96">
             
                <div className="absolute -translate-y-1 md:-translate-y-0 top-0 w-full h-20 bg-gradient-to-b from-[#0d1117] to-transparent z-20"></div>
                <div className="absolute translate-y-1 md:translate-y-0 bottom-0  w-full h-20 bg-gradient-to-t from-[#0d1117] to-transparent z-20"></div>

                <div className="grid grid-cols-3 gap-5 md:gap-10 px-4 md:px-54 absolute">

 
                    <div className="relative ">
                        <div className="space-y-6 animate-col1">
                            {[...Array(10)].flatMap(() => testimonialsCol1).map((t, i) => (
                                <div
                                    key={i}
                                    className="p-3 md:p-6 bg-[#121924]/80 backdrop-blur-sm border border-[#2d384d] 
             rounded-xl h-40 shadow-[0_0_20px_rgba(0,0,0,0.3)]
             transition-all duration-500 transform 
             hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(202,169,211,0.4)] 
             hover:border-[#caa9d3]/50
             animate-floating
             rotate-[0deg] hover:rotate-[-1deg] group"
                                >
                                    <p className="text-gray-300 leading-relaxed font-inter text-[13px] md:text-lg tracking-wide">
                                        {t}
                                    </p>
                                    

                                </div>

                            ))}
                        </div>
                    </div>

                    <div className="relative ">
                        <div className="space-y-6 animate-col2 translate-y-24">
                            {[...Array(10)].flatMap(() => testimonialsCol2).map((t, i) => (
                                <div
                                    key={i}
                                    className="p-3 md:p-6 bg-[#121924]/80 backdrop-blur-sm border border-[#2d384d] 
             rounded-xl h-40 shadow-[0_0_20px_rgba(0,0,0,0.3)]
             transition-all duration-500 transform 
             hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(202,169,211,0.4)] 
             hover:border-[#caa9d3]/50
             animate-floating
             rotate-[0deg] hover:rotate-[-1deg]"
                                >
                                    <p className="text-gray-300 leading-relaxed font-inter text-[13px] md:text-lg tracking-wide">
                                        {t}
                                    </p>
                                </div>

                            ))}
                        </div>
                    </div>

                    <div className="relative ">
                        <div className="space-y-6 animate-col3 translate-y-48">
                            {[...Array(10)].flatMap(() => testimonialsCol3).map((t, i) => (
                                <div
                                    key={i}
                                    className="p-3 md:p-6 bg-[#121924]/80 backdrop-blur-sm border border-[#2d384d] 
             rounded-xl h-40 shadow-[0_0_20px_rgba(0,0,0,0.3)]
             transition-all duration-500 transform 
             hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(202,169,211,0.4)] 
             hover:border-[#caa9d3]/50
             animate-floating
             rotate-[0deg] hover:rotate-[-1deg]"
                                >
                                    <p className="text-gray-300 leading-relaxed font-inter text-[13px] md:text-lg tracking-wide">
                                        {t}
                                    </p>
                                </div>

                            ))}
                        </div>
                    </div>

                </div>
            </div>
            
        </section>
    );
}
