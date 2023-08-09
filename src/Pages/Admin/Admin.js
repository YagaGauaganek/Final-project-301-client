import React from "react";
import "./Admin.css";
import { Helmet } from "react-helmet-async";

export default function Admin() {
  return (
    <>
      <Helmet>
        <title>Jaga Galganek Photography Admin Page</title>
        <meta
          name="description"
          content="This is the admin page for Jaga Galganek's Photography Portfoilio"
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <div>Admin</div>
    </>
  );
}
