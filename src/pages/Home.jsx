
import { useNavigate } from "react-router-dom";
 
function Home() {
  const navigate = useNavigate();
 
  return (
    <div style={{ padding: "20px" }}>
      <h2>Home</h2>
 
      <button onClick={() => navigate("/posts")}>Posts</button>
      <br /> <br/>
 
      <button onClick={() => navigate("/todos")}>Todos</button>
      <br /><br/>
 
      <button onClick={() => navigate("/users")}>Users</button>
      <br /><br/>

      <button onClick={() => navigate("/Albums")}>Albums</button>

    </div>
  );
}
 
export default Home;

// import{useNavigate} from 'react-router-dom'

// function Home(){

//     const navigate = useNavigate();

//     return(
//         <div style={{padding : "20px"}}>
//             <h2>Home</h2>

//             <button  onclick={()=> navigate("/posts")}>posts </button>
//             <br/><br/>

//             <button onclick={()=> navigate("/todos")}>todos </button>
//             <br/><br/>

//             <button onclick={()=> navigate("/Users")}> Users </button>
//             <br/><br/>

//         </div>
//     );
// }

// export default Home;