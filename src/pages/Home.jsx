import landing_pic from '../assets/Astraweb-landing-pic.jpeg'
import landing_pic2 from '../assets/homepage-seen-computer-screen.jpg'
import { ArrowBigRight, ArrowRight, Check, Code2, Github, GraduationCap, IdCard, Layers, Linkedin, Mail, MailIcon, Palette, Quote, Star, Target, TrendingUp, Twitter, User, User2, User2Icon, UserSquare2, Zap } from 'lucide-react'
import Navbar from '../components/Navbar'
import business_template_pic from '../assets/business-template.jpeg'
import portfolio_template_pic from '../assets/portfolio-template.jpg'
import useIsMobile from '../components/useIsMobile'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();

    const isMobile = useIsMobile();

    return (
        <>
            <div>
                <Navbar />

                <div id='home' className="box h-screen flex flex-col md:flex-row">
                    <div className="boxes h-full w-[100%] md:w-[40%] flex flex-col md:pl-20 p-5 md:p-0 gap-5 justify-center">
                        <div className="brand flex items-center gap-3">
                            <div className="deco bg-black h-7 md:h-9 w-7 md:w-9 flex items-center justify-center rounded-md">
                                <Star className='text-white h-4 md:h-5 w-4 md:w-5 fill-white'></Star>
                            </div>
                            <p className='text-[1rem] md:text-[1.2rem] font-bold'>AstraWeb</p>
                        </div>
                        <p className='font-bold text-[1.8rem] md:text-[2.5rem]'>Build Your Digital <br /> Presence Effortlessly</p>
                        <p className='text-gray-500'>Create stunning landing pages for your business or showcase your skills with personalized portfolios.
                            Professional, modern, and conversion-focused designs made simple.
                        </p>
                        <div className="buttons flex gap-5">
                            <button className='flex items-center gap-3 bg-black text-white/90 font-semibold text-[0.9rem] py-1.5 px-3.5 rounded-md transition-all duration-300 hover:shadow-xl cursor-pointer'>Get Started <ArrowRight className='h-4 w-4 opacity-90'></ArrowRight> </button>
                            <button className='bg-white text-black/80 border border-black/20 px-3.5 rounded-md text-[0.9rem] font-semibold transition-all duration-300 hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/examples')}>View Examples</button>
                        </div>
                    </div>
                    <div className="boxes h-full w-[100%] md:w-[60%] px-5 md:px-20 flex items-center justify-center">
                        <div className="pic flex justify-center items-center bg-white shadow-xl border border-black/10 rounded-3xl p-5 h-fit md:h-100">
                            <img src={landing_pic2} alt="" className='object-contain rounded-2xl' />
                        </div>
                    </div>
                </div>

                <div id='business' className="box">
                    <p className='bg-gray-200 text-[0.7rem] font-semibold p-0.5 w-22 text-center mx-auto rounded-md'>For Business</p>
                    <div className="heading1 w-[100vw] md:w-[50vw] text-center mx-auto mt-3">
                        <p className='text-[1.74rem] font-bold'>Professional Landing Pages That Convert</p>
                    </div>
                    <div className="heading1 w-[100vw] md:w-[50vw] text-center mx-auto my-3">
                        <p className='text-[1rem] text-gray-500 px-14'>Showcase your services, highlight your expertise, and convert visitors into customers with our conversion-optimized business templates.</p>
                    </div>
                    <div className="box flex flex-col md:flex-row my-5 md:my-15">
                        <div className="boxes w-[100%] md:w-[50%] p-5 md:p-0 md:pl-20 md:pr-5 md:pb-5">
                            <div className="relative w-full rounded-t-2xl shadow-lg overflow-hidden">
                                <img src={business_template_pic} alt="" className="rounded-t-2xl transition-transform duration-500 hover:scale-105 w-full" />
                            </div>
                            <div className='bg-white h-26 shadow-lg border-black/10 w-full rounded-b-2xl'>
                                <p className='text-[0.9rem] font-semibold pl-5 pt-5'>Professional Services Template</p>
                                <p className='text-[0.7rem] text-gray-500 pl-5 pt-3'>Clean design with service highlights and clear calls-to-action</p>
                            </div>
                        </div>
                        <div className="boxes w-[100%] md:w-[50%] flex flex-col p-5 md:p-0 gap-5 md:gap-0 md:pl-5">
                            <div className="rows h-[25%] flex gap-3">
                                <div className="bg-gray-200 h-10 w-20 md:w-10 rounded-md flex items-center justify-center">
                                    <TrendingUp className='h-5 w-5'></TrendingUp>
                                </div>
                                <div>
                                    <p className='font-semibold mb-2'>Conversion Focused</p>
                                    <p className='text-[0.9rem] text-gray-500'>Optimized layouts that turn visitors into customers with strategic call-to-action placement</p>
                                </div>
                            </div>
                            <div className="rows h-[25%] flex gap-3">
                                <div className="bg-gray-200 h-10 w-20 md:w-10 rounded-md flex items-center justify-center">
                                    <User className='h-5 w-5'></User>
                                </div>
                                <div>
                                    <p className='font-semibold mb-2'>Professional Design</p>
                                    <p className='text-[0.9rem] text-gray-500'>Clean, modern templates that build trust and credibility with your audience</p>
                                </div>
                            </div>
                            <div className="rows h-[25%] flex gap-3">
                                <div className="bg-gray-200 h-10 w-20 md:w-10 rounded-md flex items-center justify-center">
                                    <Zap className='h-5 w-5'></Zap>
                                </div>
                                <div>
                                    <p className='font-semibold mb-2'>Fast Loading</p>
                                    <p className='text-[0.9rem] text-gray-500'>Optimized for speed and performance to keep your visitors engaged</p>
                                </div>
                            </div>
                            <div className="rows h-[25%] flex gap-3">
                                <div className="bg-gray-200 h-10 w-20 md:w-10 rounded-md flex items-center justify-center">
                                    <Target className='h-5 w-5'></Target>
                                </div>
                                <div>
                                    <p className='font-semibold mb-2'>Mobile First</p>
                                    <p className='text-[0.9rem] text-gray-500'>Fully responsive designs that look perfect on all devices and screen sizes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='bg-black -mt-5 cursor-pointer text-white font-semibold text-[0.8rem] mx-auto py-1.5 px-2 flex items-center gap-2 rounded-md'>Explore Business Templates <ArrowRight className='h-4 w-4 opacity-90'></ArrowRight> </button>
                </div>

                <div id='portfolio' className="box mt-15 md:mt-25">
                    <p className='bg-gray-200 text-[0.7rem] font-semibold p-0.5 w-22 text-center mx-auto rounded-md'>For Students</p>
                    <div className="heading1 w-[100vw] md:w-[50vw] text-center mx-auto mt-3">
                        <p className='text-[1.74rem] font-bold'>Showcase Your Skills & Stand Out</p>
                    </div>
                    <div className="heading1 w-[100vw] md:w-[50vw] text-center mx-auto my-3">
                        <p className='text-[1rem] text-gray-500 px-5'>Create a professional portfolio that highlights your projects, skills, and achievements. Perfect for landing internships, jobs, or academic opportunities</p>
                    </div>
                    <div className="box flex flex-col md:flex-row mt-5 md:my-15">
                        <div className="boxes w-[100%] md:w-[50%] flex flex-col gap-5 md:gap-0 p-5 md:p-0 md:pl-20">
                            <div className="rows h-[25%] flex gap-3">
                                <div className="bg-gray-200 h-10 w-20 md:w-10 rounded-md flex items-center justify-center">
                                    <GraduationCap className='h-5 w-5'></GraduationCap>
                                </div>
                                <div>
                                    <p className='font-semibold mb-2'>Education Focused</p>
                                    <p className='text-[0.9rem] text-gray-500'>Perfect sections to showcase your academic achievements and learning journey</p>
                                </div>
                            </div>
                            <div className="rows h-[25%] flex gap-3">
                                <div className="bg-gray-200 h-10 w-20 md:w-10 rounded-md flex items-center justify-center">
                                    <Code2 className='h-5 w-5'></Code2>
                                </div>
                                <div>
                                    <p className='font-semibold mb-2'>Project Gallery</p>
                                    <p className='text-[0.9rem] text-gray-500'>Beautiful layouts to display your coding projects and technical skills</p>
                                </div>
                            </div>
                            <div className="rows h-[25%] flex gap-3">
                                <div className="bg-gray-200 h-10 w-20 md:w-10 rounded-md flex items-center justify-center">
                                    <Palette className='h-5 w-5'></Palette>
                                </div>
                                <div>
                                    <p className='font-semibold mb-2'>Customizable Design</p>
                                    <p className='text-[0.9rem] text-gray-500'>Personalize colors, fonts, and layouts to match your unique style</p>
                                </div>
                            </div>
                            <div className="rows h-[25%] flex gap-3">
                                <div className="bg-gray-200 h-10 w-20 md:w-10 rounded-md flex items-center justify-center">
                                    <Layers className='h-5 w-5'></Layers>
                                </div>
                                <div>
                                    <p className='font-semibold mb-2'>Multi-Section</p>
                                    <p className='text-[0.9rem] text-gray-500'>Comprehensive sections for skills, experience, education, and contact information</p>
                                </div>
                            </div>
                        </div>
                        <div className="boxes w-[100%] md:w-[50%] p-5 md:p-0 md:pr-20 md:pl-5 md:pb-5">
                            <div className="relative w-full rounded-t-2xl shadow-lg overflow-hidden">
                                <img src={portfolio_template_pic} alt="" className="rounded-t-2xl transition-transform duration-500 hover:scale-105 w-full" />
                            </div>
                            <div className='bg-white h-26 shadow-lg border-black/10 w-full rounded-b-2xl'>
                                <p className='text-[0.9rem] font-semibold pl-5 pt-5'>Student Portfolio Template</p>
                                <p className='text-[0.7rem] text-gray-500 pl-5 pt-3'>Modern layout perfect for showcasing projects and skills</p>
                            </div>
                        </div>
                    </div>
                    <button className='bg-white border border-black/10 cursor-pointer text-black font-semibold text-[0.8rem] mx-auto py-1.5 px-2 flex items-center gap-2 rounded-md'>Explore Portfolio Templates <ArrowRight className='h-4 w-4 opacity-90'></ArrowRight> </button>
                </div>

                <div id='pricing' className="box mt-20">
                    <p className='font-bold text-[1.65rem] text-center'>Simple, Transparent Pricing</p>
                    <p className='text-[0.9rem] text-gray-500 text-center'>Choose the plan that fits your needs. Start free and upgrade as you grow</p>
                    <div className="boxes my-10 flex flex-col md:flex-row justify-center items-center gap-5">
                        <div className="box border border-black/10 w-[70%] md:w-[21%] rounded-xl p-5 transition-all duration-300 hover:scale-104 cursor-pointer hover:border-black">
                            <p className='font-semibold text-center mb-3'>Starter</p>
                            <p className='text-center font-bold text-[1.65rem] mb-3'>Free</p>
                            <p className='text-center text-gray-500 text-[0.9rem] mb-3'>Perfect for getting started</p>
                            <ul className='text-[0.8rem] flex flex-col gap-4 mt-10'>
                                <li className='flex gap-2 items-center'> <Check className='h-3.5 w-3.5'></Check> 1 website</li>
                                <li className='flex gap-2 items-center'> <Check className='h-3.5 w-3.5'></Check> Basic templates</li>
                                <li className='flex gap-2 items-center'> <Check className='h-3.5 w-3.5'></Check> Mobile responsive</li>
                                <li className='flex gap-2 items-center'> <Check className='h-3.5 w-3.5'></Check> Community support</li>
                                <li className='flex gap-2 items-center'> <Check className='h-3.5 w-3.5'></Check> AstraWeb subdomain</li>
                            </ul>
                            <button className='bg-white text-black py-1.5 w-full border border-black/10 font-semibold text-[0.8rem] rounded-md mt-10 cursor-pointer transition-all duration-300 hover:bg-black hover:text-white/90'>Get Started</button>
                        </div>
                        <div className="box border border-black/10 w-[70%] md:w-[21%] rounded-xl p-5 transition-all duration-300 hover:scale-104 cursor-pointer hover:border-black">
                            <p className='font-semibold text-center mb-3'>Portfolio</p>
                            <p className='text-center font-bold text-[1.65rem] mb-3'>&#8377;199 <span className='text-gray-500 font-light text-[0.8rem]'>/ website</span> </p>
                            <p className='text-center text-gray-500 text-[0.9rem] mb-3'>Perfect for getting started</p>
                            <ul className='text-[0.8rem] flex flex-col gap-4 mt-10'>
                                <li className='flex gap-2 items-center'> <Check className='h-3.5 w-3.5'></Check> 1 website</li>
                                <li className='flex gap-2 items-center'> <Check className='h-3.5 w-3.5'></Check> Basic templates</li>
                                <li className='flex gap-2 items-center'> <Check className='h-3.5 w-3.5'></Check> Mobile responsive</li>
                                <li className='flex gap-2 items-center'> <Check className='h-3.5 w-3.5'></Check> Community support</li>
                                <li className='flex gap-2 items-center'> <Check className='h-3.5 w-3.5'></Check> AstraWeb subdomain</li>
                            </ul>
                            <button className='bg-white text-black py-1.5 w-full border border-black/10 font-semibold text-[0.8rem] rounded-md mt-10 cursor-pointer transition-all duration-300 hover:bg-black hover:text-white/90'>Get Started</button>
                        </div>
                        <div className="box border border-black/10 w-[70%] md:w-[21%] rounded-xl p-5 transition-all duration-300 hover:scale-104 cursor-pointer hover:border-black">
                            <p className='font-semibold text-center mb-3'>Business</p>
                            <p className='text-center font-bold text-[1.65rem] mb-3'>&#8377;999 <span className='text-gray-500 font-light text-[0.8rem]'>/ website</span> </p>
                            <p className='text-center text-gray-500 text-[0.9rem] mb-3'>Perfect for getting started</p>
                            <ul className='text-[0.8rem] flex flex-col gap-4 mt-10'>
                                <li className='flex gap-2 items-center'> <Check className='h-3.5 w-3.5'></Check> 1 website</li>
                                <li className='flex gap-2 items-center'> <Check className='h-3.5 w-3.5'></Check> Basic templates</li>
                                <li className='flex gap-2 items-center'> <Check className='h-3.5 w-3.5'></Check> Mobile responsive</li>
                                <li className='flex gap-2 items-center'> <Check className='h-3.5 w-3.5'></Check> Community support</li>
                                <li className='flex gap-2 items-center'> <Check className='h-3.5 w-3.5'></Check> AstraWeb subdomain</li>
                            </ul>
                            <button className='bg-white text-black py-1.5 w-full border border-black/10 font-semibold text-[0.8rem] rounded-md mt-10 cursor-pointer transition-all duration-300 hover:bg-black hover:text-white/90'>Get Started</button>
                        </div>
                    </div>
                </div>

                <div className="box mt-10 md:mt-20">
                    <p className='font-bold text-center text-[1.65rem]'>What Our Users Say</p>
                    <p className='text-center text-gray-500 px-3 md:px-100 my-5 md:my-0'>Join thousands of businesses and students who have built their digital presence with AstraWeb</p>
                    <div className="cards flex flex-col md:flex-row justify-center items-center gap-10 md:my-10">
                        <div className="card w-[90vw] md:w-[20vw] rounded-2xl border border-black/10 p-5 transition-all duration-300 hover:shadow-lg cursor-pointer">
                            <div className="stars flex gap-2">
                                <Star className='h-4 w-4 fill-yellow-300 stroke-0'></Star>
                                <Star className='h-4 w-4.5 fill-yellow-300 stroke-0'></Star>
                                <Star className='h-4 w-4 fill-yellow-300 stroke-0'></Star>
                                <Star className='h-4 w-4 fill-yellow-300 stroke-0'></Star>
                                <Star className='h-4 w-4 fill-yellow-300 stroke-0'></Star>
                            </div>
                            <Quote className='text-gray-400 my-5'></Quote>
                            <p className='text-[0.7rem] text-gray-500'>"AstraWeb helped me create a professional landing page that increased my conversion rate by 40%. The templates are beautiful and so easy to customize"</p>
                            <div className="review my-5 flex items-center gap-3">
                                <div className="circle h-9 w-9 bg-gray-200 rounded-full flex items-center justify-center text-[0.7rem] font-semibold">
                                    SC
                                </div>
                                <div>
                                    <p className='text-[0.85rem] font-semibold'>Sarah Chen</p>
                                    <p className='text-[0.7rem] text-gray-500'>Small Business Owner <br /> Chen Marketing</p>
                                </div>
                            </div>
                        </div>
                        <div className="card w-[90vw] md:w-[20vw] rounded-2xl border border-black/10 p-5 transition-all duration-300 hover:shadow-lg cursor-pointer">
                            <div className="stars flex gap-2">
                                <Star className='h-4 w-4 fill-yellow-300 stroke-0'></Star>
                                <Star className='h-4 w-4.5 fill-yellow-300 stroke-0'></Star>
                                <Star className='h-4 w-4 fill-yellow-300 stroke-0'></Star>
                                <Star className='h-4 w-4 fill-yellow-300 stroke-0'></Star>
                                <Star className='h-4 w-4 fill-yellow-300 stroke-0'></Star>
                            </div>
                            <Quote className='text-gray-400 my-5'></Quote>
                            <p className='text-[0.7rem] text-gray-500'>"AstraWeb helped me create a professional landing page that increased my conversion rate by 40%. The templates are beautiful and so easy to customize"</p>
                            <div className="review my-5 flex items-center gap-3">
                                <div className="circle h-9 w-9 bg-gray-200 rounded-full flex items-center justify-center text-[0.7rem] font-semibold">
                                    SC
                                </div>
                                <div>
                                    <p className='text-[0.85rem] font-semibold'>Sarah Chen</p>
                                    <p className='text-[0.7rem] text-gray-500'>Small Business Owner <br /> Chen Marketing</p>
                                </div>
                            </div>
                        </div>
                        <div className="card w-[90vw] md:w-[20vw] rounded-2xl border border-black/10 p-5 transition-all duration-300 hover:shadow-lg cursor-pointer">
                            <div className="stars flex gap-2">
                                <Star className='h-4 w-4 fill-yellow-300 stroke-0'></Star>
                                <Star className='h-4 w-4.5 fill-yellow-300 stroke-0'></Star>
                                <Star className='h-4 w-4 fill-yellow-300 stroke-0'></Star>
                                <Star className='h-4 w-4 fill-yellow-300 stroke-0'></Star>
                                <Star className='h-4 w-4 fill-yellow-300 stroke-0'></Star>
                            </div>
                            <Quote className='text-gray-400 my-5'></Quote>
                            <p className='text-[0.7rem] text-gray-500'>"AstraWeb helped me create a professional landing page that increased my conversion rate by 40%. The templates are beautiful and so easy to customize"</p>
                            <div className="review my-5 flex items-center gap-3">
                                <div className="circle h-9 w-9 bg-gray-200 rounded-full flex items-center justify-center text-[0.7rem] font-semibold">
                                    SC
                                </div>
                                <div>
                                    <p className='text-[0.85rem] font-semibold'>Sarah Chen</p>
                                    <p className='text-[0.7rem] text-gray-500'>Small Business Owner <br /> Chen Marketing</p>
                                </div>
                            </div>
                        </div>
                        <div className="card w-[90vw] md:w-[20vw] rounded-2xl border border-black/10 p-5 transition-all duration-300 hover:shadow-lg cursor-pointer">
                            <div className="stars flex gap-2">
                                <Star className='h-4 w-4 fill-yellow-300 stroke-0'></Star>
                                <Star className='h-4 w-4.5 fill-yellow-300 stroke-0'></Star>
                                <Star className='h-4 w-4 fill-yellow-300 stroke-0'></Star>
                                <Star className='h-4 w-4 fill-yellow-300 stroke-0'></Star>
                                <Star className='h-4 w-4 fill-yellow-300 stroke-0'></Star>
                            </div>
                            <Quote className='text-gray-400 my-5'></Quote>
                            <p className='text-[0.7rem] text-gray-500'>"AstraWeb helped me create a professional landing page that increased my conversion rate by 40%. The templates are beautiful and so easy to customize"</p>
                            <div className="review my-5 flex items-center gap-3">
                                <div className="circle h-9 w-9 bg-gray-200 rounded-full flex items-center justify-center text-[0.7rem] font-semibold">
                                    SC
                                </div>
                                <div>
                                    <p className='text-[0.85rem] font-semibold'>Sarah Chen</p>
                                    <p className='text-[0.7rem] text-gray-500'>Small Business Owner <br /> Chen Marketing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id='contact' className="box bg-black mt-10 pt-10">
                    <p className='text-center font-bold text-[1.65rem] text-white'>Ready to Build Your Digital Presence?</p>
                    <p className='text-center text-gray-300 px-3 md:px-70 my-3'>Join thousands of businesses and students who trust AstraWeb to create their professional websites. Start building today</p>
                    <div className="input flex items-center justify-center gap-5 mt-10 mb-5">
                        <input type="email" placeholder='Enter your email' className='bg-white rounded-md py-1.5 w-40 md:w-60 px-3 text-[0.8rem]' />
                        <button className='bg-white text-black font-semibold text-[0.8rem] flex gap-1 items-center py-1.5 rounded-md px-5 cursor-pointer'>Get Started <ArrowRight className='h-4 w-4'></ArrowRight></button>
                    </div>
                    <p className='text-center text-gray-400 text-[0.7rem]'>Start free. No credit card required.</p>
                    <div className="box border-t-1 border-b-1 border-white/20 flex flex-col md:flex-row my-10">
                        <div className="box w-[100%] md:w-[30%] p-5">
                            <div className="header flex gap-2 items-center md:pl-20">
                                <div className="deco bg-white h-5 md:h-7 w-5 md:w-7 flex items-center justify-center rounded-md">
                                    <Star className='text-white h-4 md:h-5 w-4 md:w-5 fill-black stroke-0'></Star>
                                </div>
                                <p className='text-white font-bold flex gap-3'>AstraWeb</p>
                            </div>
                            <p className='text-gray-400 text-[0.9rem] md:pl-20 my-5'>Build beautiful, professional websites without the complexity. Perfect for businesses and students alike</p>
                            <div className="logos flex justify-center gap-8 my-5">
                                <Twitter className='text-white h-4 w-4 opacity-80'></Twitter>
                                <Github className='text-white h-4 w-4 opacity-80'></Github>
                                <Linkedin className='text-white h-4 w-4 opacity-80'></Linkedin>
                                <Mail className='text-white h-4 w-4 opacity-80'></Mail>
                            </div>
                        </div>
                        {!isMobile &&
                            <div className='flex gap-10 w-[70vw]'>
                                <div className="box w-[100%] md:w-[30%]">
                                    <ul className='flex flex-col gap-5 mt-5 text-gray-300 text-[0.7rem]'>
                                        <li className='font-bold text-[0.9rem]'>Product</li>
                                        <li>Templates</li>
                                        <li>Features</li>
                                        <li>Pricing</li>
                                        <li>Examples</li>
                                    </ul>
                                </div>
                                <div className="box w-[100%] md:w-[30%]">
                                    <ul className='flex flex-col gap-5 mt-5 text-gray-300 text-[0.7rem]'>
                                        <li className='font-bold text-[0.9rem]'>Company</li>
                                        <li>About</li>
                                        <li>Blog</li>
                                        <li>Careers</li>
                                        <li>Service</li>
                                    </ul>
                                </div>
                                <div className="box w-[100%] md:w-[30%]">
                                    <ul className='flex flex-col gap-5 mt-5 text-gray-300 text-[0.7rem]'>
                                        <li className='font-bold text-[0.9rem]'>Support</li>
                                        <li>Help Center</li>
                                        <li>Documentation</li>
                                        <li>Community</li>
                                        <li>Status</li>
                                    </ul>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="footer px-10 md:px-20 flex justify-between pb-5">
                        <p className='text-gray-500 text-[0.7rem]'>© 2025 AstraWeb. All rights reserved</p>
                        <ul className='flex gap-5 text-[0.75rem] text-gray-500'>
                            <li className='transition-all hover:text-gray-300 cursor-pointer'>Privacy Policy</li>
                            <li className='transition-all hover:text-gray-300 cursor-pointer'>Terms of Use</li>
                            <li className='transition-all hover:text-gray-300 cursor-pointer'>Cookie Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
