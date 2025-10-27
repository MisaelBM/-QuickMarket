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
"[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/login/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function LoginPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [senha, setSenha] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [erro, setErro] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setErro("");
        setLoading(true);
        // Validation
        if (!email || !senha) {
            setErro("Preencha todos os campos.");
            setLoading(false);
            return;
        }
        try {
            // Make API call to login endpoint
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/auth/login', {
                email,
                senha
            });
            // Store token and user data
            const { token, user } = response.data;
            // Save token to localStorage
            localStorage.setItem('token', token);
            // Save user data to localStorage (optional, for easier access)
            localStorage.setItem('user', JSON.stringify(user));
            // Redirect to home page
            router.push('/');
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            // Handle error response
            if (error.response) {
                var _error_response_data;
                const errorMessage = ((_error_response_data = error.response.data) === null || _error_response_data === void 0 ? void 0 : _error_response_data.error) || 'Erro ao fazer login';
                setErro(errorMessage);
            } else {
                setErro('Erro de conexão. Verifique sua internet e tente novamente.');
            }
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-amber-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border-2 border-emerald-100",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold mb-2 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent",
                            children: "Bem-vindo de volta!"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/login/page.tsx",
                            lineNumber: 65,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: "Faça login no QuickMarket"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/login/page.tsx",
                            lineNumber: 68,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/login/page.tsx",
                    lineNumber: 64,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                    children: "E-mail"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/login/page.tsx",
                                    lineNumber: 73,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    className: "w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition",
                                    value: email,
                                    onChange: (e)=>setEmail(e.target.value),
                                    placeholder: "seu@email.com",
                                    required: true,
                                    autoFocus: true,
                                    disabled: loading
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/login/page.tsx",
                                    lineNumber: 76,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/login/page.tsx",
                            lineNumber: 72,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                    children: "Senha"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/login/page.tsx",
                                    lineNumber: 88,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "password",
                                    className: "w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition",
                                    value: senha,
                                    onChange: (e)=>setSenha(e.target.value),
                                    placeholder: "••••••••",
                                    required: true,
                                    disabled: loading
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/login/page.tsx",
                                    lineNumber: 91,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/login/page.tsx",
                            lineNumber: 87,
                            columnNumber: 21
                        }, this),
                        erro && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-red-50 border-2 border-red-200 text-red-700 text-sm rounded-xl py-3 px-4",
                            children: erro
                        }, void 0, false, {
                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/login/page.tsx",
                            lineNumber: 102,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: loading,
                            className: "w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold py-3 rounded-xl transition shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed",
                            children: loading ? 'Entrando...' : 'Entrar'
                        }, void 0, false, {
                            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/login/page.tsx",
                            lineNumber: 106,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/login/page.tsx",
                    lineNumber: 71,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600",
                        children: [
                            "Não tem uma conta?",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/cadastro",
                                className: "text-emerald-600 hover:text-emerald-700 font-semibold hover:underline",
                                children: "Cadastre-se"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/login/page.tsx",
                                lineNumber: 118,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/login/page.tsx",
                        lineNumber: 116,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/login/page.tsx",
                    lineNumber: 115,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/login/page.tsx",
            lineNumber: 63,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/-QuickMarket/-QuickMarket/-QuickMarket-831c02a04103f5108973719b0f4611400b7d37ac/quick_market/frontend/src/app/login/page.tsx",
        lineNumber: 62,
        columnNumber: 9
    }, this);
}
_s(LoginPage, "nt4xUxEzmoOEcpXZjHquhQOBFJQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f2d$QuickMarket$2f2d$QuickMarket$2f2d$QuickMarket$2d$831c02a04103f5108973719b0f4611400b7d37ac$2f$quick_market$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LoginPage;
var _c;
__turbopack_context__.k.register(_c, "LoginPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=87a22_rket-831c02a04103f5108973719b0f4611400b7d37ac_quick_market_frontend_src_c2ce2607._.js.map