import { promises as fs } from "fs";
import path from "path";

const DB_PATH = path.join(process.cwd(), "data", "db.json");

export interface User {
  id: string;
  email: string;
  password: string;
  name?: string;
  createdAt: string;
}

export interface DbSchema {
  users: User[];
}

/**
 * Reads the database from the JSON file.
 */
async function readDb(): Promise<DbSchema> {
  try {
    const data = await fs.readFile(DB_PATH, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    // If file doesn't exist, return empty schema
    return { users: [] };
  }
}

/**
 * Writes the database to the JSON file.
 */
async function writeDb(db: DbSchema): Promise<void> {
  await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2), "utf-8");
}

/**
 * Finds a user by email.
 */
export async function findUserByEmail(email: string): Promise<User | undefined> {
  const db = await readDb();
  return db.users.find((u) => u.email.toLowerCase() === email.toLowerCase());
}

/**
 * Adds a new user to the database.
 */
export async function addUser(user: Omit<User, "id" | "createdAt">): Promise<User> {
  const db = await readDb();
  
  const newUser: User = {
    ...user,
    id: Math.random().toString(36).substring(2, 11),
    createdAt: new Date().toISOString(),
  };

  db.users.push(newUser);
  await writeDb(db);
  
  return newUser;
}

/**
 * Updates a user's password.
 */
export async function updateUserPassword(email: string, newPassword: string): Promise<boolean> {
  const db = await readDb();
  const userIndex = db.users.findIndex((u) => u.email.toLowerCase() === email.toLowerCase());
  
  if (userIndex === -1) return false;
  
  db.users[userIndex].password = newPassword;
  await writeDb(db);
  return true;
}
