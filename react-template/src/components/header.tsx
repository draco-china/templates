import { Link } from "@tanstack/react-router";
import {
  ClipboardType,
  Home,
  Languages,
  Menu,
  Network,
  Store,
  Table,
  X,
} from "lucide-react";

import { useState } from "react";
import ParaglideLocaleSwitcher from "./locale-switcher.tsx";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="flex items-center bg-gray-800 p-4 text-white shadow-lg">
        <button
          aria-label="Open menu"
          className="rounded-lg p-2 transition-colors hover:bg-gray-700"
          onClick={() => setIsOpen(true)}
          type="button"
        >
          <Menu size={24} />
        </button>
        <h1 className="ml-4 font-semibold text-xl">
          <Link to="/">
            <img
              alt="TanStack Logo"
              className="h-10"
              height="auto"
              src="/tanstack-word-logo-white.svg"
              width="auto"
            />
          </Link>
        </h1>
      </header>

      <aside
        className={`fixed top-0 left-0 z-50 flex h-full w-80 transform flex-col bg-gray-900 text-white shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-gray-700 border-b p-4">
          <h2 className="font-bold text-xl">Navigation</h2>
          <button
            aria-label="Close menu"
            className="rounded-lg p-2 transition-colors hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
            type="button"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-4">
          <Link
            activeProps={{
              className:
                "flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2",
            }}
            className="mb-2 flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
            to="/"
          >
            <Home size={20} />
            <span className="font-medium">Home</span>
          </Link>

          {/* Demo Links Start */}

          <Link
            activeProps={{
              className:
                "flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2",
            }}
            className="mb-2 flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
            to="/demo/table"
          >
            <Table size={20} />
            <span className="font-medium">TanStack Table</span>
          </Link>

          <Link
            activeProps={{
              className:
                "flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2",
            }}
            className="mb-2 flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
            to="/demo/form/simple"
          >
            <ClipboardType size={20} />
            <span className="font-medium">Simple Form</span>
          </Link>

          <Link
            activeProps={{
              className:
                "flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2",
            }}
            className="mb-2 flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
            to="/demo/form/address"
          >
            <ClipboardType size={20} />
            <span className="font-medium">Address Form</span>
          </Link>

          <Link
            activeProps={{
              className:
                "flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2",
            }}
            className="mb-2 flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
            to="/demo/tanstack-query"
          >
            <Network size={20} />
            <span className="font-medium">TanStack Query</span>
          </Link>

          <Link
            activeProps={{
              className:
                "flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2",
            }}
            className="mb-2 flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
            to="/demo/store"
          >
            <Store size={20} />
            <span className="font-medium">Store</span>
          </Link>

          <Link
            activeProps={{
              className:
                "flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2",
            }}
            className="mb-2 flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
            to="/demo/i18n"
          >
            <Languages size={20} />
            <span className="font-medium">I18n example</span>
          </Link>

          {/* Demo Links End */}
        </nav>

        <div className="flex flex-col gap-2 border-gray-700 border-t bg-gray-800 p-4">
          <ParaglideLocaleSwitcher />
        </div>
      </aside>
    </>
  );
}
