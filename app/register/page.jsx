import RegisterForm from "@/components/register";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Register() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/");
  if (session?.user?.role !== "admin") redirect("/dashboard");
  return <RegisterForm />;
}
