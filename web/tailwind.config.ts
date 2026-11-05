import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: ['./components/**/*.{vue,js,ts}', './layouts/**/*.vue', './pages/**/*.vue', './app.vue'],
  theme: {
    extend: {
      colors: { ink: '#090b0d', panel: '#101316', line: '#252a2e', muted: '#969b9e', amber: '#d49a58', 'amber-light': '#f0bd7c' },
      fontFamily: { sans: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui'], mono: ['DM Mono', 'ui-monospace', 'monospace'] },
      maxWidth: { shell: '1180px' }
    }
  }
}
