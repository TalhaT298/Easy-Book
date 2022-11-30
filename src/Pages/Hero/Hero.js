import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../Components/Button/PrimaryButton';
import book from '../../Assets/book.jpg'

const Hero = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 w-full">
			<img src={book} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">Here is a 
				<span className="dark:text-violet-400"> treasure for an </span>investigative mind
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12"> The legendary independent bookstore.
				<br className="hidden md:inline lg:hidden"/>
                You will find books at cheapest rate here!
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<PrimaryButton classes='px-8 py-3 font-semibold rounded'><Link to='/login' rel="noopener noreferrer"  className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Log In</Link></PrimaryButton>


				<Link to='/signup' rel="noopener noreferrer"  className="px-8 py-3 text-lg font-semibold border rounded border-rose-900">Register</Link>
			</div>
		</div>
	</div>
</section>
        </div>
    );
};

export default Hero;