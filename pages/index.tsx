import Link from "next/link";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="flex flex-col items-center justify-center px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">ברוכים הבאים ל-Rentivox</h1>
        <h2 className="text-xl md:text-2xl font-medium text-blue-800 mb-6">Welcome to Rentivox – Smart Global Rental Management</h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10">
          הפלטפורמה החכמה והחוקית לניהול שוק השכירות. הכל במקום אחד – חוזים, הצעות, ניהול נכסים ודירוגים.
        </p>
        <div className="w-32 h-32 mb-8">
          <img src="/logo.png" alt="Rentivox Logo" className="w-full h-full object-contain" />
        </div>
        <div className="flex gap-6 flex-col md:flex-row">
          <Link href="/open-requests" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl shadow">
            חפש דירה להשכרה
          </Link>
          <Link href="/submit-property" className="bg-green-100 hover:bg-green-200 text-green-900 font-semibold px-8 py-3 rounded-xl shadow">
            פרסם נכס – קבל שוכרים אמינים
          </Link>
        </div>
      </main>
    </div>
  );
}
// Trigger redeploy
