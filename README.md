# NVH AR Demo

Public static build from nicevaryhot/nvh-ar-studio, commit c36e0aa, branch codex/result-prototype.

- Guided prototype: https://nicevaryhot.github.io/nvh-ar-demo/prototype/
- Commerce: https://nicevaryhot.github.io/nvh-ar-demo/
- Camera / reconstruction workspace: https://nicevaryhot.github.io/nvh-ar-demo/camera/

## Generated portrait and real product reconstruction

The fourth prototype tab now starts from the selected generated photograph and a real product photograph. The person and product must become separate 3D assets so the product can be exchanged on the same person. No generic scanned person or procedural hat is shown as their reconstruction result.

The service source implements generated result -> accessory removal draft -> user review -> person GLB, and real catalog product image -> private draft product GLB. It checks source ownership, expiry, review acknowledgement, catalog identity, separate activation flags and a shared 3D quota. Product draft review in the current session is not production publication.

The public static site has no connected AI backend. It supports image selection/local uploads, previews, and importing separate prebuilt person/product GLBs. All generation buttons remain disabled. Up to four product photos can be previewed locally; the current server adapter reconstructs from the single representative catalog photo. Multi-image reconstruction and exact identity/product fidelity validation remain unimplemented or unverified.

The other tabs use pre-generated AI images of a fictional adult. They illustrate image synthesis, version history and angles, without live AI requests or charges. TH photos/prices are a Lovable catalog snapshot rather than live inventory.

Retained scan assets under ar/avatar-sample are an earlier sample resource, not the active reconstruction result. Attribution: Infinite, 3D Head Scan by Lee Perry-Smith, CC BY 3.0 Unported; https://github.com/mrdoob/three.js/tree/r183/examples/models/gltf/LeePerrySmith . The original license is distributed alongside the files.

No customer photos, credentials, production backend or shopping API are included.
