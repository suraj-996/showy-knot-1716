let getData1=async (url) => {
    let res=await fetch(url);
    let data=await res.json()
    return data.data
}

export {getData1}