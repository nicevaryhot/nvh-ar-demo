# NVH AR Demo

Public static demo built from the private nicevaryhot/nvh-ar-studio source (d3f6c03, branch `codex/result-prototype`).

- Commerce fitting: https://nicevaryhot.github.io/nvh-ar-demo/
- Standalone camera: https://nicevaryhot.github.io/nvh-ar-demo/camera/
- Guided result prototype: https://nicevaryhot.github.io/nvh-ar-demo/prototype/
- Original product 3D prototypes: https://nicevaryhot.github.io/nvh-ar-demo/?type=models

The guided prototype's fourth tab demonstrates the intended flow: portrait upload → person 3D generation → separate product meshes on the same person → rotate, adjust and capture. The working sample uses a public photographic head scan with separately attached sample hat/glasses; it is not reconstructed from an uploaded portrait. Local GLB import is also available. Choosing a portrait switches to a clearly labeled generation-pending state; the live photo-to-3D service is not connected.

Scan attribution: Infinite, 3D Head Scan by Lee Perry-Smith, CC BY 3.0 Unported. Source: https://github.com/mrdoob/three.js/tree/r183/examples/models/gltf/LeePerrySmith . Original license is distributed in ar/avatar-sample/LeePerrySmith_License.txt. Runtime scale, lighting and materials are adjusted. Product meshes are unverified illustrative shapes, not replicas of the pictured TH product.

The other guided tabs show seven pre-generated AI images of a fictional adult, referenced product photos, comparison, outfit/pose/angle switching, temporary example history/quota/reservations and downloads. Clicking does not call AI or incur charges. Angle images are separate 2D results, not reconstructed person geometry. These samples are not a benchmark for a named model or quality setting.

Live AI synthesis, recommendations, portrait reconstruction and account history require the separate backend/providers. They are not connected to this public static build. Uploaded photos and GLB files are read locally in the browser. No production backend, credentials, customer photos or shopping API are included.

TH product images/prices are a Lovable catalog snapshot, not live inventory. Other accessory overlays and 3D models are illustrative and unverified.
