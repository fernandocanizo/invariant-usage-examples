import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Invariant Usage Examples" },
    { name: "description", content: "A simple Remix app to see epicweb-dev/invariant in action" },
  ];
};

export default function Index() {
  return (
    <main>
      <h1><code>@epic-web/invariant</code> usage examples</h1>
      <h2>(flc development branch)</h2>

      <ul>
        <li>
          <Link to="/unhandled-invariant">Unhandled <code>invariant</code></Link>
        </li>
        <li>
          <Link to="/invariant"><code>invariant</code></Link>
        </li>
        <li>
          <Link to="/invariant-response"><code>invariantResponse</code></Link>
        </li>
        <li>
          <Link to="/invariant-response-with-options"><code>invariantResponse</code> with options</Link>
        </li>
      </ul>
    </main>
  );
}
