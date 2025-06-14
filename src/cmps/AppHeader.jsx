import { Link } from "react-router-dom";

export function AppHeader() {
    return (
        <section className="header-container full">
            <span className="header-title">
                <Link to="/" className="header-link">
                    Tal Yefet
                </Link>
            </span>
        </section>
    );
}


// import { useLayoutEffect, useRef } from "react";
// import { Link } from "react-router-dom";

// export function AppHeader() {
//     const headerRef = useRef(null);        // element that owns the CSS vars
//     const centerRef = useRef({ x: 0, y: 0 }); // header centre (cached)
//     const frameRef = useRef(null);        // rAF id
//     const mousePosRef = useRef({ x: 0, y: 0 });

//     useLayoutEffect(() => {
//         const header = headerRef.current;
//         if (!header) return;

//         // ── 1 compute header centre once, and on resize ────────────────────────────
//         const calcCenter = () => {
//             const { left, top, width, height } = header.getBoundingClientRect();
//             centerRef.current = { x: left + width / 2, y: top + height / 2 };
//         };
//         calcCenter();
//         window.addEventListener("resize", calcCenter);

//         // ── 2 pointer listener on the whole window ────────────────────────────────
//         const handleMove = (e) => {
//             mousePosRef.current = { x: e.clientX, y: e.clientY };

//             // throttle with rAF so we never touch DOM more than once per frame (~16 ms)
//             if (frameRef.current) return;
//             frameRef.current = requestAnimationFrame(() => {
//                 const { x: cx, y: cy } = centerRef.current;
//                 const { x: mx, y: my } = mousePosRef.current;

//                 const factor = 0.02; // how “long” the shadow is
//                 header.style.setProperty("--shadow-x", `${(cx - mx) * factor}px`);
//                 header.style.setProperty("--shadow-y", `${(cy - my) * factor}px`);

//                 frameRef.current = null;
//             });
//         };

//         window.addEventListener("pointermove", handleMove, { passive: true });

//         // ── 3 cleanup ─────────────────────────────────────────────────────────────
//         return () => {
//             window.removeEventListener("pointermove", handleMove);
//             window.removeEventListener("resize", calcCenter);
//             if (frameRef.current) cancelAnimationFrame(frameRef.current);
//         };
//     }, []);

//     return (
//         <section className="header-container full" ref={headerRef}>
//             <span className="header-title">
//                 <Link to="/" className="header-link">
//                     AFIK&nbsp;YEFET
//                 </Link>
//             </span>
//         </section>
//     );
// }
