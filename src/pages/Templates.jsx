import { ArrowLeft, ExternalLink, Eye, Search, Star } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import resturant_pic from '../assets/resturant.jpg'
import gym_pic from '../assets/gym.jpg'
import coaching_pic from '../assets/coaching.jpg'
import designer_pic from '../assets/designer.jpeg'
import cs_pic from '../assets/cs.jpg'
import business_pic from '../assets/business.jpeg'

const Templates = () => {
    const navigate = useNavigate();

    const [active, setActive] = useState("All Templates");

    const filters = ["All Templates", "Business", "Portfolio"];

    const [count, setCount] = useState(9);

    return (
        <div>
            <div className="navbar h-15 bg-white border-b-1 border-black/10 flex items-center px-5 md:px-18 justify-between">
                <p className="text-[0.85rem] font-semibold flex items-center gap-1 p-2 rounded-md transition-all duration-200 hover:bg-gray-100 cursor-pointer"
                    onClick={() => navigate("/")}>
                    <ArrowLeft className="h-3.5 w-3.5" /> Back to Home
                </p>
                <div className="brand flex items-center gap-3">
                    <div className="deco bg-black h-5 md:h-7 w-5 md:w-7 flex items-center justify-center rounded-md">
                        <Star className="text-white h-3 md:h-4 w-3 md:w-4 fill-white" />
                    </div>
                    <p className="text-[1rem] md:text-[1.2rem] font-bold">AstraWeb</p>
                </div>
            </div>

            <div className="box bg-gray-50 pb-5">
                <p className="text-[2rem] text-center font-bold pt-5 mb-2">
                    Real Examples, Real Results
                </p>
                <p className="text-center p-5 md:p-0 md:px-80 text-gray-500 text-[0.9rem]">
                    See how businesses and students use AstraWeb to create stunning
                    websites that drive conversions and showcase their best work.
                </p>
            </div>

            <div className="filter flex flex-col md:flex-row gap-3 justify-between px-5 md:px-20 my-5">
                <div className="box">
                    <ul className="flex bg-gray-100 rounded-lg py-1 gap-10 font-semibold text-[0.8rem]">
                        {filters.map((item) => (
                            <li
                                key={item}
                                onClick={() => setActive(item)}
                                className={`cursor-pointer rounded-lg px-3 py-1 transition-colors duration-200 ${active === item ? "bg-white shadow-xl" : ""
                                    }`}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="search flex items-center bg-gray-100 py-1.5 px-3 rounded-md">
                    <Search className="text-gray-400 h-4 w-4" />
                    <input type="text" placeholder="Search templates" className="bg-gray-100 rounded-md w-[20vw] px-2 outline-none text-[0.8rem]" />
                </div>
            </div>

            <div className="box md:px-20 py-5">
                <p className='text-[0.9rem] text-gray-500 px-5 md:px-0'>Showing {active==='All Templates' && count} {active==='Business' && 3} {active==='Portfolio' && 3} templates</p>
                <div className="boxes mt-10 pb-20 flex flex-col flex-wrap gap-x-18 gap-y-16 md:flex-row items-center">
                    {active !== 'Business' &&
                        <div className="box w-[90vw] md:w-[25vw] border border-black/10 rounded-b-lg rounded-t-lg overflow-clip">
                            <div className="img h-45 w-full overflow-hidden relative group">
                                <div className="absolute z-20 inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                                <p className="absolute cursor-pointer top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-20 bg-white text-[0.7rem] flex items-center gap-1 rounded-md py-1.5 px-2.5 font-semibold opacity-0 transition-all duration-300 group-hover:opacity-100">
                                    <Eye className="h-4 w-4" /> View Live Demo
                                </p>
                                <img src={designer_pic} alt="" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                            </div>
                            <div className="content p-5">
                                <div className="header flex justify-between">
                                    <p className='text-[0.9rem] font-semibold border border-black/20 px-2    w-fit rounded-md'>Designer</p>
                                    <p className='flex items-center text-[0.9rem]'> 4.9 <Star className='fill-yellow-400 stroke-0 h-4.5 w-4.5'></Star> </p>
                                </div>
                                <p className='font-semibold text-[1rem] my-3'>Pandu Misra</p>
                                <p className='text-gray-500 text-[0.9rem]'>Full-stack developer portfolio with project showcases and technical skills</p>
                                <div className="cards flex flex-wrap my-3 gap-x-3 gap-y-2">
                                    <div className="card bg-gray-100 text-[0.7rem] py-0.5 px-2.5 rounded-md font-semibold">Canva</div>
                                    <div className="card bg-gray-100 text-[0.7rem] py-0.5 px-2.5 rounded-md font-semibold">Adobe</div>
                                    <div className="card bg-gray-100 text-[0.7rem] py-0.5 px-2.5 rounded-md font-semibold">Pixel Studio</div>
                                    <div className="card bg-gray-100 text-[0.7rem] py-0.5 px-2.5 rounded-md font-semibold">Random skill</div>
                                    <div className="card bg-gray-100 text-[0.7rem] py-0.5 px-2.5 rounded-md font-semibold">Designing</div>
                                </div>
                                <div className="coversion flex justify-between items-center">
                                    <p className='text-gray-500 text-[0.9rem] my-2'>Offers : </p>
                                    <p className='text-[0.9rem] font-semibold'>12</p>
                                </div>
                                <button className='w-full border border-black/20 rounded-md cursor-pointer mt-5 font-semibold text-[0.9rem] py-1 mx-auto flex items-center justify-center gap-2 transition-all duration-200 hover:bg-gray-100'> <ExternalLink className='h-4 w-4'></ExternalLink> Use this template</button>
                            </div>
                        </div>
                    }
                    {active !== 'Portfolio' &&
                        <div className="box w-[90vw] md:w-[25vw] border border-black/10 rounded-b-lg rounded-t-lg overflow-clip">
                            <div className="img h-45 w-full overflow-hidden relative group">
                                <div className="absolute z-20 inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                                <p className="absolute cursor-pointer top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-20 bg-white text-[0.7rem] flex items-center gap-1 rounded-md py-1.5 px-2.5 font-semibold opacity-0 transition-all duration-300 group-hover:opacity-100">
                                    <Eye className="h-4 w-4" /> View Live Demo
                                </p>
                                <img src={resturant_pic} alt="" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                            </div>
                            <div className="content p-5">
                                <div className="header flex justify-between">
                                    <p className='text-[0.9rem] font-semibold border border-black/20 px-2    w-fit rounded-md'>Restaurant</p>
                                    <p className='flex items-center text-[0.9rem]'> 4.9 <Star className='fill-yellow-400 stroke-0 h-4.5 w-4.5'></Star> </p>
                                </div>
                                <p className='font-semibold text-[1rem] my-3'>Bella Vita Restaurant</p>
                                <p className='text-gray-500 text-[0.9rem]'>Elegant dining experience with online reservations and menu showcase</p>
                                <div className="cards flex flex-wrap my-3 gap-x-3 gap-y-2">
                                    <div className="card bg-gray-100 text-[0.7rem] py-0.5 px-2.5 rounded-md font-semibold">Online Menu</div>
                                    <div className="card bg-gray-100 text-[0.7rem] py-0.5 px-2.5 rounded-md font-semibold">Reservations</div>
                                    <div className="card bg-gray-100 text-[0.7rem] py-0.5 px-2.5 rounded-md font-semibold">Gallery</div>
                                    <div className="card bg-gray-100 text-[0.7rem] py-0.5 px-2.5 rounded-md font-semibold">Experience</div>
                                    <div className="card bg-gray-100 text-[0.7rem] py-0.5 px-2.5 rounded-md font-semibold">Contact form</div>
                                </div>
                                <div className="coversion flex justify-between items-center">
                                    <p className='text-gray-500 text-[0.9rem] my-2'>Conversion Rate : </p>
                                    <p className='text-[0.9rem] font-semibold'>65%</p>
                                </div>
                                <button className='w-full border border-black/20 rounded-md cursor-pointer mt-5 font-semibold text-[0.9rem] py-1 mx-auto flex items-center justify-center gap-2 transition-all duration-200 hover:bg-gray-100'> <ExternalLink className='h-4 w-4'></ExternalLink> Use this template</button>
                            </div>
                        </div>
                    }
                    {active !== 'Portfolio' &&
                        <div className="box w-[90vw] md:w-[25vw] border border-black/10 rounded-b-lg rounded-t-lg overflow-clip">
                            <div className="img h-45 w-full overflow-hidden relative group">
                                <div className="absolute z-20 inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                                <p className="absolute cursor-pointer top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-20 bg-white text-[0.7rem] flex items-center gap-1 rounded-md py-1.5 px-2.5 font-semibold opacity-0 transition-all duration-300 group-hover:opacity-100">
                                    <Eye className="h-4 w-4" /> View Live Demo
                                </p>
                                <img src={gym_pic} alt="" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                            </div>
                            <div className="content p-5">
                                <div className="header flex justify-between">
                                    <p className='text-[0.9rem] font-semibold border border-black/20 px-2    w-fit rounded-md'>Gymnasium</p>
                                    <p className='flex items-center text-[0.9rem]'> 4.7 <Star className='fill-yellow-400 stroke-0 h-4.5 w-4.5'></Star> </p>
                                </div>
                                <p className='font-semibold text-[1rem] my-3'>Real Builders</p>
                                <p className='text-gray-500 text-[0.9rem]'>Modern fitness center with membership plans and class schedules</p>
                                <div className="cards flex flex-wrap my-3 gap-x-3 gap-y-2">
                                    <div className="card bg-gray-100 text-[0.7rem] py-0.5 px-2.5 rounded-md font-semibold">Routines</div>
                                    <div className="card bg-gray-100 text-[0.7rem] py-0.5 px-2.5 rounded-md font-semibold">Workout</div>
                                    <div className="card bg-gray-100 text-[0.7rem] py-0.5 px-2.5 rounded-md font-semibold">Schedules</div>
                                    <div className="card bg-gray-100 text-[0.7rem] py-0.5 px-2.5 rounded-md font-semibold">Lifestyle</div>
                                    <div className="card bg-gray-100 text-[0.7rem] py-0.5 px-2.5 rounded-md font-semibold">Diet Planner</div>
                                </div>
                                <div className="coversion flex justify-between items-center">
                                    <p className='text-gray-500 text-[0.9rem] my-2'>Conversion Rate : </p>
                                    <p className='text-[0.9rem] font-semibold'>30%</p>
                                </div>
                                <button className='w-full border border-black/20 rounded-md cursor-pointer mt-5 font-semibold text-[0.9rem] py-1 mx-auto flex items-center justify-center gap-2 transition-all duration-200 hover:bg-gray-100'> <ExternalLink className='h-4 w-4'></ExternalLink> Use this template</button>
                            </div>
                        </div>
                    }
                    {active !== 'Portfolio' &&
                        <div className="box w-[90vw] md:w-[25vw] border border-black/10 rounded-b-lg rounded-t-lg overflow-clip">
                            <div className="img h-45 w-full overflow-hidden relative group">
                                <div className="absolute z-20 inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                                <p className="absolute cursor-pointer top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-20 bg-white text-[0.7rem] flex items-center gap-1 rounded-md py-1.5 px-2.5 font-semibold opacity-0 transition-all duration-300 group-hover:opacity-100">
                                    <Eye className="h-4 w-4" /> View Live Demo
                                </p>
                                <img src={coaching_pic} alt="" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                            </div>
                            <div className="content p-5">
                                <div className="header flex justify-between">
                                    <p className='text-[0.9rem] font-semibold border border-black/20 px-2    w-fit rounded-md'>Coaching center</p>
                                    <p className='flex items-center text-[0.9rem]'> 4.5 <Star className='fill-yellow-400 stroke-0 h-4.5 w-4.5'></Star> </p>
                                </div>
                                <p className='font-semibold text-[1rem] my-3'>Coaching Center</p>
                                <p className='text-gray-500 text-[0.9rem]'>Professional coaching center websites which attracts students</p>
                                <div className="cards flex flex-wrap my-3 gap-x-3 gap-y-2">
                                    <div className="card bg-gray-100 text-[0.7rem] py-0.5 px-2.5 rounded-md font-semibold">Study table</div>
                                    <div className="card bg-gray-100 text-[0.7rem] py-0.5 px-2.5 rounded-md font-semibold">Routines</div>
                                    <div className="card bg-gray-100 text-[0.7rem] py-0.5 px-2.5 rounded-md font-semibold">Extra classes</div>
                                    <div className="card bg-gray-100 text-[0.7rem] py-0.5 px-2.5 rounded-md font-semibold">Exams</div>
                                    <div className="card bg-gray-100 text-[0.7rem] py-0.5 px-2.5 rounded-md font-semibold">Assessments</div>
                                </div>
                                <div className="coversion flex justify-between items-center">
                                    <p className='text-gray-500 text-[0.9rem] my-2'>Conversion Rate : </p>
                                    <p className='text-[0.9rem] font-semibold'>46%</p>
                                </div>
                                <button className='w-full border border-black/20 rounded-md cursor-pointer mt-5 font-semibold text-[0.9rem] py-1 mx-auto flex items-center justify-center gap-2 transition-all duration-200 hover:bg-gray-100'> <ExternalLink className='h-4 w-4'></ExternalLink> Use this template</button>
                            </div>
                        </div>
                    }
                    {active !== 'Business' &&
                        <div className="box w-[90vw] md:w-[25vw] border border-black/10 rounded-b-lg rounded-t-lg overflow-clip">
                            <div className="img h-45 w-full overflow-hidden relative group">
                                <div className="absolute z-20 inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                                <p className="absolute cursor-pointer top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-20 bg-white text-[0.7rem] flex items-center gap-1 rounded-md py-1.5 px-2.5 font-semibold opacity-0 transition-all duration-300 group-hover:opacity-100">
                                    <Eye className="h-4 w-4" /> View Live Demo
                                </p>
                                <img src={cs_pic} alt="" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                            </div>
                            <div className="content p-5">
                                <div className="header flex justify-between">
                                    <p className='text-[0.9rem] font-semibold border border-black/20 px-2    w-fit rounded-md'>Software Engineer</p>
                                    <p className='flex items-center text-[0.9rem]'> 4.7 <Star className='fill-yellow-400 stroke-0 h-4.5 w-4.5'></Star> </p>
                                </div>
                                <p className='font-semibold text-[1rem] my-3'>Saibalik Chakraborty</p>
                                <p className='text-gray-500 text-[0.9rem]'>Full-stack developer portfolio with project showcases and technical skills</p>
                                <div className="cards flex flex-wrap my-3 gap-x-3 gap-y-2">
                                    <div className="card bg-gray-100 text-[0.7rem] py-0.5 px-2.5 rounded-md font-semibold">React.js</div>
                                    <div className="card bg-gray-100 text-[0.7rem] py-0.5 px-2.5 rounded-md font-semibold">Express.js</div>
                                    <div className="card bg-gray-100 text-[0.7rem] py-0.5 px-2.5 rounded-md font-semibold">MongoDB</div>
                                    <div className="card bg-gray-100 text-[0.7rem] py-0.5 px-2.5 rounded-md font-semibold">DevOps</div>
                                    <div className="card bg-gray-100 text-[0.7rem] py-0.5 px-2.5 rounded-md font-semibold">Problem solving</div>
                                </div>
                                <div className="coversion flex justify-between items-center">
                                    <p className='text-gray-500 text-[0.9rem] my-2'>Offers : </p>
                                    <p className='text-[0.9rem] font-semibold'>20</p>
                                </div>
                                <button className='w-full border border-black/20 rounded-md cursor-pointer mt-5 font-semibold text-[0.9rem] py-1 mx-auto flex items-center justify-center gap-2 transition-all duration-200 hover:bg-gray-100'> <ExternalLink className='h-4 w-4'></ExternalLink> Use this template</button>
                            </div>
                        </div>
                    }
                    {active !== 'Business' &&
                        <div className="box w-[90vw] md:w-[25vw] border border-black/10 rounded-b-lg rounded-t-lg overflow-clip">
                            <div className="img h-45 w-full overflow-hidden relative group">
                                <div className="absolute z-20 inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                                <p className="absolute cursor-pointer top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-20 bg-white text-[0.7rem] flex items-center gap-1 rounded-md py-1.5 px-2.5 font-semibold opacity-0 transition-all duration-300 group-hover:opacity-100">
                                    <Eye className="h-4 w-4" /> View Live Demo
                                </p>
                                <img src={business_pic} alt="" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                            </div>
                            <div className="content p-5">
                                <div className="header flex justify-between">
                                    <p className='text-[0.9rem] font-semibold border border-black/20 px-2    w-fit rounded-md'>Businessman</p>
                                    <p className='flex items-center text-[0.9rem]'> 4.5 <Star className='fill-yellow-400 stroke-0 h-4.5 w-4.5'></Star> </p>
                                </div>
                                <p className='font-semibold text-[1rem] my-3'>Random Guy</p>
                                <p className='text-gray-500 text-[0.9rem]'>Creative portfolio showcasing design process and user experience projects</p>
                                <div className="cards flex flex-wrap my-3 gap-x-3 gap-y-2">
                                    <div className="card bg-gray-100 text-[0.7rem] py-0.5 px-2.5 rounded-md font-semibold">Economy</div>
                                    <div className="card bg-gray-100 text-[0.7rem] py-0.5 px-2.5 rounded-md font-semibold">Market</div>
                                    <div className="card bg-gray-100 text-[0.7rem] py-0.5 px-2.5 rounded-md font-semibold">Stocks</div>
                                    <div className="card bg-gray-100 text-[0.7rem] py-0.5 px-2.5 rounded-md font-semibold">Equity</div>
                                    <div className="card bg-gray-100 text-[0.7rem] py-0.5 px-2.5 rounded-md font-semibold">Stock market</div>
                                </div>
                                <div className="coversion flex justify-between items-center">
                                    <p className='text-gray-500 text-[0.9rem] my-2'>Conversion Rate : </p>
                                    <p className='text-[0.9rem] font-semibold'>46%</p>
                                </div>
                                <button className='w-full border border-black/20 rounded-md cursor-pointer mt-5 font-semibold text-[0.9rem] py-1 mx-auto flex items-center justify-center gap-2 transition-all duration-200 hover:bg-gray-100'> <ExternalLink className='h-4 w-4'></ExternalLink> Use this template</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Templates;
