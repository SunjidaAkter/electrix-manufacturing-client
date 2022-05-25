import React from 'react';

const Blogs = () => {
    return (
        <div className='px-12'>
            <p className='text-5xl font-extrabold text-center text-secondary mt-5'>BLOGS</p>
            <div className='flex w-full justify-center my-10'>
                <div class="card w-full bg-base-100 shadow-2xl">
                    <div class="card-body">
                        <h2 class="text-2xl font-extrabold text-primary">How will you improve the performance of a React Application?</h2> <br />
                        <p className="text-xl font-bold text-neutral" >The way to improve the performance of a React Application:</p>
                        <p className="text-lg font-semibold text-slate-900" >Improving application performance is key for developers who are mindful of keeping a user’s experience positive to keep them on an app and engaged. <br /> <br /><span className="text-xl font-bold text-neutral">The five important ways to improve the performance of a React application, including pre-optimization techniques. These include: </span><br />
                            <ol>
                                <li>Keeping component state local where necessary</li>
                                <li>Memoizing React components to prevent unnecessary re-renders</li>
                                <li>Code-splitting in React using dynamic import()</li>
                                <li>Windowing or list virtualization in React</li>
                                <li>Lazy loading images in React</li>
                            </ol>
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex w-full justify-center my-10'>
                <div class="card w-full bg-base-100 shadow-2xl">
                    <div class="card-body">
                        <h2 class="text-2xl font-extrabold text-primary">What are the different ways to manage a state in a React application?</h2> <br />
                        <p className="text-xl font-bold text-neutral" >There are four main types of state we need to properly manage in our React apps:</p>
                        <br /><p className="text-xl font-bold text-neutral" >Local state :</p>
                        <p className="text-lg font-semibold text-slate-900" >It can take accept any valid data value, including primitive and object values. Additionally, its setter function can be passed down to other components as a callback function (without needing optimizations like useCallback).</p>
                        <br /><p className="text-xl font-bold text-neutral" >Global state :</p>
                        <p className="text-lg font-semibold text-slate-900" >if we want to update a component’s state from basically anywhere in our app, we should use global state.</p>
                        <br /><p className="text-xl font-bold text-neutral" >Server state :</p>
                        <p className="text-lg font-semibold text-slate-900" >It seems we just need to fetch data and display it in the page. But then we need to display a loading spinner while we are waiting for the data. Then we need to handle errors and display them to the user as they arise. For this management we can use server state.</p>
                        <br /><p className="text-xl font-bold text-neutral" >URL state :</p>
                        <p className="text-lg font-semibold text-slate-900" >URL state is largely already managed for us if we are using a framework like Next.js or the current version of React Router.</p>
                    </div>
                </div>
            </div>
            <div className='flex w-full justify-center my-10'>
                <div class="card w-full bg-base-100 shadow-2xl">
                    <div class="card-body">
                        <h2 class="text-2xl font-extrabold text-primary">How does prototypical inheritance work?</h2> <br />
                        <p className="text-xl font-bold text-neutral" >The way prototypical inheritance works:</p>
                        <p className="text-lg font-semibold text-slate-900" >In javascript every object with its methods and properties contains an internal and hidden property known as [[Prototype]].In javascript a feature used to add methods and properties in objects whinch is prototypical inheritence. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
                    </div>
                </div>
            </div>
            <div className='flex w-full justify-center my-10'>
                <div class="card w-full bg-base-100 shadow-2xl">
                    <div class="card-body">
                        <h2 class="text-2xl font-extrabold text-primary">Why you do not set the state directly in React? For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts.</h2> <br />
                        <p className="text-lg font-semibold text-slate-900" >useState is a Hook that allows us to set the state of variables in functional components. When we pass the initial state to the function by useState, it returns a variable with the current state value (not necessarily the initial state) and returns another function to update this value. But if we set the state of a variable as mentioned in the question  it returns a variable with the initial state it does not return any other function to update the value of the variable.</p>
                    </div>
                </div>
            </div>
            <div className='flex w-full justify-center my-10'>
                <div class="card w-full bg-base-100 shadow-2xl">
                    <div class="card-body">
                        <h2 class="text-2xl font-extrabold text-primary">What is a unit test? Why should write unit tests?</h2> <br />
                        <p className="text-xl font-bold text-neutral" >Unit Test:</p>
                        <p className="text-lg font-semibold text-slate-900" >A type of software testing where individual units or software components are tested is known as unit test. </p> <br />
                        <p className="text-xl font-bold text-neutral" >Purpose of writing unit tests:</p>
                        <p className="text-lg font-semibold text-slate-900" >We should write unit test to validate that each unit of code performs as expected. A unit can be anything you want it to be — a line of code, a method, or a class.Generally, smaller tests are better as they give a more granular view of your code’s performance. Also, when you test very small units, your tests can run fast, like a thousand tests in a second fast.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;

