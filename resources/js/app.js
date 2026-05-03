import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createApp, h } from 'vue';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        // Try features directory first (for modular architecture)
        try {
            const featuresGlob = import.meta.glob('./features/**/*.vue');
            const pathParts = name.split('/');
            const featureName = pathParts[0].toLowerCase();
            const pageName = pathParts[pathParts.length - 1];
            const featuresPath = `./features/${featureName}/pages/${pageName}.vue`;
            if (featuresPath in featuresGlob) {
                return resolvePageComponent(featuresPath, featuresGlob);
            }
        } catch (e) {
            // Continue to Pages directory if features fails
        }
        
        // Fallback to Pages directory
        return resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue'),
        );
    },
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
