import React from "react";
import Auth from "../components/auth/Auth.jsx";
import { json, redirect } from "react-router-dom";

const AuthenticationPage = () => {
  return (
    <>
      <Auth />
    </>
  );
};

export default AuthenticationPage;

export async function action({ request }) {
  // yang'i urlga request.urlni berib yuboramiz va
  // 'shu orqali serachParams bilan "mode"ning qiymatini olishimiz mumkin boladi'.
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  // agar "mode"ning qiymati "signup" va "login" ga teng bolmasa ushbu shart bajariladi:
  if (mode !== "signup" && mode !== "login") {
    throw json({ message: "Unsupported mode." }, { status: 500 });
  }

  // Form dagi malumotlarni olish uchun:
  const data = await request.formData();
  const authData = {
    phone_number: data.get("phone_number"),
    password: data.get("password"),
  };

  const response = await fetch(`http://127.0.0.1:8000/v1/customer/${mode}/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(authData),
  });

  if (
    response.status === 422 ||
    response.status === 401 ||
    response.status === 400
  ) {
    return response;
  }

  return redirect("/");
}
