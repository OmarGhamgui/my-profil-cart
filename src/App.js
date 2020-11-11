import logo from "./logo.svg";
import "./App.css";
import Profile from "./profile/Profile";
import profileimage from "./profileimage.jpeg";

function App() {
  const handleName = (x) => {
    alert(x);
  };
  return (
    <div className="App">
      <Profile
        fullName="Omar Ghamgui"
        bio="26 years old, from Sfax, Tunisia"
        profession="Web Developper"
        onName={handleName}
      >
        <img
          src={profileimage}
          alt=""
          width="270px"
        />
      </Profile>
    </div>
  );
}

export default App;
