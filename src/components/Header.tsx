const links = [
  { href: "#works", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="mx-auto flex max-w-292 items-center justify-center px-4 py-3 lg:justify-between lg:px-6 lg:py-5">
      <p className="hidden font-bold lg:block">My Name</p>
      <nav>
        <ul className="flex gap-2 rounded-full border border-line bg-surface px-3">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="flex h-11 items-center px-4 text-sm font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
