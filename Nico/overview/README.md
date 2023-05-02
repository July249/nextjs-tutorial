# Lecture Note

## 1-0 Library vs. FrameWork

- Libraries and frameworks are both tools that developers use to make programming easier and more efficient, but they have different main features and purposes.

- A library is a collection of pre-written code that can be used to perform specific tasks, such as accessing a database, generating a chart, or validating user input. Developers can import the library into their project and use its functions and methods to accomplish these tasks without having to write the code from scratch. Libraries typically have a narrow focus and are designed to be flexible so that developers can customize them to fit their specific needs.

- A framework, on the other hand, is a larger and more comprehensive tool that provides a complete structure and set of rules for building an application or system. A framework includes not only pre-written code but also guidelines for how that code should be used and how different parts of the application should interact with each other. Developers use a framework as a foundation for their project and build on top of it, rather than importing individual pieces of code as they would with a library. Frameworks often have a broader focus and provide a more opinionated approach to development, with a specific architecture or design pattern in mind.

- In summary, the main features of a library are:

  - A collection of pre-written code for specific tasks
  - Narrow focus
  - Flexible and customizable
  - Imported into a project as needed

- The main features of a framework are:

  - A comprehensive tool for building an application or system
  - Includes pre-written code, guidelines, and structure
  - Broader focus
  - Provides a foundation for the project, rather than individual pieces of code.

## 1-1 Pages

- In NextJS, the file name in the Pages folder is same as routing URL.

- It doesn't matter what is the export component name.

- Only depends on the file name.

## 1-2 Static Pre Rendering

- In the case of CSR(Client-Side Rendering), the HTML file has only root contents like below.

  ```
  <div id="root"></div>
  ```

- So, user's network environment is not good enough, then user should wait the page rendering with empty page until downloading all JavaScript Source Code.

- On the other hand, user can see the pre-rendering HTML page until downloading all source code or files without empty page. It is big difference between CSR and SSR(Server Side Rendering).

## 1-3 Routing

- About why anchor tag is not recommended in NextJS

  - The main reason why using anchor tags (<a>) is not recommended in Next.js is because it can cause a full page refresh, which goes against the principles of a Single Page Application (SPA).

  - In a typical SPA, only the content that needs to be updated is dynamically loaded, without refreshing the entire page.

  - However, when a user clicks on a traditional anchor tag, the browser navigates to a new page, causing a full page refresh.

  - To avoid this issue, Next.js provides a built-in client-side routing system that allows for navigating between pages without triggering a full page refresh.

  - To use this system, developers are encouraged to use the Link component from the next/link module instead of traditional anchor tags.

  - This component will handle client-side navigation for you, resulting in a faster, smoother user experience.

- Explain what is useRouter Hook in NextJS

  - The useRouter hook is a built-in hook in Next.js that provides access to the router object.

  - The router object allows you to programmatically navigate between pages, read query parameters, and get information about the current route.

  - The useRouter hook can be imported from the next/router module and used in any functional component to access the router object.

  - Here is an example usage of the useRouter hook:

  ```javascript
  import { useRouter } from 'next/router';

  function MyComponent() {
    const router = useRouter();

    function handleClick() {
      router.push('/new-page');
    }

    return <button onClick={handleClick}>Go to new page</button>;
  }
  ```

  - In the example above, the useRouter hook is used to get access to the router object, which is then used to programmatically navigate to a new page when the button is clicked.

## 1-4 CSS Modules

## 1-5 Styles JSX

- Styled JSX is a CSS-in-JS library that is built into Next.js, a popular React-based framework for building web applications. It allows you to write CSS code directly in your JavaScript code, making it easier to manage and maintain your application's styles.

- With Styled JSX, you can write your CSS styles as template literals within your React components, and Next.js will automatically scope the styles to that component only. This means that you don't need to worry about naming collisions or specificity issues.

- Here's an example of how you can use Styled JSX in a Next.js component:

```jsx
function MyComponent() {
  return (
    <div>
      <h1 className='title'>Hello World</h1>
      <p className='description'>This is a description</p>

      <style jsx>{`
        .title {
          font-size: 2rem;
          color: red;
        }

        .description {
          font-size: 1rem;
          color: blue;
        }
      `}</style>
    </div>
  );
}
```

- In this example, the styles defined within the style tag are scoped to the MyComponent component only. The .title and .description classes are not globally available, so you don't have to worry about them conflicting with other styles in your application.

- Overall, Styled JSX is a powerful and convenient way to manage your application's styles in Next.js.

## 1-6 Custom App

## 2-0 Patterns
