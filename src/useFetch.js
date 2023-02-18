import {useEffect,useState} from 'react'

const useFetch = (url) => {
    const [data, setblogs] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
      const abortCont =new AbortController();
        setTimeout(() => {
          fetch(url,{signal:abortCont.signal})
          .then(res =>{
            if(!res.ok){
              throw Error('could not fetch the data for the resource');
            }
            return res.json();
          })
          .then(data =>{
            setblogs(data)
            setIsPending(false)
            setError(null)
    
          })
          .catch(err => {
            if(err.name==='AbortError'){
              console.log('Fetch Aborted')
            } 
            else{
              setIsPending(false)
              setError(err.message);
            }
          })
          // eslint-disable-next-line
        },1000); 
        return ()=> abortCont.abort();
      },[url]);
      
      return {data,isPending,error}

}

export default useFetch