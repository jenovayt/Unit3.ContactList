import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function selectedContactId() {
    const [contact, setContact] = useState(null)
    useEffect(() => {
        async function fetchContacts() {
          try {
            const response = await fetch(
              `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
            );
            const result = await response.json();
            setContact(result);
          } catch (error) {
            console.error(error);
          }
        }
        fetchContacts();
      }, []);
}