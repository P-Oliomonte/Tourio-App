import dbConnect from "@/db/connect";
import Place from "@/db/models/Place";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const places = await Place.find();
      return response.status(200).json(places);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  } else if (request.method === "POST") {
    try {
      const newPlace = request.body;
      await Place.create(newPlace);
      return response.status(201).json({ status: "New place created." });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
