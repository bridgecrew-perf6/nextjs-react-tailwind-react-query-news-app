import React from "react";
import Nav from "./nav";

export default function homeTemplate({ children, title, activeLink }) {
  return (
    <div>
      <Nav activeLink={activeLink} />
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            {title}
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* <!-- Content goes here --> */}
          <div className="container mx-auto px-4 md:px-12">{children}</div>
          {/* <!-- /End Content --> */}
        </div>
      </main>
    </div>
  );
}
