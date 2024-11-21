"use strict";
import { execSync } from "child_process";

async function run() {
  try {

    // Get the input from the workflow
    const user = process.env.USERNAME;
    const pwd = process.env.PASSWORD;

    
    console.log("Password input received:", pwd);
    execSync("python -m pip install --upgrade pip", { stdio: "inherit" });
    execSync("python -m pip install twine", { stdio: "inherit" });
    execSync("python -m pip install --upgrade twine")
    execSync(`python -m twine upload -u ${user} -p ${pwd} dist/*`, {
      stdio: "inherit",
    });
  } catch (error) {
    console.error("Error during execution:", error.message);
    process.exit(1);
  }
}

run();
