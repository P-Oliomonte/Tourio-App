import dbConnect from "@/db/connect";
import Place from "@/db/models/Place";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;

  if (request.method === "GET") {
    try {
      const place = await Place.findById(id);
      return response.status(200).json(place);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  } else if (request.method === "PATCH") {
    try {
      const editedPlace = request.body;
      await Place.findByIdAndUpdate(id, editedPlace);
      return response.status(200).json({ status: "Place updated" });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  } else if (request.method === "DELETE") {
    try {
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
    await Place.findByIdAndDelete(id);
    return response.status(200).json({ status: "Place deleted" });
  }
}
