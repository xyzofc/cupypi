"use strict";
import { execSync } from "child_process";

async function run() {
  try {

    // Get the input from the workflow
    const user = process.env.USERNAME;
    const pwd = process.env.PASSWORD;
    if (!pwd ||!user) {
      throw new Error("Pypi Password or user is missing!");
    };
   
  } catch (error) {
    console.error("Error during execution:", error.message);
    process.exit(1);
  }
}

run();
