import Document from "@/models/Document"

export const createDocument = async (data: any) => {
  return await Document.create({
    title: data.title || "Untitled",
    content: "",
  });
};

export const getDocuments = async () => {
  return await Document.find().sort({ createdAt: -1 });
};