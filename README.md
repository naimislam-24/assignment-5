Project Name: Dev Stack Builder Website

Description: This project is a "Technology Stack Builder" website, where users can browse different categories (frontend, backend, database, etc.) and pick their preferred technologies to build a custom tech stack. It includes a responsive navbar, technology selection cards, and a "Your Stack" panel that shows selected items with the ability to add or remove them.

Technology: tailwindcss, lucide-react

3 Features about your project:
1/ Interactive Stack Builder
2/ Add/Remove Functionality
3/ Responsive Navigation

write the answers in your own words, short and simple: 1. What is JSX, and why is it used in React?
JSX (JavaScript XML) lets you write HTML-like syntax inside JavaScript. It's used because it makes component structure easier to read and write — React then converts it into React.createElement() calls under the hood.

      2. What is the difference between props and state?
         Props are data passed from a parent component to a child (read-only, can't be changed by the child). State is data managed inside a component itself, which can change over time and trigger re-renders.

      3. What does the useState hook do, and where did you use it in this project?
         useState lets a functional component hold and update local data. In this project, I used it to manage isOpen (for the mobile menu toggle) and stack (to store the list of selected technologies).

      4. What does the useEffect hook do, and why did you need it to load the JSON data?
         useEffect runs side effects (like data fetching, subscriptions, DOM updates) after render. I used it to fetch/load the technology JSON data when the component first mounts, so the data is ready before displaying the cards.

      5. Why does every item in a .map() list need a unique key prop?
         The key helps React identify which items changed, were added, or removed, so it can efficiently update the DOM instead of re-rendering the whole list. Without unique keys, React may misidentify elements and cause bugs.

      6. What is conditional rendering? Show one place you used it.
         Conditional rendering means showing different UI based on a condition. Example: in StackPanel, if stack.length === 0, it shows "Your stack is empty" message; otherwise, it shows the list of selected technologies.

      7. How do you pass data from parent to child, and how does a child send something back to the parent?
         Parent to child: pass data as props (e.g., <StackPanel stack={stack} />). Child to parent: parent passes a function as a prop (e.g., onRemove), and the child calls that function with data (e.g., onRemove(tech.id)) — this is called "lifting state up."
