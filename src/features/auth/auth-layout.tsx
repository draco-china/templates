interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="container grid h-svh max-w-none items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-2 py-8 sm:p-8">
        <div className="mb-4 flex items-center justify-center">
          <img
            alt="Logo"
            className="me-2 size-6"
            height={24}
            src="/favicon.svg"
            width={24}
          />
          <h1 className="font-medium text-xl">TanStack Shadcn Starter</h1>
        </div>
        {children}
      </div>
    </div>
  );
}
