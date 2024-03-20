"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function NombreDelDía() {
  const [authorName, setAuthorName] = useState("");

  const fetchAuthorName = async () => {
    try {
      const response = await axios.get("http://localhost:3001/authorName");
      setAuthorName(response.data.name);
      console.log(response.data.name);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAuthorName();
  }, []);

  return (
    <div class="flex items-center justify-center py-20">
      {authorName ? <h1>{authorName}</h1> : null}
    </div>
  );
}
