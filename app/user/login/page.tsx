import Login from "@/components/forms/Login";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();
  if (data.session?.user) {
    redirect("/");
  }

  return (
    <div className="d-flex w-full max-w-lg m-auto">
      <main className="w-full m-auto justify-center self-center">
        <h1 className="text-2xl text-center font-bold mb-2">Login</h1>
        <Login />
      </main>
    </div>
  );
}
