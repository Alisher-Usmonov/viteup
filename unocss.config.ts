import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts, transformerCompileClass, transformerDirectives, transformerVariantGroup } from "unocss";

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetIcons(),
    presetWebFonts({
      provider: "google",
      fonts: {
        roboto: "Roboto"
      }
    })
  ],
  transformers: [
    transformerCompileClass(),
    transformerDirectives(),
    transformerVariantGroup(),
  ]
})