import { ReactNode } from "react";

export default function BlogPostLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="max-w-4xl mx-auto">
        {/* Blog wrapper */}
        <div className="">{children}</div>
      </div>
    </div>
  );
}
