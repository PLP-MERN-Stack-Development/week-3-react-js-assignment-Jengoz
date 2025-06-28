export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-center py-4 mt-10">
      <div className="container mx-auto">
        &copy; {new Date().getFullYear()} TaskManager. All rights reserved.
      </div>
    </footer>
  );
}
