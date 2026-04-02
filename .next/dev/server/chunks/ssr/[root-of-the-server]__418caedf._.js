module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/lib/utils.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/components/ui/card.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-rsc] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/sidebar.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/sidebar.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/sidebar.tsx <module evaluation>", "default");
}),
"[project]/components/sidebar.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/sidebar.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/sidebar.tsx", "default");
}),
"[project]/components/sidebar.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/sidebar.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/sidebar.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/research/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResearchPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sidebar.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
;
;
function ResearchPage() {
    const publications = [
        {
            title: "User behavioral patterns in inclusive public open space: A case from Indian towns",
            journal: "Cities & Health",
            authors: "Yadav, M., Gupta, A. and Nayak, B.K.",
            year: "(2025)"
        },
        {
            title: "Simulation-based investigation of ETFE and autoheal polymers for energy efficiency and thermal comfort in adaptive building envelopes",
            journal: "International Journal of Applied Mathematics",
            authors: "Yadav, M. and Kuda, A.",
            year: "(2025)"
        },
        {
            title: "Performance of PTFE-based adaptive building facades for climate resilience: A simulation-driven analysis",
            journal: "International Journal of Engineering, Science and Information Technology",
            authors: "Yadav, M., Kuda, A. and Ali, S.M.",
            year: "(2025)"
        },
        {
            title: "Examination of key landscape characteristics and evaluation tools for assessing the impact of higher education campus landscapes on students’ well-being: A systematic review",
            journal: "Multidisciplinary Reviews,",
            authors: "Prabhu, M.K., Yadav, M., Arya, B., Kumar, D., Sharma, M. and Kumar, H.",
            year: "(2025)"
        },
        {
            title: "Impact of Higher Education Campus Landscape on Students’ Mental Health: A Systematic Review",
            journal: "Indian Journal of Psychological Science, 21(Special Issue),",
            authors: "Prabhu, M.K. and Yadav, M.",
            year: "(2025)"
        },
        {
            title: "Pharad block printing: A cultural treasure resurging in contemporary times",
            journal: "TEXTILE, 23(2),",
            authors: "Mishra, P. and Yadav, M.",
            year: "(2025)"
        },
        {
            title: "A systematic literature review on inclusive public open spaces: Accessibility standards and universal design principles",
            journal: "Urban Sciences",
            authors: "Yadav, M., Gupta, A. and Nayak, B.K.",
            year: "(2025)"
        },
        {
            title: "Water, wheels and wisdom: Reviving the Aurangabad Panchakki",
            journal: "Journal of Cultural Heritage Management and Sustainable Development",
            authors: "Yadav, M., Shamra, R. and Ozarkar, A.",
            year: "(2025)"
        },
        {
            title: "Optimizing thermal efficiency of building envelopes with sustainable composite materials",
            journal: "Buildings, 15(2), p. 230. doi: 10.3390/buildings15020230",
            authors: "Deshmukh, M. and Yadav, M.",
            year: "(2025)"
        },
        {
            title: "Sustainable construction: The use of cork material in the building industry",
            journal: "Materials for Renewable and Sustainable Energy",
            authors: "Yadav, M. and Singhal, I.",
            year: "(2024)"
        },
        {
            title: "Thermal comfort study of roof shapes and materials in Jaisalmer, India",
            journal: "SSRG International Journal of Civil Engineering, 11(7), pp. 174–188. doi: 10.14445/23488352/IJCE-V11I7P112",
            authors: "Sharma, S. and Yadav, M.",
            year: "(2024)"
        },
        {
            title: "A thermal study of roof shapes and materials in hot dry climates: Insights from a simulation from Rajasthan, India",
            journal: "ISVS e-journal, 10(12),",
            authors: "Sharma, S. and Yadav, M.",
            year: "(2023)"
        },
        {
            title: "Assessment of urban growth and ecological sustainability: Study of Mumbai, India",
            journal: "ISVS e-journal",
            authors: "Yadav, M.",
            year: "(2023)"
        },
        {
            title: "Consumer behaviour towards the adoption of sustainable clothing",
            journal: "in Proceedings of the International Conference of Creative Futures (ICCF 2022), Manipal University Jaipur, India, 20–21 May 2022",
            authors: "Mishra, P. and Yadav, M.",
            year: "(2023)"
        },
        {
            title: "Post occupancy evaluation of elderly/senior housing projects in India",
            journal: "in Responsible Pedagogies in Architecture: Combating Climate Change. Cambridge: Cambridge Scholars Publishing",
            authors: "Sharma, S. and Yadav, M.",
            year: "(2023)"
        },
        {
            title: "Opportunities and challenges of using nanomaterials and nanotechnology in architecture: An overview",
            journal: "Materials Today: Proceedings",
            authors: "Kuda, A. and Yadav, M.",
            year: "(2022)"
        },
        {
            title: "Waste to wealth: Overview of waste and recycled material in construction industry",
            journal: "Materials Today: Proceedings",
            authors: "Yadav, M. and Sinha, S.",
            year: "(2022)"
        },
        {
            title: "Opportunities and challenges of hempcrete as a building material for construction: An overview",
            journal: "Materials Today: Proceedings",
            authors: "Yadav, M. and Saini, A.",
            year: "(2022)"
        },
        {
            title: "Fast fashion and its impact on the environment: An overview",
            journal: "Journal of Contemporary Issues in Business and Government, 28(4),",
            authors: "Mishra, P. and Yadav, M.",
            year: "(2022)"
        },
        {
            title: "Redefining design education for 21st century",
            journal: "in Proceedings of the International Conference on Research into Design (ICoRD’21). Springer, IIT Mumbai, India",
            authors: "Yadav, M.",
            year: "(2021)"
        },
        {
            title: "Application of nano materials in architecture: An overview",
            journal: "in Proceedings of the International Conference CRMSC-2021, Materials Today: Proceedings",
            authors: "Yadav, M. and Verma, A.",
            year: "(2021)"
        },
        {
            title: "Biobased building materials for sustainable future: An overview",
            journal: "in Proceedings of the International Conference CRMSC-2021, Materials Today: Proceedings",
            authors: "Yadav, M. and Agarwal, M.",
            year: "(2021)"
        },
        {
            title: "Bamboo as a sustainable material in the construction industry: An overview",
            journal: "in Proceedings of the International Conference CRMSC-2021, Materials Today: Proceedings",
            authors: "Yadav, M. and Mathur, A.",
            year: "(2021)"
        },
        {
            title: "Campus design of universities: An overview",
            journal: "Journal of Design & Built Environment",
            authors: "Yadav, M. and Agarwal, P.",
            year: "(2021)"
        },
        {
            title: "Application of augmented reality and virtual reality in architecture and planning: An overview",
            journal: "in Proceedings of the 6th International Conference on Signal and Image Processing (SIGI 2020). Chennai, India",
            authors: "Yadav, M. and Jisthu, P.",
            year: "(2020)"
        },
        {
            title: "Experiences and challenges of community participation in urban renewal projects: A case study of Bhendi Bazzar, Mumbai, India",
            journal: "in Proceedings of the International Conference on Urban Redesign and Redevelopment. Vancouver, Canada",
            authors: "Yadav, M.",
            year: "(2018)"
        },
        {
            title: "Environment management through meditation: A sustainable approach",
            journal: "in Proceedings of the International Conference on Emerging Trends in Engineering Science & Technology. Govt. Engineering College, Thrissur, Kerala, India",
            authors: "Yadav, M.",
            year: "(2018)"
        },
        {
            title: "Future cities: Envisioning human dimensions",
            journal: "International Journal of Advance & Innovative Research, 5(4 XVIII)",
            authors: "Yadav, M.",
            year: "(2018)"
        },
        {
            title: "Analysis of natural ventilation systems in heritage buildings: A case study of Hawa Mahal, Jaipur, India",
            journal: "Journal of Indian Institute of Architects",
            authors: "Yadav, M. and Simion, I.G.",
            year: "(2017)"
        },
        {
            title: "Study of roof types and technologies to reduce indoor air temperature: An overview",
            journal: "Journal of Indian Institute of Architects, 80(9), pp. 19–25",
            authors: "Sharma, S. and Yadav, M.",
            year: "(2015)"
        },
        {
            title: "Green building rating systems through the lens of vernacular architecture",
            journal: "Journal of Indian Institute of Architects",
            authors: "Yadav, M. and Joann, L.",
            year: "(2015)"
        },
        {
            title: "Impact of urban form on hydrology: A case study of Mumbai, India",
            journal: "in Proceedings of the International Congress of Association of Asian Planning Schools. University of Technology Malaysia, Malaysia",
            authors: "Yadav, M. and Nayak, B.K.",
            year: "(2015)"
        },
        {
            title: "Architectural design pedagogy in the context of environmental sustainability",
            journal: "in Proceedings of the International Conference on Reinventing Design Pedagogy & Contextual Aesthetics. NIT Calicut, India",
            authors: "Yadav, M.",
            year: "(2015)"
        },
        {
            title: "Understanding architecture as a potent form of visual art",
            journal: "in Proceedings of the 4th Annual International Conference on Visual and Performing Arts. Athens Institute for Education and Research, Greece",
            authors: "Yadav, M.",
            year: "(2013)"
        },
        {
            title: "Appropriate residential typologies for Mumbai",
            journal: "in Proceedings of the International Conference on IES. Japan",
            authors: "Yadav, M.",
            year: "(2013)"
        },
        {
            title: "Embodied energy in vernacular houses",
            journal: "in Proceedings of the International Conference ISVS. Colombo, Sri Lanka",
            authors: "Yadav, M.",
            year: "(2010)"
        },
        {
            title: "Defining ecological regionalism: A theoretical perspective",
            journal: "in Proceedings of the International Conference on Eco-Architecture. Algarve, Portugal",
            authors: "Yadav, M.",
            year: "(2008)"
        },
        {
            title: "Transforming habitats: A case study of Mumbai",
            journal: "in Proceedings of the International Conference ISVS-IV. CEPT, Ahmedabad, India",
            authors: "Yadav, M.",
            year: "(2008)"
        },
        {
            title: "Housing tenure for the urban poor: A case study of Mumbai city",
            journal: "in Proceedings of the International Conference on Housing for the Urban Poor. Brisbane, Australia",
            authors: "Yadav, M.",
            year: "(2007)"
        },
        {
            title: "Heritage of Aurangabad: Problems and prospects",
            journal: "in Proceedings of the National Conference on Heritage Conservation. Jaipur, India",
            authors: "Yadav, M.",
            year: "(2004)"
        },
        {
            title: "Women empowerment through rainwater harvesting",
            journal: "in Proceedings of the National Conference on Emerging Technologies for Women. Indore, India",
            authors: "Yadav, M.",
            year: "(2003)"
        },
        {
            title: "Sustainable urban development of Aurangabad city",
            journal: "in Proceedings of the International Conference on Sustainable Habitats. Mumbai, India",
            authors: "Yadav, M.",
            year: "(2003)"
        },
        {
            title: "The Therapeutic Campus: A Systematic Review of Green, Blue, and Grey Spaces’ Impact on Student Mental Health Outcomes",
            journal: "in 34th Annual Conference of Sports Psychology Association of India, Manipal University Jaipur, India, 17–18 April",
            authors: "Prabhu, M.K. and Yadav, M.",
            year: "(2025)"
        },
        {
            title: "Unveiling the threads of change: Exploring influences on youth’s intentions for sustainable clothing adoption in India",
            journal: "in Proceedings of the International Conference on Fashion as a Tool for Social Change (FTSC 2024): Cultural Preservation and Innovation, Woxsen University, Telangana, India, 5–6 August 2024",
            authors: "Mishra, P. and Yadav, M.",
            year: "(2024)"
        },
        {
            title: "Restorative Benefits of Campus Landscapes in a Semi-Arid Indian University",
            journal: "in International Conference on Multidisciplinary Approaches to Humanities & Social Sciences, Noida International University, India, 17–18 June",
            authors: "Prabhu, M.K. and Yadav, M.",
            year: "(2025)"
        },
        {
            title: "Meta-Synthesis of Campus-Landscape Theories: Building an Integrated Framework for Student Well-being",
            journal: "in International Conference on Socially Conscious Built Environments, Manipal University Jaipur, India, 27–28 November",
            authors: "Prabhu, M.K. and Yadav, M.",
            year: "(2025)"
        }
    ];
    const patents = [
        {
            title: "NEW BHARAT GREEN BUILDING RATING SYSTEM",
            patentNumber: "202311055221",
            date: "Sept. 2023",
            authors: "Yadav, M."
        },
        {
            title: "BRICK COMPOSITION TO ENHANCE THERMAL COMFORT AND PREPARATION THEREOF",
            patentNumber: "202311055210",
            date: "Sept. 2023",
            authors: "Yadav, M."
        },
        {
            title: "IOT ENABLE SMART TABLE FOR ARCHITECTS AND DESIGNERS",
            patentNumber: "202311055218",
            date: "Sept. 2023",
            authors: "Yadav, M."
        },
        {
            title: "APPLICATION AND EFFECTIVENESS OF RESPONSIVE ADAPTIVE SKINS IN COMMERCIAL BUILDINGS IN INDIA",
            patentNumber: "202311055219",
            date: "Sept. 2023",
            authors: "Yadav, M."
        },
        {
            title: "ENERGY EFFICIENT BUILDING CLUSTERS FOR HOT & DRY CLIMATE",
            patentNumber: "202311055220",
            date: "Sept. 2023",
            authors: "Yadav, M."
        },
        {
            title: "ECO FRIENDLY BRICKS: WEALTH FROM WASTE INITIATIVES",
            patentNumber: "202311056373",
            date: "Sept. 2023",
            authors: "Yadav, M."
        },
        {
            title: "MULTI-STORY UNDERGROUND EARTH SHELTERED BUILDINGS",
            patentNumber: "202311056372",
            date: "Sept. 2023",
            authors: "Yadav, M."
        },
        {
            title: "TO DEVELOP A RATING SYSTEM FOR THE SUSTAINABLE CLOTHING",
            patentNumber: "202311071907",
            date: "Nov. 2023",
            authors: "Yadav, M."
        },
        {
            title: "GABLE ROOF INTEGRATED WITH VEGETATION FOR HOT AND DRY CLIMATE",
            patentNumber: "202311081242",
            date: "Dec. 2023",
            authors: "Yadav, M."
        },
        {
            title: "A BAMBOO BIOCHAR COMPOSITE PLASTER AND PREPARATION METHOD THEREOF",
            patentNumber: "202311075608",
            date: "Dec. 2023",
            authors: "Yadav, M."
        },
        {
            title: "A FRAMEWORK FOR ASSESSMENT FOR ADAPTIVE REUSE OF HISTORICAL HERITAGE BUILDINGS",
            patentNumber: "202411038717",
            date: "May 2024",
            authors: "Yadav, M."
        },
        {
            title: "A SUSTAINABLE COMPOSITE FOR ENHANCING THERMAL AND ENVIRONMENTAL PERFORMANCE IN BUILDING ENVELOPES",
            patentNumber: "202511004432",
            date: "Jan 2025",
            authors: "Yadav, M."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/research/page.tsx",
                lineNumber: 375,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                src: "/pic_1.jpg",
                                alt: "Research Background",
                                fill: true,
                                className: "object-cover"
                            }, void 0, false, {
                                fileName: "[project]/app/research/page.tsx",
                                lineNumber: 380,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-black/20 backdrop-blur-sm"
                            }, void 0, false, {
                                fileName: "[project]/app/research/page.tsx",
                                lineNumber: 387,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-black/40"
                            }, void 0, false, {
                                fileName: "[project]/app/research/page.tsx",
                                lineNumber: 389,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/research/page.tsx",
                        lineNumber: 379,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-12 lg:px-12 lg:pt-20 lg:pb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-6xl font-bold mb-4 text-[#809949] text-center",
                                        children: "Research and Patents"
                                    }, void 0, false, {
                                        fileName: "[project]/app/research/page.tsx",
                                        lineNumber: 394,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-1 w-24 bg-[#809949] rounded-full mx-auto"
                                    }, void 0, false, {
                                        fileName: "[project]/app/research/page.tsx",
                                        lineNumber: 395,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/research/page.tsx",
                                lineNumber: 393,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "bg-[#3d3a37]/90 backdrop-blur-sm border-0 shadow-xl",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "p-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold mb-6 text-[#809949]",
                                                    children: "Research Publications"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/research/page.tsx",
                                                    lineNumber: 403,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: publications.map((publication, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-4 border-l-4 border-[#809949] hover:bg-white/10 transition-colors rounded-r-lg",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-semibold text-white mb-1",
                                                                    children: [
                                                                        idx + 1,
                                                                        ". ",
                                                                        publication.title
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/research/page.tsx",
                                                                    lineNumber: 407,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-white/80",
                                                                    children: [
                                                                        publication.authors,
                                                                        " ",
                                                                        publication.year,
                                                                        " ",
                                                                        publication.journal
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/research/page.tsx",
                                                                    lineNumber: 408,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, idx, true, {
                                                            fileName: "[project]/app/research/page.tsx",
                                                            lineNumber: 406,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/research/page.tsx",
                                                    lineNumber: 404,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/research/page.tsx",
                                            lineNumber: 402,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/research/page.tsx",
                                        lineNumber: 401,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "bg-[#3d3a37]/90 backdrop-blur-sm border-0 shadow-xl",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "p-10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-3xl font-bold mb-6 text-[#809949]",
                                                    children: "Published Patents"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/research/page.tsx",
                                                    lineNumber: 418,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4 text-lg",
                                                    children: [
                                                        {
                                                            title: "NEW BHARAT GREEN BUILDING RATING SYSTEM",
                                                            patentNumber: "202311055221",
                                                            date: "Sept. 2023",
                                                            authors: "Yadav, M."
                                                        },
                                                        {
                                                            title: "BRICK COMPOSITION TO ENHANCE THERMAL COMFORT AND PREPARATION THEREOF",
                                                            patentNumber: "202311055210",
                                                            date: "Sept. 2023",
                                                            authors: "Yadav, M."
                                                        },
                                                        {
                                                            title: "IOT ENABLE SMART TABLE FOR ARCHITECTS AND DESIGNERS",
                                                            patentNumber: "202311055218",
                                                            date: "Sept. 2023",
                                                            authors: "Yadav, M."
                                                        },
                                                        {
                                                            title: "APPLICATION AND EFFECTIVENESS OF RESPONSIVE ADAPTIVE SKINS IN COMMERCIAL BUILDINGS IN INDIA",
                                                            patentNumber: "202311055219",
                                                            date: "Sept. 2023",
                                                            authors: "Yadav, M."
                                                        },
                                                        {
                                                            title: "ENERGY EFFICIENT BUILDING CLUSTERS FOR HOT & DRY CLIMATE",
                                                            patentNumber: "202311055220",
                                                            date: "Sept. 2023",
                                                            authors: "Yadav, M."
                                                        },
                                                        {
                                                            title: "ECO FRIENDLY BRICKS: WEALTH FROM WASTE INITIATIVES",
                                                            patentNumber: "202311056373",
                                                            date: "Sept. 2023",
                                                            authors: "Yadav, M."
                                                        },
                                                        {
                                                            title: "MULTI-STOREYED UNDERGROUND EARTH SHELTERED BUILDINGS",
                                                            patentNumber: "202311056372",
                                                            date: "Sept. 2023",
                                                            authors: "Yadav, M."
                                                        },
                                                        {
                                                            title: "TO DEVELOP A RATING SYSTEM FOR THE SUSTAINABLE CLOTHING",
                                                            patentNumber: "202311071907",
                                                            date: "Nov. 2023",
                                                            authors: "Yadav, M."
                                                        },
                                                        {
                                                            title: "GABLE ROOF INTEGRATED WITH VEGETATION FOR HOT AND DRY CLIMATE",
                                                            patentNumber: "202311081242",
                                                            date: "Dec. 2023",
                                                            authors: "Yadav, M."
                                                        },
                                                        {
                                                            title: "A BAMBOO BIOCHAR COMPOSITE PLASTER AND PREPARATION METHOD THEREOF",
                                                            patentNumber: "202311075608",
                                                            date: "Dec. 2023",
                                                            authors: "Yadav, M."
                                                        },
                                                        {
                                                            title: "A FRAMEWORK FOR ASSESSMENT FOR ADAPTIVE REUSE OF HISTORICAL HERITAGE BUILDINGS",
                                                            patentNumber: "202411038717",
                                                            date: "May 2024",
                                                            authors: "Yadav, M."
                                                        },
                                                        {
                                                            title: "A SUSTAINABLE COMPOSITE FOR ENHANCING THERMAL AND ENVIRONMENTAL PERFORMANCE IN BUILDING ENVELOPES",
                                                            patentNumber: "202511004432",
                                                            date: "Jan 2025",
                                                            authors: "Yadav, M."
                                                        }
                                                    ].map((patent, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start gap-4 p-4 rounded-lg hover:bg-white/10 transition-all duration-200",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-3 h-3 bg-[#809949] rounded-full mt-1.5 flex-shrink-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/page.tsx",
                                                                    lineNumber: 495,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-white",
                                                                    children: patent.patentNumber
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/page.tsx",
                                                                    lineNumber: 496,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-white/90 text-sm mt-1",
                                                                    children: patent.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/page.tsx",
                                                                    lineNumber: 497,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-white/80 text-xs mt-1",
                                                                    children: [
                                                                        patent.date,
                                                                        " ",
                                                                        patent.authors
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/research/page.tsx",
                                                                    lineNumber: 498,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, idx, true, {
                                                            fileName: "[project]/app/research/page.tsx",
                                                            lineNumber: 494,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/research/page.tsx",
                                                    lineNumber: 419,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/research/page.tsx",
                                            lineNumber: 417,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/research/page.tsx",
                                        lineNumber: 416,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "bg-[#3d3a37]/90 backdrop-blur-sm border-0 shadow-xl",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "p-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold mb-6 text-[#809949]",
                                                    children: "Books"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/research/page.tsx",
                                                    lineNumber: 506,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "group p-4 border-l-4 border-[#809949] hover:bg-white/10 transition-colors rounded-r-lg",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-semibold text-white group-hover:text-white/80",
                                                                children: "Responsible Pedagogies in Architecture: Combating Climate Change"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/research/page.tsx",
                                                                lineNumber: 509,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/page.tsx",
                                                            lineNumber: 508,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "group p-4 border-l-4 border-[#809949] hover:bg-white/10 transition-colors rounded-r-lg",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-semibold text-white group-hover:text-white/80",
                                                                children: "Creative Futures"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/research/page.tsx",
                                                                lineNumber: 514,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/research/page.tsx",
                                                            lineNumber: 513,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "group p-4 border-l-4 border-[#809949] hover:bg-white/10 transition-colors rounded-r-lg",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-semibold text-white group-hover:text-white/80",
                                                                    children: "Coffee Table Book on Stepwells of India"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/page.tsx",
                                                                    lineNumber: 517,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-white/80 mt-1",
                                                                    children: "Ministry of Culture, Government of India"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/research/page.tsx",
                                                                    lineNumber: 520,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/research/page.tsx",
                                                            lineNumber: 516,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/research/page.tsx",
                                                    lineNumber: 507,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/research/page.tsx",
                                            lineNumber: 505,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/research/page.tsx",
                                        lineNumber: 504,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/research/page.tsx",
                                lineNumber: 398,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-12 h-0.5 bg-[#809949] w-full max-w-4xl mx-auto"
                            }, void 0, false, {
                                fileName: "[project]/app/research/page.tsx",
                                lineNumber: 528,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/research/page.tsx",
                        lineNumber: 392,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/research/page.tsx",
                lineNumber: 377,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/research/page.tsx",
        lineNumber: 374,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/research/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/research/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__418caedf._.js.map