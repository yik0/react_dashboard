// Login
// default admin
const adminUser = {
  username: "admin",
  password: "admin"
}
const [details, setDetails] = useState({username: "", password: ""});
const [error, setError] = useState("");

// default user
const [defaultUser, setDefaultUser] = useState({username: "", password: ""});
const defaultUsers = {
  username: defaultUser.username,
  password: defaultUser.password
}
const jsonURL= 'https://jsonplaceholder.typicode.com/users';
useEffect(()=>{
  const fetchData = async ()=>{
      const users_data = await axios(`${jsonURL}/1`);
      setDefaultUser(prevDefaultUser => ({
        ...prevDefaultUser,
        username: users_data.data.username,
        password: users_data.data.email
      }));
  };
  fetchData();
},[setDefaultUser])

console.log(defaultUsers);

// handle submit
const submitHandler = e => {
  e.preventDefault();

  Login(details);
}
// Function validate login
const Login = details => {
  // console.log(details);
  if(details.username == '' && details.password == '') {
    setError('Please insert your details.');

  } else if (details.username == adminUser.username && details.password == adminUser.password) {
    console.log("Admin logged in");
    localStorage.setItem('username', details.username);

  } else if (details.username == defaultUsers.username && details.password == defaultUsers.password) {
    console.log("User logged in");
    localStorage.setItem('username', details.username);

  } else {
    setError('Details does not match');
  }
}
// Function logout
const Logout = () => {
  localStorage.removeItem("username");
}
// En login