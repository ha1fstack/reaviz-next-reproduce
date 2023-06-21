<!--
PLEASE HELP US PROCESS GITHUB ISSUES FASTER BY PROVIDING THE FOLLOWING INFORMATION.

ISSUES MISSING IMPORTANT INFORMATION MAY BE CLOSED WITHOUT INVESTIGATION.
-->

## I'm submitting a...

<!-- Check one of the following options with "x" -->
<pre><code>
[ ] Regression (a behavior that used to work and stopped working in a new release)
[O] Bug report  <!-- Please search GitHub for a similar issue or PR before submitting -->
[ ] Performance issue
[ ] Feature request
[ ] Documentation issue or request
[ ] Other... Please describe:
</code></pre>

## Current behavior

<!-- Describe how the issue manifests. -->

When using Next.js latest with App Router,
the build fails if the page containing chart is static generated:

```
- info Collecting page data
- info Generating static pages (0/4)TypeError: react_cool_dimensions_dist is not a function
```

## Expected behavior

<!-- Describe what the desired behavior would be. -->

The static page should be generated without error

## Minimal reproduction of the problem with instructions

Create new next project with create-next-app, using app router.

```tsx
// page.tsx
import { Chart } from "./Chart";

// if the page is not pre generated, it builds fine
// export const dynamic = "force-dynamic";

export default function Home() {
  return <Chart />;
}
```

```tsx
// Chart.tsx
"use client";

import { AreaChart } from "reaviz";

export const Chart = () => {
  return <AreaChart />;
};
```

```
npm run dev
-> works fine
```

```
npm run build
-> - info Generating static pages (0/4)TypeError: react_cool_dimensions_dist is not a function
-> when ssg is turned off it builds and runs fine (export const dynamic = "force-dynamic";)
```

## What is the motivation / use case for changing the behavior?

<!-- Describe the motivation or the concrete use case. -->

## Environment

```
Libs:
- react version: latest
- reaviz version: latest

For Tooling issues:
- Node version: 18
- Platform:  Windows 11
- Tested with both pnpm and npm
```
