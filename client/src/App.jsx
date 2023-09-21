import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AuthorsList from "./components/authorslist";
import NewAuthors from "./components/newAuthors";
import UpdateAuthors from "./components/updateAuthors";
function App() {



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/authors" element={<AuthorsList/>}/>
          <Route path="/authors/new" element={<NewAuthors/>}/>
          <Route path="/authors/:id/new" element={<UpdateAuthors/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
