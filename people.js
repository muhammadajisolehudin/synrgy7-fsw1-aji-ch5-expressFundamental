const data = [
    {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  },
]

const getData = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
}

const getDataById = (req, res, id) => {
    const person = data.find(p => p.id === id);
    if (person) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(person));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Person not found');
    }
}

const deleteDataById = (req, res, id) => {
    const initialLength = data.length;
    data = data.filter(person => person.id !== id);
    if (data.length < initialLength) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Person deleted');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Person not found');
    }
}

const getDataByUsername = (req, res, username) => {
    const person = data.find(p => p.username.toLowerCase() === username.toLowerCase());
    if (person) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(person));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Username not found');
    }
}

module.exports = { data, getData };