import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto text-3xl text-center min-h-96 pt-6">
      <h2>Not Found Page</h2>
      <Link href="/">Return Fennix Homepage</Link>
    </div>
  );
}
