# Twin Cities CYG — Website

This branch is meant to hold an implementation of the design delivered as
`Twin Cities CYG Website.html`.

## Status: blocked on design fetch

The source design file at
`https://api.anthropic.com/v1/design/h/_RSl5oGgjKPwdj9gM3xMKQ?open_file=Twin+Cities+CYG+Website.html`
could not be retrieved in the session that created this branch:

- The first authenticated `WebFetch` attempt returned
  `maxContentLength size of 10485760 exceeded` — the asset is larger than
  WebFetch's 10 MB cap (likely due to inline base64 images in the HTML).
- Every subsequent request (both `WebFetch` and direct `curl`) to the same URL
  returned **HTTP 404**, so the README and HTML body could not be read at all.
- The Stitch MCP tools are not authenticated in this environment, so they
  cannot be used as a fallback.

As a result, the README's written brief and the design's structure, palette,
typography, copy, and imagery are all unknown to this commit.

## What's in this branch

- `index.html` — a minimal, responsive placeholder scaffold that explicitly
  identifies itself as a stand-in. No design decisions from the unfetched file
  are guessed at or fabricated here.

## Next steps

To unblock the real implementation, any one of these is enough:

1. Re-share the design so WebFetch sees a version under 10 MB (e.g. with image
   assets externalized rather than inlined as base64).
2. Paste the README contents and the structural skeleton (sections, copy,
   CSS variables, asset list) directly into the task.
3. Attach the `Twin Cities CYG Website.html` file to the repo so it can be
   read locally.

Once the source is available, replace `index.html` with the real build and
delete this note.
