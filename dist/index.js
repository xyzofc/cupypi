"use strict";
import { execSync } from "child_process";
import { getInput } from "@actions/core";

async function run() {
  try {
    const pwd = getInput("password");
    console.log("Password input received:", pwd);

    execSync("python -m pip install --upgrade pip", { stdio: "inherit" });
    execSync("python -m pip install build", { stdio: "inherit" });
    execSync("python -m build", { stdio: "inherit" });
    execSync("python -m pip install twine", { stdio: "inherit" });
    execSync("python -m twine upload dist/*", { stdio: "inherit" });
  } catch (error) {
    console.error("Error during execution:", error.message);
    process.exit(1);
  }
}

run();
