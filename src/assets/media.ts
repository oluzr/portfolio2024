import { css, CSSObject, DefaultTheme, Interpolation } from "styled-components";

type DeviceType = "desktop" | "tablet" | "phone";

const sizes: Record<DeviceType, { min: number; max: number }> = {
  desktop: { min: 1025, max: Infinity }, // 1025px 이상
  tablet: { min: 768, max: 1024 }, // 768px ~ 1024px
  phone: { min: 0, max: 767 }, // 0px ~ 767px
};

const media = Object.entries(sizes).reduce((acc, [key, value]) => {
  return {
    ...acc,
    [key]: (
      first: TemplateStringsArray | CSSObject,
      ...interpolations: Interpolation<DefaultTheme>[]
    ) => css`
      @media (min-width: ${value.min}px) and (max-width: ${value.max}px) {
        ${css(first, ...interpolations)}
      }
    `,
  };
}, {}) as Record<DeviceType, any>;

export { media };
