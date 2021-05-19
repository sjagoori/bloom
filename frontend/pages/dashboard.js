import { useState } from "react";

export default function Dashboard() {
  const [view, setView] = useState(Blog);

  function handleView(desiredView) {
    setView(desiredView);
  }

  return (
    <>
      {view}
      <nav>
        <h2>This will be the navbar at the bottom</h2>
        <ul>
          <li onClick={() => handleView(Blog)}>Blog</li>
          <li onClick={() => handleView(Buddies)}>buddies</li>
          <li onClick={() => handleView(Chat)}>Chat</li>
          <li onClick={() => handleView(Profile)}>Profile</li>
        </ul>
      </nav>
    </>
  );
}

const Blog = () => (
  <>
    <h1>Blog</h1>
  </>
);

const Buddies = () => (
  <>
    <h1>Buddies</h1>
  </>
);
const Chat = () => (
  <>
    <h1>Chat</h1>
  </>
);

const Profile = () => (
  <>
    <h1>Profile</h1>
  </>
);
