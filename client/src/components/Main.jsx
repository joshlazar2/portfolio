import React from 'react';


const Main = () => {
    return (
        <div className='min-h-screen bg-slate-900 flex justify-center md:p-8'>
            <div className='md:w-1/2 p-3 md:p-0 bg-slate-900 rounded-2xl space-y-8 text-left'>
                <h1 className='text-white font-bold text-2xl'>Hello, I'm Josh.</h1>
                <p className='text-slate-200 text-lg md:text-xl'>I'm an enthusiastic web developer with a diverse skill set developed through structured learning and hands-on projects. I'm passionate about crafting dynamic and user-centric websites. My commitment to staying current with industry trends reflects my dedication to excellence. As I embark on my professional journey, I'm eager to leverage my skills and contribute to the exciting world of web development.</p>
                <h2 className='text-white text-2xl font-bold'>Skills</h2>
                <ul>
                    <li className='text-slate-200 text-lg'>Javascript (NodeJS, ReactJS, NextJs)</li>
                    <li className='text-slate-200 text-lg'>Redux</li>
                    <li className='text-slate-200 text-lg'>MongoDB</li>
                    <li className='text-slate-200 text-lg'>HTML5/CSS(Tailwind)</li>
                    <li className='text-slate-200 text-lg'>Python (Flask)</li>
                    <li className='text-slate-200 text-lg'>Git</li>
                    <li className='text-slate-200 text-lg'>RAG</li>
                    <li className='text-slate-200 text-lg'>Langchain</li>
                    <li className='text-slate-200 text-lg'>Postman</li>
                </ul>
                <h2 className='text-white text-2xl font-bold'>Projects</h2>
                <div className='bg-white rounded-xl flex flex-col p-3 justify-center items-center space-y-2'>
                    <p className='text-xl font-bold text-blue-500 text-center'>Guess U</p>
                    <p className='text-lg text-slate-900 text-center'>Launched GuessU, a full-stack mobile trivia game built with the MERN stack and React Native, where players guess thecolleges attended by NBA players. Designed and implemented multiple game modes including single-player,multiplayer, and daily challenges. Integrated secure user authentication, persistent game state, and cloud-hosteddata storage. Connected to a custom backend API to handle scoring, player statistics, and game logic. Monetized within-app advertising using Google AdMob. Deployed the backend on Vercel and database on MongoDB Atlas. Delivereda polished UI/UX using TailwindCSS with NativeWind and optimized for App Store distribution.</p>
                    <div className='space-x-3'>
                        <button onClick={() => window.open('https://apps.apple.com/us/app/guess-u/id6615061875', '_blank')} className='bg-blue-500 text-white p-3 rounded-xl hover:shadow-2xl hover:bg-blue-600'>Visit App</button>
                    </div>
                </div>
                <div className='bg-white rounded-xl flex flex-col p-3 justify-center items-center space-y-2'>
                    <p className='text-xl font-bold text-blue-500 text-center'>Cleveland Kidney Disease Associates</p>
                    <p className='text-lg text-slate-900 text-center'>Dynamic Nephrology Practice Website built in React.js with Tailwind CSS for a client. The site showcases sleek, responsive styling and a user-friendly interface. It includes a comprehensive dropdown menu featuring 386 genes with detailed descriptions to align with the practice's focus on genetics. Additionally, the website enhances patient and healthcare professional decision-making with the integration of eight specialized risk calculators relevant to kidney failure.</p>
                    <div className='space-x-3'>
                        <button onClick={() => window.open('https://www.clevelandkidney.com/', '_blank')} className='bg-blue-500 text-white p-3 rounded-xl hover:shadow-2xl hover:bg-blue-600'>Visit App</button>
                        <button onClick={() => window.open('https://github.com/joshlazar2/ckd', '_blank')} className='bg-blue-500 text-white p-3 rounded-xl hover:shadow-2xl hover:bg-blue-600'>View Source Code</button>
                    </div>
                </div>
                <div className='bg-white rounded-xl flex flex-col p-3 justify-center items-center space-y-2'>
                    <p className='text-xl font-bold text-blue-500'>Shopiyo</p>
                    <p className='text-lg text-slate-900 text-center'>Full CRUD MERN Stack E-commerce App Utilizing Redux, Tailwind, Multer For File Uploads to Cloudinary API to Host</p>
                    <p className='text-lg text-slate-900 text-center'>App is hosted on render which uses a public suffix creating issues with storing cookies. All features work on chrome on desktop. You can test responsiveness on mobile but authentication features may not work.</p>
                    <div className='space-x-3'>
                        <button onClick={() => window.open('https://shopiyo-site.onrender.com/', '_blank')} className='bg-blue-500 text-white p-3 rounded-xl hover:shadow-2xl hover:bg-blue-600'>Visit App</button>
                        <button onClick={() => window.open('https://github.com/joshlazar2/e-commerce-cloudinary', '_blank')} className='bg-blue-500 text-white p-3 rounded-xl hover:shadow-2xl hover:bg-blue-600'>View Source Code</button>
                    </div>
                </div>
                <div className='bg-white rounded-xl flex flex-col p-3 justify-center items-center space-y-2'>
                    <p className='text-xl font-bold text-blue-500'>Todo App</p>
                    <p className='text-lg text-slate-900 text-center'>Full-Stack Todo App built in Next.js with Tailwind and MongoDB. Users can Signup and Login. Project utilizes bcrypt for password hashing. Users can create Todos and mark them as completed or delete them.</p>
                    <div className='space-x-3'>
                        <button onClick={() => window.open('https://to-do-nextjs-josh.vercel.app/', '_blank')} className='bg-blue-500 text-white p-3 rounded-xl hover:shadow-2xl hover:bg-blue-600'>Visit App</button>
                        <button onClick={() => window.open('https://github.com/joshlazar2/login_reg_next.js', '_blank')} className='bg-blue-500 text-white p-3 rounded-xl hover:shadow-2xl hover:bg-blue-600'>View Source Code</button>
                    </div>
                </div>
                <div className='bg-white rounded-xl flex flex-col p-3 justify-center items-center space-y-2'>
                    <p className='text-xl font-bold text-blue-500'>Pokenfo</p>
                    <p className='text-lg text-slate-900 text-center'>Pokemon Information App Built in React, Utilizing the Popular API, PokeAPI</p>
                    <div className='space-x-3'>
                        <button onClick={() => window.open('https://pokenfo.vercel.app/', '_blank')} className='bg-blue-500 text-white p-3 rounded-xl hover:shadow-2xl hover:bg-blue-600'>Visit App</button>
                        <button onClick={() => window.open('https://github.com/joshlazar2/Pokenfo', '_blank')} className='bg-blue-500 text-white p-3 rounded-xl hover:shadow-2xl hover:bg-blue-600'>View Source Code</button>
                    </div>
                </div>
                <div className='bg-white rounded-xl flex flex-col p-3 justify-center items-center space-y-2'>
                    <p className='text-xl font-bold text-blue-500'>Cryptinfo</p>
                    <p className='text-lg text-slate-900 text-center'>Crypto Information App Built in React, Utilizing the CoinCap API</p>
                    <div className='space-x-3'>
                        <button onClick={() => window.open('https://crypt-info.vercel.app/', '_blank')} className='bg-blue-500 text-white p-3 rounded-xl hover:shadow-2xl hover:bg-blue-600'>Visit App</button>
                        <button onClick={() => window.open('https://github.com/joshlazar2/cryptinfo', '_blank')} className='bg-blue-500 text-white p-3 rounded-xl hover:shadow-2xl hover:bg-blue-600'>View Source Code</button>
                    </div>
                </div>
                <h2 className='text-white text-2xl font-bold'>Contact</h2>
                <div className='md:w-1/2 text-right'>
                    <div className='flex justify-between'>
                        <p className='text-slate-200 text-lg'>Email:</p>
                        <a className='text-slate-200 text-lg' href='mailto:lazarjosh2@gmail.com' target='_blank' rel='noopener noreferrer'>lazarjosh2@gmail.com</a>
                    </div>
                    <div className='flex justify-between'>
                        <p className='text-slate-200 text-lg'>LinkedIn:</p>
                        <a className='text-slate-200 text-lg' href='https://www.linkedin.com/in/joshua-lazar-4424ba1ba/' target='_blank' rel='noopener noreferrer'>in/joshua-lazar-4424ba1ba</a>
                    </div>
                    <div id='contact' className='flex justify-between'>
                        <p className='text-slate-200 text-lg'>Github:</p>
                        <a className='text-slate-200 text-lg' href='https://github.com/joshlazar2' target='_blank' rel='noopener noreferrer'>/joshlazar2</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
