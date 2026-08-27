import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// A simple bad word filter (expand as needed)
const BAD_WORDS = [
  "abusive", "spam", "idiot", "hate", "scam", "stupid",
  "crap", "dumb", "loser", "jerk", "moron", "trash", "fake", "phishing", "profanity"
];

// Path to the JSON data file
const dataFilePath = path.join(process.cwd(), "data", "blogs.json");

// Helper to read blogs from JSON
function readBlogs() {
  try {
    if (!fs.existsSync(dataFilePath)) {
      return [];
    }
    const data = fs.readFileSync(dataFilePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading blogs:", error);
    return [];
  }
}

// Helper to write blogs to JSON
function writeBlogs(blogs: any[]) {
  try {
    const dir = path.dirname(dataFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(dataFilePath, JSON.stringify(blogs, null, 2));
  } catch (error) {
    console.error("Error writing blogs:", error);
  }
}

export async function GET() {
  const blogs = readBlogs();
  return NextResponse.json(blogs);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, category, excerpt } = body;

    if (!title || !category || !excerpt) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Abusive word filter
    const contentToScan = `${title} ${category} ${excerpt}`.toLowerCase();
    for (const badWord of BAD_WORDS) {
      if (contentToScan.includes(badWord)) {
        return NextResponse.json(
          { error: `Post rejected: contains restricted language ('${badWord}')` },
          { status: 400 }
        );
      }
    }

    // Create the new blog post
    const newBlog = {
      title,
      category,
      excerpt,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }),
    };

    // Prepend to the list and save
    const blogs = readBlogs();
    const updatedBlogs = [newBlog, ...blogs];
    writeBlogs(updatedBlogs);

    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
