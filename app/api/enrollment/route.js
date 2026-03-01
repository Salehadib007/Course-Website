import { connectDB } from "@/lib/mongodb";
import Enrollment from "@/models/Enrollment";

export async function POST(request) {
  try {
    const body = await request.json();
    const { package: pkg, method, name, email, phone, transactionId } = body;

    // Basic validation
    if (!pkg || !method || !name || !email || !phone || !transactionId) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    await connectDB();

    const enrollment = await Enrollment.create({
      package: pkg,
      method,
      name,
      email,
      phone,
      transactionId,
    });

    return Response.json(
      { success: true, id: enrollment._id },
      { status: 201 },
    );
  } catch (error) {
    console.error("Enrollment error:", error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
