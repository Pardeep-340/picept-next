import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Parse the request body
    const formData = await request.json();
    // Make the POST request to the external API
    const response = await fetch(
      `https://emailoctopus.com/api/1.6/lists/b67439ce-6152-11ef-a880-a19880560e78/contacts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    // Check if the response is ok
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the response data
    const data = await response.json();

    // Return the response data
    return NextResponse.json({ data });
  } catch (error) {
    console.error("Error in POST request:", error);
    return NextResponse.error(); // Respond with an error status
  }
}
