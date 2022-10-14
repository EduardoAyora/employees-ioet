import { readFileSync } from "fs";

const path = "data.txt";

try {
  const data = readFileSync(path, "utf8");
  console.log("File content:", data);
} catch (err) {
  console.error(err);
}