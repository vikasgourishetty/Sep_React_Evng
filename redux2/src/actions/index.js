const base_url = "http://localhost:8900"

export function latestNews(){
    const output = fetch(`${base_url}/articles?_end=3`,{method:'GET'})
    .then((data) => data.json())
    
    return{
        type:'GET_LATEST',
        payload:output
    }
}

export function articleNews(){
    const output = fetch(`${base_url}/articles?_start=3&_end=10`,{method:'GET'})
    .then((data) => data.json())
    
    return{
        type:'GET_ARTICLES',
        payload:output
    }
}