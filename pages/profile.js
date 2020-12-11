import { useState, useEffect } from "react";
import HomeTemplate from "../components/homeTemplate";

export default function profile() {
  const [userName, setUserName] = useState("");
  const [newsPreference, setNewsPreference] = useState("");
  const [success, setSuccess] = useState(false);

  let __disabled = userName === "" && newsPreference === "";

  // save form data to local  storage
  const saveToLocalStorage = () => {
    // check for windows object when building/SSR
    if (typeof window !== "undefined") {
      // unified user data object
      let userObject = { newsPreference, userName };
      // iterate
      for (let property in userObject) {
        // if not empty set to local storage
        if (userObject[property] !== "") {
          localStorage.setItem(property, userObject[property]);
          success !== true && setSuccess(true);
        }
      }
    }
  };

  // get user data from local storage and pre-set input values
  useEffect(() => {
    // check for windows object when building/SSR
    if (typeof window !== "undefined") {
      // use string values not actual values
      let user_name = localStorage.getItem("userName");
      let news_preference = localStorage.getItem("newsPreference");

      if (user_name) {
        setUserName(user_name);
      }

      if (news_preference) {
        setNewsPreference(news_preference);
      }
    }
  }, []);

  // dismiss success banner by clicking anywhere on the DOM
  useEffect(() => {
    const handleClick = (e) => {
      if (e.target && !e.target.classList.contains("form_submitter")) {
        return setSuccess(false);
      }
    };
    // add event listener when success banner is shown
    if (success) {
      window.addEventListener("click", handleClick);
    }
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [success]);

  return (
    <HomeTemplate title="Profile" activeLink="Profile">
      <div className="flex h-full w-full">
        <form className="flex flex-col m-0 lg:mx-auto my-auto p-6 lg:p-12 w-full lg:w-6/12 space-y-6 lg:space-y-4 border border-purple-800 rounded-md">
          {success && (
            <h2 className="mx-auto text-base text-green-600">Success!</h2>
          )}
          <h2 className="mx-auto text-lg text-black">
            {`Edit Profile & Preferences`}
          </h2>
          <div className="flex flex-row justify-between space-x-2 lg:space-x-4">
            <label htmlFor="username" className="text-purple-800 w-4/12">
              Username
            </label>
            <input
              id="username"
              placeholder="username"
              className="h-8 border bg-transparent border-purple-800 pl-2 rounded-md w-8/12 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="flex flex-row justify-between space-x-2 lg:space-x-4">
            <label htmlFor="news_preference" className="text-purple-800 w-4/12">
              News Preference
            </label>

            <select
              id="news_preference"
              className="h-8 border bg-transparent border-purple-800 pl-2 rounded-md w-8/12 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              value={newsPreference}
              onChange={(e) => setNewsPreference(e.target.value)}
            >
              <option value="" disabled>
                Select Option
              </option>
              <option value="bitcoin">Bitcoin</option>
              <option value="apple">Apple</option>
              <option value="earthquake">Earthquake</option>
              <option value="animal">Animal</option>
            </select>
          </div>
          <button
            type="button"
            disabled={__disabled}
            className={`form_submitter text-white rounded-lg w-40 h-8 mx-auto hover:bg-purple-400 focus:outline-none ${
              __disabled
                ? "bg-purple-400 cursor-not-allowed"
                : "bg-purple-800 cursor-pointer"
            }`}
            onClick={(e) => {
              e.preventDefault();
              saveToLocalStorage();
            }}
          >
            Save
          </button>
        </form>
      </div>
    </HomeTemplate>
  );
}
