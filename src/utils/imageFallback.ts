export const DEFAULT_FALLBACK_IMAGE = '/images/collection_rings_1790208831239.jpg';

export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const target = e.currentTarget;
  if (!target.src.endsWith(DEFAULT_FALLBACK_IMAGE)) {
    target.onerror = null;
    target.src = DEFAULT_FALLBACK_IMAGE;
  }
};
