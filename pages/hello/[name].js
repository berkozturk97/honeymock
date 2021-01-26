import { useRouter } from "next/router";
import { useEffect } from "react";

function Index() {
    const router = useRouter()
    useEffect(()=>{
        console.log(router.query)
    },[])
    const {name} = router.query;
    return (
        <h1>{name}</h1>
    )
}

export default Index;