export default function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-900 mt-8">
      <div className="mx-auto max-w-screen-xl px-6 py-4 text-center text-sm text-zinc-600 dark:text-zinc-400">
        © {new Date().getFullYear()} Users Viewer.
      </div>
    </footer>
  );
}
