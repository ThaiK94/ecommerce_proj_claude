import { useState } from "react";
import { footerLinks } from "../data";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="gutter flex w-full flex-col gap-9 bg-brand py-12 text-white">
      <div className="flex w-full flex-col gap-10 lg:flex-row lg:gap-[72px]">
        <div className="flex min-w-0 flex-1 flex-col items-start gap-4">
          <p className="text-[28px] font-bold whitespace-nowrap md:text-[32px]">Thai’s Grocery</p>
          <p className="text-sm leading-[1.5]">A fresh take on your everyday shop.</p>
          <p id="newsletter-label" className="text-[13px]">
            Get fresh finds &amp; weekly offers in your inbox.
          </p>

          {subscribed ? (
            <p role="status" className="flex h-12 items-center text-[13px] font-bold">
              Thanks! Fresh finds are on their way.
            </p>
          ) : (
            <form
              aria-labelledby="newsletter-label"
              className="flex h-12 w-full max-w-[400px] items-center justify-between gap-3 rounded-[24px] bg-white pl-4"
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSubscribed(true);
              }}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="min-w-0 flex-1 bg-transparent text-[13px] text-ink outline-none placeholder:text-[#677064]"
              />
              <button
                type="submit"
                className="flex h-12 shrink-0 items-center rounded-r-[24px] pr-4 pl-2 text-[13px] font-bold whitespace-nowrap text-brand hover:underline"
              >
                Sign up →
              </button>
            </form>
          )}
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:flex lg:gap-[72px]">
          {footerLinks.map((group) => (
            <div key={group.heading} className="flex flex-col gap-3.5 text-[13px] lg:w-44">
              <p className="font-bold">{group.heading}</p>
              <ul className="flex flex-col gap-3.5">
                {group.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:underline">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="flex w-full flex-col gap-3 border-t border-white/25 pt-6 text-[11px] sm:flex-row sm:items-start sm:justify-between">
        <p>© 2026 Thai’s Grocery. Good food for every day.</p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <a href="#" className="hover:underline">
              Privacy policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Terms of use
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Your privacy choices
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
