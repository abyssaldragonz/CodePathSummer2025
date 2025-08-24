var newBreeds = []
try {
    const data = await (await fetch(`https://api.thecatapi.com/v1/breeds`)).json()
    for (var b in data)
        newBreeds.push(data[b].id)
} catch (err) {
    console.log(err.message)
}

export default newBreeds