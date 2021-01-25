import React from "react";
import { LINKEDIN_URL } from "../../helpers/auth";

export default function LinkedInSignUp() {
  return (
    <a href={LINKEDIN_URL}>
      <div type="submit" style={{ height: "40px", width: "215px" }}>
        <img
          style={{ height: "100%", width: "100%" }}
          src={
            "https://taggbox.com/blog/wp-content/uploads/2018/09/Signin-with-LinkedIn.png"
          }
          alt={"LinkedIn authentification"}
        />
      </div>
    </a>
  );
}