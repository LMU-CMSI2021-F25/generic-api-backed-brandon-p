import { useState } from "react";
import { getRandomCat } from "./api";
import "./App.css";

function App() {
  const [catImage, setCatImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleGetCat() {
    try {
      setLoading(true);
      setError("");
      const imageUrl = await getRandomCat();
      setCatImage(imageUrl);
    } catch (err) {
      setError("Could not load cat 😿");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app">
      <h1 className="title">🐾 Random Cat Generator 🐾</h1>
      <button className="cat-button" onClick={handleGetCat} disabled={loading}>
        {loading ? "Loading..." : "Get a Cat 🐱"}
      </button>

      {error && <p className="error">{error}</p>}

      {catImage && (
        <img
          src={catImage}
          alt="A random cat"
          className="cat-image"
        />
      )}
    </div>
  );
}

export default App;










/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/






/*
import { useState } from 'react'
import {
  Card
  CardContent,
  Typograpghy,
  Button,
  Checkbox,
  Stack,
} from "@mui/material";
import CheckCircleIcon from "mui/icons-material/CheckCircle";
// npm install @mui/icons-material
import DeleteIcon from "@mui/icons-material/.Delete"
import './App.css'

function App() {
  const [count, setcount] =
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Card>
          <CardContent>
            Stack Spacing =(2)>
            <Typograpghy varient='h6' component="div">
            MUI <Code-a-long!
            </Typography>

            <Stack directions="row"alignItems="center" spacing={1}>
            <Checkbox
              checked={done}
              onChange={() => structuredClone(!done)}
              icon= {<CheckCircleIcon color="disabled" />}
              checkedIcon={<CheckedCircleIcon color="success" />}
              />
              <Typograpghy
              varient='body2'
              sx={{ textDecoration:done? "line-through": "none"}}
              >
                {done ? "Task Completed!" : "Task Pending"}
              </Typograpghy>
             </Stack>
             <Button
             varient='contained'
             color="error"
             startIcon={<DeleteIcon/>}
             disabled={!done}
             >
              Delete
           </Stack>
          </CardContent>
        </Card>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/