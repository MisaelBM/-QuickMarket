module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/lib/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api"
});
// Interceptor para adicionar token de autenticação
api.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
const __TURBOPACK__default__export__ = api;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeaderBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/lucide-react/dist/esm/icons/bell.js [app-ssr] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-ssr] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/lib/api.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function HeaderBar() {
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cartCount, setCartCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Load user from localStorage
        const userData = localStorage.getItem('user');
        if (userData) {
            try {
                setUser(JSON.parse(userData));
            } catch (e) {
                console.error('Error parsing user data:', e);
            }
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Load cart count when user is logged in
        const loadCartCount = async ()=>{
            const token = localStorage.getItem('token');
            if (!token || !user) {
                setCartCount(0);
                return;
            }
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/cart/');
                const cartItems = response.data;
                // Calculate total items in cart
                const totalItems = cartItems.reduce((sum, item)=>sum + item.quantidade, 0);
                setCartCount(totalItems);
            } catch (error) {
                console.error('Error loading cart count:', error);
                setCartCount(0);
            }
        };
        loadCartCount();
        // Refresh cart count every 2 seconds to keep it updated
        const interval = setInterval(loadCartCount, 2000);
        return ()=>clearInterval(interval);
    }, [
        user
    ]);
    const handleLogout = async ()=>{
        try {
            // Call logout API
            await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/auth/logout');
        } catch (error) {
            console.error('Error logging out:', error);
        } finally{
            // Clear localStorage
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            setUser(null);
            setCartCount(0);
            // Redirect to login
            router.push('/login');
        }
    };
    const getInitials = (name)=>{
        return name.split(' ').map((n)=>n[0]).join('').toUpperCase().slice(0, 2);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 bg-white shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-gradient-to-r from-emerald-600 to-green-600 text-white py-2 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto flex items-center justify-between text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Entrega para: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "São Paulo, SP"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                            lineNumber: 102,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "hover:underline",
                                    children: "Atendimento"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "hover:underline",
                                    children: "Sobre"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "hover:underline",
                                    children: "Promoções"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 py-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/logo.png",
                                    alt: "QuickMarket",
                                    width: 60,
                                    height: 60,
                                    className: "rounded-full shadow-lg"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden md:block",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent",
                                            children: "QuickMarket"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                            lineNumber: 124,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500",
                                            children: "Supermercado Online"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden lg:flex flex-1 max-w-2xl mx-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full flex items-center bg-gray-100 rounded-full px-4 py-3 border-2 border-transparent focus-within:border-emerald-500 transition",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Buscar produtos...",
                                        className: "flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "bg-emerald-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-emerald-700 transition",
                                        children: "Buscar"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/carrinho",
                                    className: "relative p-2 hover:bg-gray-100 rounded-full transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                            className: "w-6 h-6 text-gray-700"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                            lineNumber: 148,
                                            columnNumber: 15
                                        }, this),
                                        cartCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute top-0 right-0 bg-emerald-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold",
                                            children: cartCount > 99 ? '99+' : cartCount
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                            lineNumber: 150,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/notificacoes",
                                    className: "relative p-2 hover:bg-gray-100 rounded-full transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                            className: "w-6 h-6 text-gray-700"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                            lineNumber: 157,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute top-1 right-1 bg-red-500 w-2 h-2 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                            lineNumber: 158,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this),
                                user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition cursor-pointer",
                                            onClick: ()=>setIsUserMenuOpen(!isUserMenuOpen),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm",
                                                    children: getInitials(user.nome)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hidden md:block text-sm font-semibold text-gray-700",
                                                    children: user.nome
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                            lineNumber: 163,
                                            columnNumber: 17
                                        }, this),
                                        isUserMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border-2 border-gray-100 overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4 border-b border-gray-100",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-semibold text-gray-800",
                                                            children: user.nome
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                                            lineNumber: 176,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-500",
                                                            children: user.email
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                                            lineNumber: 177,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleLogout,
                                                    className: "w-full px-4 py-3 text-left text-sm text-red-600 hover:bg-red-50 transition flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                                            lineNumber: 183,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Sair"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                            lineNumber: 174,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                    lineNumber: 162,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/login",
                                    className: "flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                            lineNumber: 191,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden md:block text-sm font-semibold",
                                            children: "Entrar"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                            lineNumber: 192,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                    lineNumber: 190,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "hidden md:block bg-gray-50 border-t border-gray-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 py-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/lista_mercados",
                                className: "flex items-center gap-2 font-semibold text-gray-700 hover:text-emerald-600 transition cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                        lineNumber: 204,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm",
                                        children: "Todas as Categorias"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                lineNumber: 203,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-6 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "text-gray-700 hover:text-emerald-600 font-semibold transition",
                                        children: "Promoções"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "text-gray-700 hover:text-emerald-600 font-semibold transition",
                                        children: "Mais Vendidos"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                        lineNumber: 202,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                    lineNumber: 201,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/carrinho/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CarrinhoPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/lib/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$src$2f$components$2f$ui$2f$headerBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const fetchCarrinho = async ()=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("/cart/");
    return response.data;
};
function CarrinhoPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [carrinho, setCarrinho] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]([]);
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](true);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const loadCart = async ()=>{
            try {
                // Check if user is logged in
                const token = localStorage.getItem('token');
                if (!token) {
                    router.push('/login');
                    return;
                }
                const data = await fetchCarrinho();
                setCarrinho(data);
            } catch (error) {
                console.error("Erro ao carregar carrinho:", error);
            } finally{
                setLoading(false);
            }
        };
        loadCart();
    }, [
        router
    ]);
    const alterarQuantidade = async (id, delta)=>{
        try {
            const item = carrinho.find((i)=>i.id === id);
            if (!item) return;
            const newQuantity = item.quantidade + delta;
            if (newQuantity <= 0) {
                // Remove item if quantity becomes 0
                await removerItem(id);
                return;
            }
            // Update quantity using PUT endpoint
            await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`/cart/${id}`, {
                quantidade: newQuantity
            });
            // Reload cart data
            const data = await fetchCarrinho();
            setCarrinho(data);
        } catch (error) {
            console.error("Erro ao alterar quantidade:", error);
            alert('Erro ao alterar quantidade. Tente novamente.');
        }
    };
    const handleFinalize = async ()=>{
        try {
            // Clear cart via API
            await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete('/cart/');
            // Navigate to payment page
            router.push('/pagamento');
        } catch (error) {
            console.error('Erro ao limpar carrinho ao finalizar:', error);
            alert('Erro ao processar pedido. Tente novamente.');
        }
    };
    const removerItem = async (id)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`/cart/${id}`);
            // Reload cart data
            const data = await fetchCarrinho();
            setCarrinho(data);
        } catch (error) {
            console.error("Erro ao remover item:", error);
        }
    };
    const total = carrinho.reduce((acc, item)=>acc + item.preco * item.quantidade, 0);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$src$2f$components$2f$ui$2f$headerBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/carrinho/page.tsx",
                    lineNumber: 95,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 py-10 px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-5xl mx-auto text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500",
                            children: "Carregando carrinho..."
                        }, void 0, false, {
                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/carrinho/page.tsx",
                            lineNumber: 98,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/carrinho/page.tsx",
                        lineNumber: 97,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/carrinho/page.tsx",
                    lineNumber: 96,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$src$2f$components$2f$ui$2f$headerBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/carrinho/page.tsx",
                lineNumber: 107,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 py-10 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "max-w-5xl mx-auto flex flex-col gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-2 text-center",
                            children: "🛒 Seu Carrinho"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/carrinho/page.tsx",
                            lineNumber: 110,
                            columnNumber: 6
                        }, this),
                        carrinho.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center bg-white rounded-2xl shadow-lg p-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500 text-lg mb-4",
                                    children: "Seu carrinho está vazio"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/carrinho/page.tsx",
                                    lineNumber: 115,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>router.push('/'),
                                    className: "px-8 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition",
                                    children: "Continuar Comprando"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/carrinho/page.tsx",
                                    lineNumber: 118,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/carrinho/page.tsx",
                            lineNumber: 114,
                            columnNumber: 7
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-4",
                                    children: carrinho.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center bg-white rounded-2xl shadow-lg p-6 gap-6 border-2 border-transparent hover:border-emerald-300 transition",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: item.imagem || "imgCards/card1.jpg",
                                                    alt: item.nome,
                                                    className: "w-32 h-32 object-cover rounded-xl shadow-md"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/carrinho/page.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 11
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-bold text-xl text-gray-800 mb-2",
                                                            children: item.nome
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/carrinho/page.tsx",
                                                            lineNumber: 139,
                                                            columnNumber: 12
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-500 mb-4",
                                                            children: [
                                                                "Preço unitário: R$ ",
                                                                item.preco.toFixed(2)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/carrinho/page.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 12
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            className: "w-8 h-8 flex items-center justify-center bg-white rounded-full text-emerald-600 font-bold hover:bg-emerald-50 transition shadow",
                                                                            onClick: ()=>alterarQuantidade(item.id, -1),
                                                                            children: "−"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/carrinho/page.tsx",
                                                                            lineNumber: 147,
                                                                            columnNumber: 14
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "px-4 font-bold text-gray-800 min-w-[40px] text-center",
                                                                            children: item.quantidade
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/carrinho/page.tsx",
                                                                            lineNumber: 153,
                                                                            columnNumber: 14
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            className: "w-8 h-8 flex items-center justify-center bg-white rounded-full text-emerald-600 font-bold hover:bg-emerald-50 transition shadow",
                                                                            onClick: ()=>alterarQuantidade(item.id, 1),
                                                                            children: "+"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/carrinho/page.tsx",
                                                                            lineNumber: 154,
                                                                            columnNumber: 14
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/carrinho/page.tsx",
                                                                    lineNumber: 146,
                                                                    columnNumber: 13
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "ml-auto px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 font-semibold transition",
                                                                    onClick: ()=>removerItem(item.id),
                                                                    children: "Remover"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/carrinho/page.tsx",
                                                                    lineNumber: 161,
                                                                    columnNumber: 13
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/carrinho/page.tsx",
                                                            lineNumber: 145,
                                                            columnNumber: 12
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/carrinho/page.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 11
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-500 mb-1",
                                                            children: "Subtotal"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/carrinho/page.tsx",
                                                            lineNumber: 170,
                                                            columnNumber: 12
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-bold text-emerald-600 text-2xl",
                                                            children: [
                                                                "R$ ",
                                                                (item.preco * item.quantidade).toFixed(2)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/carrinho/page.tsx",
                                                            lineNumber: 171,
                                                            columnNumber: 12
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/carrinho/page.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 11
                                                }, this)
                                            ]
                                        }, item.id, true, {
                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/carrinho/page.tsx",
                                            lineNumber: 129,
                                            columnNumber: 10
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/carrinho/page.tsx",
                                    lineNumber: 127,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-2xl shadow-xl p-8 mt-8 border-2 border-emerald-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row justify-between items-center gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-500 mb-1",
                                                        children: "Total"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/carrinho/page.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-4xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent",
                                                        children: [
                                                            "R$ ",
                                                            total.toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/carrinho/page.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/carrinho/page.tsx",
                                                lineNumber: 180,
                                                columnNumber: 10
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col sm:flex-row gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>router.push('/'),
                                                        className: "px-8 py-4 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition",
                                                        children: "Continuar Comprando"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/carrinho/page.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleFinalize,
                                                        className: "px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition",
                                                        children: "Finalizar Compra →"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/carrinho/page.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/carrinho/page.tsx",
                                                lineNumber: 186,
                                                columnNumber: 10
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/carrinho/page.tsx",
                                        lineNumber: 179,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/carrinho/page.tsx",
                                    lineNumber: 178,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/carrinho/page.tsx",
                    lineNumber: 109,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/carrinho/page.tsx",
                lineNumber: 108,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ad418f7e._.js.map