import {defineConfig} from "vite"
import {resolve} from "path"

export default defineConfig({
	plugins: [],
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				'google-clone': resolve(__dirname, 'google-clone/index.html'),
				'daily-dribble': resolve(__dirname, 'daily-dribble/index.html'),
				'web-action-hero': resolve(__dirname, 'web-action-hero/index.html'),
				'birthday-gift': resolve(__dirname, 'birthday-gift/index.html'),
				'business-card': resolve(__dirname, 'business-card/index.html'),
				'amazon-product': resolve(__dirname, 'amazon-product/index.html'),
				'404': resolve(__dirname, '404.html')
			}
		},
		// Optimize assets
		assetsInlineLimit: 4096,
		chunkSizeWarningLimit: 1000
	},
	// Optimize images during development
	assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg']
})