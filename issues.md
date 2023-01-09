# Broken App Issues
no app.use(express.json())

had to rewrite the results function. Previously written function was not returning any data

let out = results.map(r => ({ name: r.name, bio: r.bio })); - previously written had r.data.name, removed the .data because .data was already returned in the previous function