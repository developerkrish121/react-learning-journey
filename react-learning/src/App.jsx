import Profilecard from "./components/profilecard";  // Importing the profilecard component from the components folder.

function App(){
  return(              // App() is a component where we can write our code and return the JSX code to render on the screen.
    <div>
      <Profilecard
        name="Krishna Bansal"
        degree="Btech CSE AIML"
        jobTitle="Software Engineer"
        skills={["Python", "JavaScript", "React", "Node.js"]}
        image="https://via.placeholder.com/150" alt="Profile"
       />
       <Profilecard
        name="Aman Bansal"
        degree="Btech CSE DS"
        jobTitle="Data Scientist"
        skills={["Python", "Machine Learning", "Data Analysis"]}
        image="https://via.placeholder.com/150" alt="Profile"
       />
       <Profilecard
        name="Rohit Bansal"
        degree="Btech CSE AI"
        jobTitle="AI Engineer"
        skills={["Python", "Deep Learning", "Computer Vision"]}
        image="https://via.placeholder.com/150" alt="Profile"
       />
       
    </div>
  );
}

export default App;