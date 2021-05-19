import { useState } from "react";

export default function Dashboard() {
  const [view, setView] = useState(Blog);

  return (
    <>
      {view}
      <nav>
        <h2>This will be the navbar at the bottom</h2>
        <ul>
          <li onClick={() => setView(Blog)}>Blog</li>
          <li onClick={() => setView(Buddies)}>buddies</li>
          <li onClick={() => setView(Chat)}>Chat</li>
          <li onClick={() => setView(Profile)}>Profile</li>
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
