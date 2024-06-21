"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import NavBar from "../../components/navbar";

export default function Dashboard() {
  const { data: session } = useSession();

  return <NavBar />;
  // return (
  //   <div className="flex min-h-screen flex-col items-center justify-between p-24">
  //     in user dashboard
  //     <div> {session?.user?.username} </div>
  //     <button onClick={() => signOut()}> Log Out</button>
  //   </div>
  // );
}
