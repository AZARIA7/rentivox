import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full px-6 py-4 shadow-md bg-white flex justify-between items-center">
      <div className="text-xl font-bold text-blue-700">Rentivox</div>
      <nav className="space-x-4">
        <Link href="/" className="text-gray-700 hover:text-blue-600">בית</Link>
        <Link href="/open-requests" className="text-gray-700 hover:text-blue-600">חיפושי דירה</Link>
        <Link href="/submit-property" className="text-gray-700 hover:text-blue-600">פרסום נכס</Link>
      </nav>
    </header>
  );
}
