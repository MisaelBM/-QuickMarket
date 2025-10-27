(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api"
});
// Interceptor para adicionar token de autenticação
api.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = "Bearer ".concat(token);
    }
    return config;
});
const __TURBOPACK__default__export__ = api;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeaderBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function HeaderBar() {
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [cartCount, setCartCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeaderBar.useEffect": ()=>{
            // Load user from localStorage
            const userData = localStorage.getItem('user');
            if (userData) {
                try {
                    setUser(JSON.parse(userData));
                } catch (e) {
                    console.error('Error parsing user data:', e);
                }
            }
        }
    }["HeaderBar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeaderBar.useEffect": ()=>{
            // Load cart count when user is logged in
            const loadCartCount = {
                "HeaderBar.useEffect.loadCartCount": async ()=>{
                    const token = localStorage.getItem('token');
                    if (!token || !user) {
                        setCartCount(0);
                        return;
                    }
                    try {
                        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/cart/');
                        const cartItems = response.data;
                        // Calculate total items in cart
                        const totalItems = cartItems.reduce({
                            "HeaderBar.useEffect.loadCartCount.totalItems": (sum, item)=>sum + item.quantidade
                        }["HeaderBar.useEffect.loadCartCount.totalItems"], 0);
                        setCartCount(totalItems);
                    } catch (error) {
                        console.error('Error loading cart count:', error);
                        setCartCount(0);
                    }
                }
            }["HeaderBar.useEffect.loadCartCount"];
            loadCartCount();
            // Refresh cart count every 2 seconds to keep it updated
            const interval = setInterval(loadCartCount, 2000);
            return ({
                "HeaderBar.useEffect": ()=>clearInterval(interval)
            })["HeaderBar.useEffect"];
        }
    }["HeaderBar.useEffect"], [
        user
    ]);
    const handleLogout = async ()=>{
        try {
            // Call logout API
            await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/auth/logout');
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 bg-white shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-gradient-to-r from-emerald-600 to-green-600 text-white py-2 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto flex items-center justify-between text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Entrega para: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "hover:underline",
                                    children: "Atendimento"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "hover:underline",
                                    children: "Sobre"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 py-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden md:block",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent",
                                            children: "QuickMarket"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                            lineNumber: 124,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden lg:flex flex-1 max-w-2xl mx-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full flex items-center bg-gray-100 rounded-full px-4 py-3 border-2 border-transparent focus-within:border-emerald-500 transition",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Buscar produtos...",
                                        className: "flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/carrinho",
                                    className: "relative p-2 hover:bg-gray-100 rounded-full transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                            className: "w-6 h-6 text-gray-700"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                            lineNumber: 148,
                                            columnNumber: 15
                                        }, this),
                                        cartCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/notificacoes",
                                    className: "relative p-2 hover:bg-gray-100 rounded-full transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                            className: "w-6 h-6 text-gray-700"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                            lineNumber: 157,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition cursor-pointer",
                                            onClick: ()=>setIsUserMenuOpen(!isUserMenuOpen),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm",
                                                    children: getInitials(user.nome)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        isUserMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border-2 border-gray-100 overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4 border-b border-gray-100",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-semibold text-gray-800",
                                                            children: user.nome
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                                            lineNumber: 176,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleLogout,
                                                    className: "w-full px-4 py-3 text-left text-sm text-red-600 hover:bg-red-50 transition flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
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
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/login",
                                    className: "flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                            lineNumber: 191,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "hidden md:block bg-gray-50 border-t border-gray-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 py-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/lista_mercados",
                                className: "flex items-center gap-2 font-semibold text-gray-700 hover:text-emerald-600 transition cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                        lineNumber: 204,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-6 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "text-gray-700 hover:text-emerald-600 font-semibold transition",
                                        children: "Promoções"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_s(HeaderBar, "pQrv6RQ1/BdCZjcDrKj3Df/8gc8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = HeaderBar;
var _c;
__turbopack_context__.k.register(_c, "HeaderBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/lista_mercados/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ListaMercadosPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$src$2f$components$2f$ui$2f$headerBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/components/ui/headerBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
"use client";
;
;
;
function ListaMercadosPage() {
    const categorias = [
        {
            id: 1,
            nome: "Frutas & Verduras",
            icon: "🥬",
            produtos: 245,
            cor: "from-green-100 to-emerald-100"
        },
        {
            id: 2,
            nome: "Carnes & Aves",
            icon: "🥩",
            produtos: 89,
            cor: "from-red-100 to-pink-100"
        },
        {
            id: 3,
            nome: "Limpeza",
            icon: "🧹",
            produtos: 156,
            cor: "from-blue-100 to-cyan-100"
        },
        {
            id: 4,
            nome: "Bebidas",
            icon: "🥤",
            produtos: 124,
            cor: "from-purple-100 to-violet-100"
        },
        {
            id: 5,
            nome: "Padaria",
            icon: "🥖",
            produtos: 67,
            cor: "from-amber-100 to-yellow-100"
        },
        {
            id: 6,
            nome: "Congelados",
            icon: "🧊",
            produtos: 98,
            cor: "from-cyan-100 to-blue-100"
        },
        {
            id: 7,
            nome: "Laticínios",
            icon: "🥛",
            produtos: 112,
            cor: "from-white to-gray-50"
        },
        {
            id: 8,
            nome: "Petiscos",
            icon: "🍿",
            produtos: 203,
            cor: "from-orange-100 to-red-100"
        }
    ];
    const maisVendidos = [
        {
            nome: "Arroz Tipo 1 5kg",
            preco: 19.99,
            vendas: 1234
        },
        {
            nome: "Feijão Carioca 1kg",
            preco: 7.49,
            vendas: 987
        },
        {
            nome: "Óleo de Soja 900ml",
            preco: 5.99,
            vendas: 856
        },
        {
            nome: "Açúcar Cristal 1kg",
            preco: 4.99,
            vendas: 742
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$src$2f$components$2f$ui$2f$headerBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/lista_mercados/page.tsx",
                lineNumber: 37,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 py-10 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "max-w-7xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-5xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-4",
                                    children: "Nossas Categorias"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/lista_mercados/page.tsx",
                                    lineNumber: 41,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-gray-600",
                                    children: "Explore nossos produtos e encontre o que você precisa"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/lista_mercados/page.tsx",
                                    lineNumber: 44,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/lista_mercados/page.tsx",
                            lineNumber: 40,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16",
                            children: categorias.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-br ".concat(cat.cor, " rounded-2xl p-6 hover:shadow-2xl hover:scale-105 transition cursor-pointer border-2 border-transparent hover:border-emerald-300"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-6xl mb-4 text-center",
                                            children: cat.icon
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/lista_mercados/page.tsx",
                                            lineNumber: 56,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-xl text-gray-800 text-center mb-2",
                                            children: cat.nome
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/lista_mercados/page.tsx",
                                            lineNumber: 57,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600 text-center",
                                            children: [
                                                cat.produtos,
                                                " produtos"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/lista_mercados/page.tsx",
                                            lineNumber: 58,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, cat.id, true, {
                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/lista_mercados/page.tsx",
                                    lineNumber: 52,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/lista_mercados/page.tsx",
                            lineNumber: 50,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-3xl shadow-xl p-8 border-2 border-emerald-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-3xl font-bold text-gray-800 flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                    className: "w-8 h-8 text-emerald-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/lista_mercados/page.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 33
                                                }, this),
                                                "Mais Vendidos da Semana"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/lista_mercados/page.tsx",
                                            lineNumber: 66,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "text-emerald-600 font-semibold hover:underline",
                                            children: "Ver todos →"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/lista_mercados/page.tsx",
                                            lineNumber: 70,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/lista_mercados/page.tsx",
                                    lineNumber: 65,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                                    children: maisVendidos.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-transparent hover:border-emerald-300 transition shadow-lg hover:shadow-2xl",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                            className: "w-6 h-6 text-amber-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/lista_mercados/page.tsx",
                                                            lineNumber: 81,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold",
                                                            children: [
                                                                "#",
                                                                index + 1,
                                                                " Mais Vendido"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/lista_mercados/page.tsx",
                                                            lineNumber: 82,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/lista_mercados/page.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-lg text-gray-800 mb-2",
                                                    children: item.nome
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/lista_mercados/page.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold text-emerald-600 mb-2",
                                                    children: [
                                                        "R$ ",
                                                        item.preco.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/lista_mercados/page.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-500 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                            className: "w-4 h-4 text-green-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/lista_mercados/page.tsx",
                                                            lineNumber: 89,
                                                            columnNumber: 41
                                                        }, this),
                                                        item.vendas,
                                                        " vendas esta semana"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/lista_mercados/page.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/lista_mercados/page.tsx",
                                            lineNumber: 76,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/lista_mercados/page.tsx",
                                    lineNumber: 74,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/lista_mercados/page.tsx",
                            lineNumber: 64,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/lista_mercados/page.tsx",
                    lineNumber: 39,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/lista_mercados/page.tsx",
                lineNumber: 38,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_c = ListaMercadosPage;
var _c;
__turbopack_context__.k.register(_c, "ListaMercadosPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=87a22_rket-831c02a04103f5108973719b0f4611400b7d37ac_quick_market_frontend_src_287273ac._.js.map