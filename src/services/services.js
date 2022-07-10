const getRevenue = async () => {
    let data = await fetch('http://localhost:3000/revenue')
    data = await data.json()
    return data
}

console.log(getRevenue())