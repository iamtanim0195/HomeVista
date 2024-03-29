"use client";
import Link from "next/link";
import { useContext } from "react";
import { authContext } from "@/context/authContext/AuthProvider";

const LoginCondition = () => {
  const { currentUser } = useContext(authContext);
  console.log(currentUser);
  return (
    <div>
      {!currentUser?.email ? (
        <div className={"flex items-center gap-2"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M5.5 14.5C5.5 12.0147 7.51472 10 10 10C12.4853 10 14.5 12.0147 14.5 14.5"
              stroke="#2B2B2B"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <path
              d="M9.99999 9.99998C11.4912 9.99998 12.7 8.79119 12.7 7.29998C12.7 5.80881 11.4912 4.59998 9.99999 4.59998C8.50878 4.59998 7.29999 5.80881 7.29999 7.29998C7.29999 8.79119 8.50878 9.99998 9.99999 9.99998Z"
              stroke="#2B2B2B"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
              stroke="#2B2B2B"
              strokeWidth="1.6"
            />
          </svg>
          <div>
            {" "}
            <Link href={"/login"}>Login</Link>/
            <Link href={"/register"}>Register</Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default LoginCondition;
