module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
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
"[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/carousel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Carousel",
    ()=>Carousel,
    "CarouselContent",
    ()=>CarouselContent,
    "CarouselItem",
    ()=>CarouselItem,
    "CarouselNext",
    ()=>CarouselNext,
    "CarouselPrevious",
    ()=>CarouselPrevious
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const CarouselContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](null);
function useCarousel() {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](CarouselContext);
    if (!context) {
        throw new Error("useCarousel must be used within a <Carousel />");
    }
    return context;
}
function Carousel({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }) {
    const [carouselRef, api] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
    }, plugins);
    const [canScrollPrev, setCanScrollPrev] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [canScrollNext, setCanScrollNext] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const onSelect = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((api)=>{
        if (!api) return;
        setCanScrollPrev(api.canScrollPrev());
        setCanScrollNext(api.canScrollNext());
    }, []);
    const scrollPrev = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        api?.scrollPrev();
    }, [
        api
    ]);
    const scrollNext = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        api?.scrollNext();
    }, [
        api
    ]);
    const handleKeyDown = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((event)=>{
        if (event.key === "ArrowLeft") {
            event.preventDefault();
            scrollPrev();
        } else if (event.key === "ArrowRight") {
            event.preventDefault();
            scrollNext();
        }
    }, [
        scrollPrev,
        scrollNext
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (!api || !setApi) return;
        setApi(api);
    }, [
        api,
        setApi
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (!api) return;
        onSelect(api);
        api.on("reInit", onSelect);
        api.on("select", onSelect);
        return ()=>{
            api?.off("select", onSelect);
        };
    }, [
        api,
        onSelect
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CarouselContext.Provider, {
        value: {
            carouselRef,
            api: api,
            opts,
            orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
            scrollPrev,
            scrollNext,
            canScrollPrev,
            canScrollNext
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onKeyDownCapture: handleKeyDown,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative", className),
            role: "region",
            "aria-roledescription": "carousel",
            "data-slot": "carousel",
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/carousel.tsx",
            lineNumber: 121,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/carousel.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
function CarouselContent({ className, ...props }) {
    const { carouselRef, orientation } = useCarousel();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: carouselRef,
        className: "overflow-hidden",
        "data-slot": "carousel-content",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/carousel.tsx",
            lineNumber: 144,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/carousel.tsx",
        lineNumber: 139,
        columnNumber: 5
    }, this);
}
function CarouselItem({ className, ...props }) {
    const { orientation } = useCarousel();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "group",
        "aria-roledescription": "slide",
        "data-slot": "carousel-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/carousel.tsx",
        lineNumber: 160,
        columnNumber: 5
    }, this);
}
function CarouselPrevious({ className, variant = "outline", size = "icon", ...props }) {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
        "data-slot": "carousel-previous",
        variant: variant,
        size: size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute size-8 rounded-full", orientation === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className),
        disabled: !canScrollPrev,
        onClick: scrollPrev,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {}, void 0, false, {
                fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/carousel.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: "Previous slide"
            }, void 0, false, {
                fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/carousel.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/carousel.tsx",
        lineNumber: 183,
        columnNumber: 5
    }, this);
}
function CarouselNext({ className, variant = "outline", size = "icon", ...props }) {
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
        "data-slot": "carousel-next",
        variant: variant,
        size: size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("absolute size-8 rounded-full", orientation === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className),
        disabled: !canScrollNext,
        onClick: scrollNext,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {}, void 0, false, {
                fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/carousel.tsx",
                lineNumber: 228,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: "Next slide"
            }, void 0, false, {
                fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/carousel.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/carousel.tsx",
        lineNumber: 213,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$src$2f$components$2f$ui$2f$headerBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-ssr] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/lucide-react/dist/esm/icons/award.js [app-ssr] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$src$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/carousel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$embla$2d$carousel$2d$autoplay$2f$esm$2f$embla$2d$carousel$2d$autoplay$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/embla-carousel-autoplay/esm/embla-carousel-autoplay.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/lib/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function Home() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [arrayCardsHome, setArrayCardsHome] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]([
        {
            title: "Fresco & Natural",
            img: "imgCards/card1.jpg"
        },
        {
            title: "Descontos Imperdíveis",
            img: "imgCards/card2.jpeg"
        },
        {
            title: "Melhor Qualidade",
            img: "imgCards/card3.jpg"
        },
        {
            title: "Entrega Rápida",
            img: "imgCards/card4.jpg"
        }
    ]);
    // dynamic categories (menus) loaded from API; we'll exclude some categories below
    const [categoriesList, setCategoriesList] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]([]);
    const [loadingCategories, setLoadingCategories] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [categoriesError, setCategoriesError] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [selectedCategoryId, setSelectedCategoryId] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const getIconForCategory = (name)=>{
        const n = name.toLowerCase();
        if (n.includes('frut') || n.includes('verd')) return '�';
        if (n.includes('carn')) return '🥩';
        if (n.includes('bebid')) return '�';
        if (n.includes('padar')) return '�';
        return '🛒';
    };
    const [featuredProducts, setFeaturedProducts] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]([]);
    const [loadingFeatured, setLoadingFeatured] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [featuredError, setFeaturedError] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const handleAddToCart = async (product)=>{
        try {
            // Check if user is logged in
            const token = localStorage.getItem('token');
            if (!token) {
                // Redirect to login if not authenticated
                router.push('/login');
                return;
            }
            // Add product to cart via API
            await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/cart/', {
                produto_id: product.id,
                quantidade: 1
            });
            // Show success message (support both API field names)
            const name = product.nome || product.name || 'Produto';
            alert(`${name} adicionado ao carrinho!`);
        } catch (error) {
            console.error('Erro ao adicionar ao carrinho:', error);
            alert('Erro ao adicionar produto ao carrinho. Tente novamente.');
        }
    };
    // Fetch categories (menus) from API and auto-select first one (excluding some)
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        let mounted = true;
        const fetchCategories = async ()=>{
            try {
                setLoadingCategories(true);
                setCategoriesError(null);
                const resp = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/categories');
                const data = resp.data?.data || [];
                // remove unwanted categories by name
                const filtered = data.filter((c)=>{
                    const name = (c.nome || c.name || '').toLowerCase();
                    return name !== 'congelados' && name !== 'limpeza';
                });
                if (mounted) {
                    setCategoriesList(filtered);
                    if (filtered.length > 0) setSelectedCategoryId(filtered[0].id);
                }
            } catch (err) {
                console.error('Erro ao carregar categorias:', err);
                if (mounted) setCategoriesError(err?.message || 'Erro ao carregar categorias');
            } finally{
                if (mounted) setLoadingCategories(false);
            }
        };
        fetchCategories();
        return ()=>{
            mounted = false;
        };
    }, []);
    // When selectedCategoryId changes, load products for that category
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (!selectedCategoryId) return;
        let mounted = true;
        const fetchByCategory = async ()=>{
            try {
                setLoadingFeatured(true);
                setFeaturedError(null);
                const resp = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/categories/${selectedCategoryId}/products`);
                const data = resp.data?.data || [];
                if (mounted) setFeaturedProducts(data);
            } catch (err) {
                console.error('Erro ao carregar produtos por categoria:', err);
                if (mounted) setFeaturedError(err?.message || 'Erro ao carregar produtos');
            } finally{
                if (mounted) setLoadingFeatured(false);
            }
        };
        fetchByCategory();
        return ()=>{
            mounted = false;
        };
    }, [
        selectedCategoryId
    ]);
    const plugin = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$embla$2d$carousel$2d$autoplay$2f$esm$2f$embla$2d$carousel$2d$autoplay$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        delay: 5000,
        stopOnInteraction: false
    }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$src$2f$components$2f$ui$2f$headerBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-6 px-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto flex items-center justify-center gap-4 flex-wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold",
                                            children: "Entrega em 30-60 min"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                            lineNumber: 138,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden md:block",
                                    children: "•"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold",
                                            children: "Compra 100% Segura"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden md:block",
                                    children: "•"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold",
                                            children: "Entregas Grátis acima de R$ 100"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                            lineNumber: 148,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "max-w-7xl mx-auto px-4 py-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-2xl shadow-xl p-4 max-w-4xl mx-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl px-4 py-3 border-2 border-emerald-200 focus-within:border-emerald-400 transition",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "w-6 h-6 text-emerald-600"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Buscar produtos, marcas, categorias...",
                                        className: "flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 text-lg"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "bg-emerald-600 text-white px-8 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition",
                                        children: "Buscar"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                lineNumber: 156,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "max-w-7xl mx-auto px-4 mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$src$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Carousel"], {
                            plugins: [
                                plugin.current
                            ],
                            className: "w-full",
                            onMouseEnter: plugin.current.stop,
                            onMouseLeave: plugin.current.reset,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$src$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CarouselContent"], {
                                    children: arrayCardsHome.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$src$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CarouselItem"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative rounded-3xl overflow-hidden shadow-2xl group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: card.img,
                                                        alt: card.title,
                                                        className: "w-full h-[400px] object-cover group-hover:scale-105 transition duration-700"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-green-900/60"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-5xl font-bold text-white drop-shadow-2xl",
                                                            children: card.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                            lineNumber: 189,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                        lineNumber: 188,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                lineNumber: 181,
                                                columnNumber: 19
                                            }, this)
                                        }, index, false, {
                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                            lineNumber: 180,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                    lineNumber: 178,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$src$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CarouselPrevious"], {
                                    className: "left-4 bg-white/90 hover:bg-white"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$src$2f$components$2f$ui$2f$carousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CarouselNext"], {
                                    className: "right-4 bg-white/90 hover:bg-white"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                    lineNumber: 196,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "max-w-7xl mx-auto px-4 mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                        className: "w-8 h-8 text-emerald-600"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                        lineNumber: 203,
                                        columnNumber: 13
                                    }, this),
                                    "Navegar por Categorias"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4",
                                children: [
                                    loadingCategories && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-span-full text-center text-gray-500",
                                        children: "Carregando categorias..."
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, this),
                                    categoriesError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-span-full text-center text-red-500",
                                        children: categoriesError
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                        lineNumber: 211,
                                        columnNumber: 15
                                    }, this),
                                    !loadingCategories && !categoriesError && categoriesList.map((cat, index)=>{
                                        const name = cat.nome || cat.name || 'Categoria';
                                        const icon = getIconForCategory(name);
                                        const active = selectedCategoryId === cat.id;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>setSelectedCategoryId(cat.id),
                                            className: `bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-2xl hover:scale-105 transition cursor-pointer border-2 ${active ? 'border-emerald-300' : 'border-transparent'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-5xl mb-3",
                                                    children: icon
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-gray-800 text-sm text-center",
                                                    children: name
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, cat.id ?? index, true, {
                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                            lineNumber: 218,
                                            columnNumber: 17
                                        }, this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "max-w-7xl mx-auto px-4 mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl font-bold text-gray-800 flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                className: "w-8 h-8 text-amber-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                lineNumber: 235,
                                                columnNumber: 15
                                            }, this),
                                            "Promoções Especiais"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                        lineNumber: 234,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "text-emerald-600 font-semibold hover:underline",
                                        children: "Ver todas →"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                        lineNumber: 238,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                lineNumber: 233,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
                                children: [
                                    loadingFeatured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-span-full text-center text-gray-500",
                                        children: "Carregando produtos..."
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                        lineNumber: 244,
                                        columnNumber: 15
                                    }, this),
                                    featuredError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-span-full text-center text-red-500",
                                        children: featuredError
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                        lineNumber: 247,
                                        columnNumber: 15
                                    }, this),
                                    !loadingFeatured && !featuredError && featuredProducts.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-span-full text-center text-gray-500",
                                        children: "Nenhum produto em destaque encontrado."
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                        lineNumber: 250,
                                        columnNumber: 15
                                    }, this),
                                    featuredProducts.map((product, index)=>{
                                        const name = product.nome || product.name || 'Produto';
                                        const price = typeof product.preco === 'number' ? product.preco : product.price;
                                        const originalPrice = product.preco_original || product.originalPrice;
                                        const discount = product.desconto || product.discount || (originalPrice && price ? Math.round((originalPrice - price) / originalPrice * 100) : null);
                                        const imgSrc = product.imagem_url ? `/${product.imagem_url}` : product.img || '/imgCards/card1.jpg';
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition group border-2 border-transparent hover:border-emerald-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: imgSrc,
                                                            alt: name,
                                                            className: "w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                            lineNumber: 265,
                                                            columnNumber: 21
                                                        }, this),
                                                        discount ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm",
                                                            children: [
                                                                "-",
                                                                discount,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                            lineNumber: 271,
                                                            columnNumber: 23
                                                        }, this) : null
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-bold text-gray-800 mb-2 line-clamp-2",
                                                            children: name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                            lineNumber: 277,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 mb-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-2xl font-bold text-emerald-600",
                                                                    children: [
                                                                        "R$ ",
                                                                        price ? Number(price).toFixed(2) : '0.00'
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                                    lineNumber: 279,
                                                                    columnNumber: 23
                                                                }, this),
                                                                originalPrice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm text-gray-400 line-through",
                                                                    children: [
                                                                        "R$ ",
                                                                        Number(originalPrice).toFixed(2)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                                    lineNumber: 281,
                                                                    columnNumber: 25
                                                                }, this) : null
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                            lineNumber: 278,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleAddToCart(product),
                                                            className: "w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition",
                                                            children: "Adicionar ao Carrinho"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                            lineNumber: 284,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                            lineNumber: 260,
                                            columnNumber: 17
                                        }, this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                lineNumber: 242,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "bg-gray-900 text-white mt-20 py-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-4 gap-8 mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-xl mb-4 text-emerald-400",
                                                    children: "Sobre Nós"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-2 text-gray-400",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#",
                                                                className: "hover:text-white transition",
                                                                children: "Quem Somos"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                                lineNumber: 304,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                            lineNumber: 304,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#",
                                                                className: "hover:text-white transition",
                                                                children: "Nossa História"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                                lineNumber: 305,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                            lineNumber: 305,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#",
                                                                className: "hover:text-white transition",
                                                                children: "Carreiras"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                                lineNumber: 306,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                            lineNumber: 306,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                            lineNumber: 301,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-xl mb-4 text-emerald-400",
                                                    children: "Ajuda"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                    lineNumber: 310,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-2 text-gray-400",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#",
                                                                className: "hover:text-white transition",
                                                                children: "Central de Ajuda"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                                lineNumber: 312,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                            lineNumber: 312,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#",
                                                                className: "hover:text-white transition",
                                                                children: "Fale Conosco"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                                lineNumber: 313,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                            lineNumber: 313,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#",
                                                                className: "hover:text-white transition",
                                                                children: "Perguntas Frequentes"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                                lineNumber: 314,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                            lineNumber: 314,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                    lineNumber: 311,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                            lineNumber: 309,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-xl mb-4 text-emerald-400",
                                                    children: "Legal"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-2 text-gray-400",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#",
                                                                className: "hover:text-white transition",
                                                                children: "Termos de Uso"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                                lineNumber: 320,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                            lineNumber: 320,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#",
                                                                className: "hover:text-white transition",
                                                                children: "Política de Privacidade"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                                lineNumber: 321,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                            lineNumber: 321,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#",
                                                                className: "hover:text-white transition",
                                                                children: "Política de Cookies"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                                lineNumber: 322,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                            lineNumber: 322,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                    lineNumber: 319,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                            lineNumber: 317,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-xl mb-4 text-emerald-400",
                                                    children: "Redes Sociais"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                    lineNumber: 326,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-2 text-gray-400",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#",
                                                                className: "hover:text-white transition",
                                                                children: "Facebook"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                                lineNumber: 328,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                            lineNumber: 328,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#",
                                                                className: "hover:text-white transition",
                                                                children: "Instagram"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                                lineNumber: 329,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                            lineNumber: 329,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "#",
                                                                className: "hover:text-white transition",
                                                                children: "Twitter"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                                lineNumber: 330,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                            lineNumber: 330,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                                    lineNumber: 327,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                            lineNumber: 325,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                    lineNumber: 300,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t border-gray-800 pt-8 text-center text-gray-400",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "© 2025 QuickMarket. Todos os direitos reservados."
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                        lineNumber: 335,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                                    lineNumber: 334,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                            lineNumber: 299,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/page.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e7f7103e._.js.map