import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl mb-12 flex justify-center">Frequently Asked Questions</h2>
		
		<div className="space-y-4">
			<details className="w-full border rounded-lg" open="">
				<summary className="px-4 text-2xl py-6 focus:outline-none focus-visible:ring-pink-400">What are the different ways to manage a state in a React application? </summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                    
                    <br/><br/>When we talk about state in our applications, it’s important to be clear about what types of state actually matter.

There are four main types of state you need to properly manage in your React apps:<br/><br/>

1.Local state<br/>
2.Global state<br/>
3.Server state<br/>
4.URL state<br/><br/>
Let's cover each of these in detail:

Local (UI) state – Local state is data we manage in one or another component.

Local state is most often managed in React using the useState hook.

For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.<br/><br/>

Global (UI) state – Global state is data we manage across multiple components.

Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

Sometimes state we think should be local might become global.<br/><br/>

Server state – Data that comes from an external server that must be integrated with our UI state.

Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

Fortunately there are tools such as SWR and React Query that make managing server state much easier.<br/><br/>

URL state – Data that exists on our URLs, including the pathname and query parameters.

URL state is often missing as a category of state, but it is an important one.
In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!

There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none text-2xl focus-visible:ring-rose-900">How does prototypical inheritance work?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 text-2xl focus:outline-none focus-visible:ring-rose-900">What is a unit test? Why should we write unit tests?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages. </p>
			</details>
            <details className="w-full border rounded-lg">
				<summary className="px-4 text-2xl py-6 focus:outline-none focus-visible:ring-rose-900">React vs. Angular vs. Vue?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                 React
                    <br/><br/>
React is one of the most popular JavaScript projects with 160k stars on GitHub. It’s developed and maintained by Facebook, and it’s used internally in many of their projects. Additionally, it powers over 2 million websites, according to BuiltWith‘s usage statistics.<br/><br/>

Vue<br/><br/>
Out of the three frameworks, Vue has the most stars on GitHub, with 176k stars. The project is developed and led by ex-Googler Evan You. It’s a very strong, independent project in the open-source community and is used by over 1 million websites, according to BuiltWith.<br/><br/>

Angular<br/><br/>
Angular is developed by Google, but surprisingly it’s not used in some of their flagship products such as Search or Youtube. It’s often used in enterprise projects, and it powers over 97,000 websites based on BuiltWith‘s data.<br/><br/>

It’s the least starred among the three frameworks, with 68k stars on GitHub. However, when switching from Angular 1 to Angular 2, they created an entirely new repository instead of continuing the AngularJS project, which also has 59k stars. </p>
			</details>
		</div>
	</div>
</section>
        </div>
    );
};

export default Blog;