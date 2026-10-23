# UI behavior rules

Status: Initial rules for Feature 02; review remains open.

Define responsive breakpoints by content needs; keyboard and focus behavior; feedback placement; loading/empty/error/denied states; destructive confirmations; localization and long content; reduced motion; and accessible chart descriptions. Use plain user language instead of internal API vocabulary.

For the static landing page, use semantic landmarks and one `h1`, keep all links keyboard reachable, show a visible focus indicator, provide a skip link, label the topology illustration, and disable nonessential animation under `prefers-reduced-motion`. At narrow widths, project cards stack and content remains in source order. Verify these behaviors manually in browsers before closing the feature. Every later screen spec references these rules and adds only its unique interaction requirements. Visual resemblance does not establish usability or accessibility.
