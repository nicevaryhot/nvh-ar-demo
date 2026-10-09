# NVH AR Demo

Public static build from nicevaryhot/nvh-ar-studio, commit 3aff412, branch codex/result-prototype.

- Dimensional photo: https://nicevaryhot.github.io/nvh-ar-demo/image-model/
- Guided prototype: https://nicevaryhot.github.io/nvh-ar-demo/prototype/
- Commerce: https://nicevaryhot.github.io/nvh-ar-demo/
- Camera: https://nicevaryhot.github.io/nvh-ar-demo/camera/

## The reference photo itself, with depth

Upload a JPG, PNG or WebP (up to 10MB), or choose the provided example. The browser runs real Depth Anything V2 Small q8 inference in a Worker and displays the same photo on a depth surface. It does not substitute a generic person or product model. The original image texture, aspect ratio and front-view appearance are preserved.

Drag to move the viewpoint left/right/up/down (up to 40 degrees), adjust depth and zoom, compare with the original, reset to the front, or save the current view as PNG. This is a 2.5D photo effect. Hidden sides and the back are not reconstructed; it is not a complete 360-degree object.

**This photo feature works on the static demo without login, API keys, Meshy or a generation backend.** First use downloads public model/runtime files. Photo pixels and depth are processed in browser memory, not sent to an image generation service. Downloads, cancellation, failures and retry are explicit; no fake successful sample is substituted. Large viewpoint changes can stretch photo boundaries.

Model: onnx-community/depth-anything-v2-small, revision 4472b7362082ad9968fee890ca0f1e5aca36b93d, q8. Runtime: the official Transformers.js 4.3.1 standalone browser distribution, loaded from a version-pinned jsDelivr URL, and ONNX Runtime WASM. Licenses and attribution are included under ar/photo-depth/.

The separate 2D AI fitting and recommendation interfaces still require a configured backend for live AI generation. Their prototype tabs show pre-generated images of a fictional adult. TH product photos/prices are a Lovable snapshot, not live inventory. Historical Meshy/model code is not used by the active dimensional-photo flow.

Old scan assets remain in the static archive: Infinite, 3D Head Scan by Lee Perry-Smith, CC BY 3.0 Unported; https://github.com/mrdoob/three.js/tree/r183/examples/models/gltf/LeePerrySmith . Their original license is distributed alongside the files.

Validation: TypeScript, client tests including image mapping/depth/angle bounds, 26 server tests, and production build passed. Real browser inference completed for the portrait example and an uploaded product photograph. Cancel/retry, comparison, directional controls and mobile layout were checked. Physical iOS/Android performance remains to be measured. Production dependency audit found zero vulnerabilities.

No customer photos, credentials, production backend or shopping API are included.
