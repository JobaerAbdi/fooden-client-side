import React from "react";

const Blogs = () => {
  return (
    <div className="px-14">
      <h1 className="font-bold mt-6">
        (01) What is difference between uncontrolled and controlled components?
      </h1>
      <p className="font-semibold mb-5">
        Controlled Component : A controlled component is bound to a value, and
        its changes will be handled in code by using event-based callbacks.
        Here, the input form element is handled by the react itself rather than
        the DOM. In this, the mutable state is kept in the state property and
        will be updated only with setState() method. Controlled components have
        functions that govern the data passing into them on every onChange event
        occurs. This data is then saved to state and updated with setState()
        method. It makes component have better control over the form elements
        and data.
      </p>
      <p className="font-semibold mb-5">
        Uncontrolled Component : It is similar to the traditional HTML form
        inputs. Here, the form data is handled by the DOM itself. It maintains
        their own state and will be updated when the input value changes. To
        write an uncontrolled component, there is no need to write an event
        handler for every state update, and you can use a ref to access the
        value of the form from the DOM.
      </p>
      <h1 className="font-bold">
        (02) How to validate React props using PropTypes?
      </h1>
      <p className="font-semibold mb-5">
        PropTypes is React’s internal mechanism for adding type checking to
        component props. React components use a special property called
        propTypes to set up type checking. When props are passed to a React
        component, they are checked against the type definitions configured in
        the propTypes property. When an invalid value is passed for a prop, a
        warning is displayed on the JavaScript console. If default props are set
        for the React component, the values are first resolved before type
        checking against propTypes. Therefore, default values are also subject
        to the prop type definitions.
      </p>
      <h1 className="font-bold">
        (03) What is difference between nodejs and express js.?
      </h1>
      <p className="font-semibold mb-5">
        Nodejs : An extension of JavaScript, NodeJS is an open-source
        server-side runtime environment built around the NodeJS language. Using
        a single-threaded approach for web loading and asynchronous programming,
        the framework has achieved great success in being highly-performant and
        scalable.
      </p>
      <p className="font-semibold mb-5">
        ExpressJS : ExpressJS is a framework for developing web applications
        with NodeJS. Among the two options, it is the most significant
        difference. The ExpressJS development services framework provides
        several exceptional features that make developing web apps easy and
        fast. By contrast, using the latter alone makes developing web apps more
        complex.
      </p>
      <h1 className="font-bold">
        (04) What is a custom hook, and why will you create a custom hook??
      </h1>
      <p className="font-semibold mb-5">
        Custom hook : A custom Hook is a JavaScript function whose name starts
        with ”use” and that may call other Hooks. That's it! If you have code in
        a component that you feel would make sense to extract, either for reuse
        elsewhere or to keep the component simpler, you can pull that out into a
        function.
      </p>
      <p className="font-semibold mb-5">
        Be called at the very top level of your React function to ensure that
        hooks are called in the same order each time a component renders. Start
        with the use keyword. Never be called inside a nested function, a loop,
        or condition. Only be called from functional components in React.
      </p>
    </div>
  );
};

export default Blogs;
