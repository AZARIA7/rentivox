import { useState } from "react";
import { db } from "@/lib/firebase";
import { addDoc, collection } from "firebase/firestore";
import Header from "@/components/Header";

export default function SubmitProperty() {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    description: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await addDoc(collection(db, "properties"), {
      ...formData,
      createdAt: new Date()
    });
    setFormData({ title: "", location: "", price: "", description: "" });
    setLoading(false);
    setSuccess(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6 text-center">פרסום נכס להשכרה</h1>
        {success && <p className="text-green-600 text-center mb-4">הנכס פורסם בהצלחה!</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="כותרת" className="w-full border px-4 py-2 rounded" required />
          <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="מיקום הנכס" className="w-full border px-4 py-2 rounded" required />
          <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="מחיר לחודש (₪)" className="w-full border px-4 py-2 rounded" required />
          <textarea name="description" value={formData.description} onChange={handleChange} placeholder="תיאור קצר..." className="w-full border px-4 py-2 rounded" rows={4}></textarea>
          <button type="submit" disabled={loading} className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
            {loading ? "מעלה..." : "פרסם נכס"}
          </button>
        </form>
      </main>
    </div>
  );
}