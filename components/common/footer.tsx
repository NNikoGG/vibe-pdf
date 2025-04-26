import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-rose-100 to-rose-200 py-4 text-gray-600">
      <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} VibePDF. All rights reserved.
          </p>
          <p className="text-sm">
            Built with ❤️ by{" "}
            <Link
              href="https://github.com/NNikoGG"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Niko
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
