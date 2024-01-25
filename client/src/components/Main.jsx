import React from 'react';


const Main = () => {
    return (
        <div className='min-h-screen bg-slate-900 flex justify-center md:p-8'>
            <div className='md:w-1/2 p-3 md:p-0 bg-slate-900 rounded-2xl space-y-8 text-left'>
                <h1 className='text-white font-bold text-2xl'>Hello, I'm Josh.</h1>
                <p className='text-slate-200 text-lg md:text-xl'>I'm an enthusiastic web developer with a diverse skill set developed through structured learning and hands-on projects. I'm passionate about crafting dynamic and user-centric websites. My commitment to staying current with industry trends reflects my dedication to excellence. As I embark on my professional journey, I'm eager to leverage my skills and contribute to the exciting world of web development.</p>
                <h2 className='text-white text-2xl font-bold'>Skills</h2>
                <ul>
                    <li className='text-slate-200 text-lg'>Javascript (NodeJS, ReactJS)</li>
                    <li className='text-slate-200 text-lg'>Redux</li>
                    <li className='text-slate-200 text-lg'>MongoDB</li>
                    <li className='text-slate-200 text-lg'>HTML5/CSS</li>
                    <li className='text-slate-200 text-lg'>Python (Flask)</li>
                    <li className='text-slate-200 text-lg'>Git</li>
                    <li className='text-slate-200 text-lg'>RAG</li>
                </ul>
                <h2 className='text-white text-2xl font-bold'>Projects</h2>
                <div className='bg-white rounded-xl flex flex-col p-2 justify-center items-center space-y-2'>
                    <p className='text-xl font-bold text-blue-500'>Shopiyo</p>
                    <p className='text-lg text-slate-900 text-center'>MERN Stack E-commerce App Utilizing Redux, and Multer For File Uploads</p>
                    <div className='space-x-3'>
                        <button className='bg-blue-500 text-white p-3 rounded-xl hover:shadow-2xl hover:bg-blue-600'>Visit Project</button>
                        <button onClick={() => window.open('https://github.com/joshlazar2/e-commerce', '_blank')} className='bg-blue-500 text-white p-3 rounded-xl hover:shadow-2xl hover:bg-blue-600'>View Source Code</button>
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
