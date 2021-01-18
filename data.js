const data = [
  {
    type: "Nature",
    about: "In nature, nothing is perfect and everything is perfect.",
    image:
      "https://images.unsplash.com/photo-1610436680827-e6e4846b5bee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
  },
  {
    type: "Cliffs",
    about:
      "Look deep into nature, and then you will understand everything better.",
    image:
      "https://images.unsplash.com/photo-1610436545026-385ecd45b7a2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=80",
  },
  {
    type: "Sun",
    about: "Even for me life had its gleams of sunshine.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
  },
  {
    type: "Nature",
    about: "In nature, nothing is perfect and everything is perfect.",
    image:
      "https://images.unsplash.com/photo-1610436680827-e6e4846b5bee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
  },
  {
    type: "Cliffs",
    about:
      "Look deep into nature, and then you will understand everything better.",
    image:
      "https://images.unsplash.com/photo-1610436545026-385ecd45b7a2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=80",
  },
  {
    type: "Sun",
    about: "Even for me life had its gleams of sunshine.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
  },
  {
    type: "Nature",
    about: "In nature, nothing is perfect and everything is perfect.",
    image:
      "https://images.unsplash.com/photo-1610436680827-e6e4846b5bee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
  },
  {
    type: "Cliffs",
    about:
      "Look deep into nature, and then you will understand everything better.",
    image:
      "https://images.unsplash.com/photo-1610436545026-385ecd45b7a2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=80",
  },
  {
    type: "Sun",
    about: "Even for me life had its gleams of sunshine.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
  },
];

export function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (!error) {
        resolve(data);
      } else {
        reject("Error: can't give users right now (:");
      }
    }, 3000);
  });
}

// How to use????
// if getData exported with 'export default'
// import('./data.js')
//     .then(res => res.default())
//     .then(data => console.log(data))

// id getData exported with 'export'
// import('./data.js')
//     .then(res => res.getData())
//     .then(data => console.log(data))
