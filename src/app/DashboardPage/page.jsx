
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import UserInfo from "../components/UserInfo";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  console.log(session);
  

  if (!session) return <p>Access denied</p>;

  return <div>
    Welcome {session.user.name}, Role: {session.user.role}
    <UserInfo/>
    </div>;
}
