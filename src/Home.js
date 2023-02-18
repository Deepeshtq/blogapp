import { React } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

  const {data:blogs,isPending,error} =useFetch('http://localhost:8000/blogs')



  // const [blogs, setblogs] = useState(null);
  // const [isPending, setIsPending] = useState(true)
  // const [error, setError] = useState(null)

  // useEffect(() => {
  //   setTimeout(() => {
  //     fetch('http://localhost:8000/blogs')
  //     .then(res =>{
  //       if(!res.ok){
  //         throw Error('could not fetch the data for the resource');
  //       }
  //       return res.json();
  //     })
  //     .then(data =>{
  //       setblogs(data)
  //       setIsPending(false)
  //       setError(null)

  //     })
  //     .catch(err => {
  //       setIsPending(false)
  //       setError(err.message);
  //     })
  //     // eslint-disable-next-line
  //   },1000); 
  // },[]);  
  
  

  return <div className="home">
    {error && <div>{error}</div>}
    {isPending && <div>Loading...</div> }
  {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
  {/* <BlogList blogs={blogs.filter((blog)=>blog.author==="mario")} title="Mario's Blogs!"/> */}

  </div>;
};

export default Home;
