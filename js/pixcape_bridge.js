/**
 * Pixcape-to-Blockbench bridge.
 * Accepts only same-origin messages and imports validated PNG data URLs as textures.
 */
(() => {
  const validPngDataUrl = (value) =>
    typeof value === 'string' &&
    value.length < 12_000_000 &&
    /^data:image\/png;base64,[A-Za-z0-9+/=]+$/.test(value);

  const importTexture = (name, dataUrl) => {
    const TextureClass = window.Texture;
    if (typeof TextureClass !== 'function') {
      throw new Error('Blockbench texture API is not ready');
    }
    const texture = new TextureClass({ name: String(name || 'pixcape-import.png').slice(0, 160) });
    texture.fromDataURL(dataUrl);
    texture.add(true, true);
    if (typeof texture.select === 'function') texture.select();
    return texture;
  };

  window.addEventListener('message', (event) => {
    if (event.origin !== window.location.origin || event.source !== window.parent) return;
    const message = event.data;
    if (!message || message.type !== 'pixcape:import-preset') return;

    try {
      const payload = message.payload;
      if (!payload || !validPngDataUrl(payload.skinDataUrl)) {
        throw new Error('Skin PNG data is missing or invalid');
      }
      const imported = [];
      imported.push(importTexture(payload.skinName || 'pixcape-skin.png', payload.skinDataUrl));

      if (payload.capeDataUrl) {
        if (!validPngDataUrl(payload.capeDataUrl)) throw new Error('Cape PNG data is invalid');
        imported.push(importTexture(payload.capeName || 'pixcape-cape.png', payload.capeDataUrl));
      }

      window.parent.postMessage({
        type: 'pixcape:import-complete',
        ok: true,
        count: imported.length,
        names: imported.map((texture) => texture.name),
      }, window.location.origin);
    } catch (error) {
      window.parent.postMessage({
        type: 'pixcape:import-complete',
        ok: false,
        error: error instanceof Error ? error.message : 'Unknown import error',
      }, window.location.origin);
    }
  });
})();
