import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Typescript for recipe

// - > What are the differences between classes and interfaces in typescript?
// -----> basically same like in C#
// - > Are there any object oriented mechanisms like capsulation?
// -----> Yes, you can use private, public, protected in classes NOT in interfaces
// -----> There are Constructors in classes
// -> How to create a new recipe interface?
// - > How to access "fields"?
// - > Can i just convert my json to a class/interface?

// CLASSES AND STATE AND IMMUTABLE/MUTABLE FIELDS => REACT - Typscript
// -> Can i use classes as data container?
// -> Why should i use useState or redux for state management in React and not classes?

interface IRecipe {
  name: string;
  ID: number;

  getRecipeInformation(): string;
}

class Recipe implements IRecipe {
  name: string;
  ID: number;

  constructor(name: string, ID: number) {
    this.name = name;
    this.ID = ID;
  }

  public getRecipeInformation(): string
  {
    return `Recipe: ${this.name} ID: ${this.ID}`;
  }

  static isRecipe(data: any): data is IRecipe 
  {
    return typeof data.ID === 'number' && typeof data.name === 'string';
  }
}

function App() {
  const [recipe, setRecipe] = useState<IRecipe | null>(null);
  
  useEffect(() => {
    fetch('http://localhost:8080/api')
      .then(response => response.json())
      .then(data => 
        {
          if(Recipe.isRecipe(data))
          {
            setRecipe(new Recipe(data.name, data.ID))
          } 
          else
          {
            console.error('Data does not match the recipe interface')
          }
        }
      )
      .catch(error => {
        console.error('There was an error fetching the recipe!', error);
      });
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={createRecipe}>Create Recipe</button>
        <p>
          {recipe ? `${recipe.getRecipeInformation()}` : 'Loading...'}
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

const createRecipe = async () => {
  const recipe = {
      name: 'Spaghetti Carbonara',
      ID: 1
  };

  try {
      const response = await fetch('http://localhost:8080/recipe', {
          method: 'POST', 
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(recipe) 
      });

      if (response.ok) {
          const data = await response.text();
          console.log(data);
      } else {
          console.error('Error creating recipe:', response.status);
      }
  } catch (error) {
      console.error('Error:', error);
  }
};

export default App
