# NVH AR Demo

Public static build from nicevaryhot/nvh-ar-studio, commit 2f59661, branch codex/result-prototype.

- Image to rotatable model: https://nicevaryhot.github.io/nvh-ar-demo/image-model/
- Guided prototype: https://nicevaryhot.github.io/nvh-ar-demo/prototype/
- Commerce: https://nicevaryhot.github.io/nvh-ar-demo/
- Camera: https://nicevaryhot.github.io/nvh-ar-demo/camera/

## One image, one model, unrestricted rotation

The current image modeling flow accepts one uploaded photograph or the selected generated image. Person/product separation and accessory fitting have been removed from the active customer workflow. Existing 2D image fitting and recommendation interfaces remain available.

The shared viewer supports trackball rotation across all axes, up/down/left/right/roll buttons, front/back/top/bottom views, zoom, reset, GLB download and screenshot download. Local GLB import is explicitly labeled. The optional rotation sample is a procedural draft hat, not a reconstruction of the uploaded photograph or a real product.

The source service includes an independently gated image3d job using Meshy, with no image synthesis provider or product catalog dependency. It reuses authenticated ownership, encrypted storage, request idempotency, shared model quotas, cancellation and expiry. Uploading an image or rotating an existing model does not itself send a generation request.

**No AI backend is connected to this public static site.** Photo previews, local GLB import and rotation controls work; actual image-to-model generation stays disabled until a configured backend is connected. Real-photo reconstruction accuracy has not been validated. Unseen surfaces must be inferred and are not guaranteed to match the subject.

Other prototype tabs show pre-generated images of a fictional adult. TH product photos/prices are a Lovable snapshot rather than live inventory. Old scan assets remain in the static archive: Infinite, 3D Head Scan by Lee Perry-Smith, CC BY 3.0 Unported; https://github.com/mrdoob/three.js/tree/r183/examples/models/gltf/LeePerrySmith . Their original license is distributed alongside the files.

Validation: TypeScript, existing AR/client checks, 26 server tests, and production build passed. Browser checks covered image upload, selected image handoff, GLB import, all-axis rotation, top/bottom views, and mobile layout. Server tests use mock provider results, not real paid generations.

No customer photos, credentials, production backend or shopping API are included.
