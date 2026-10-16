"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { RotateCcw, Sparkles, ZoomIn, ShieldCheck, Layers, Droplet, QrCode } from "lucide-react";

interface InteractiveJar3DProps {
  activeFeatureId?: string;
  onFeatureSelect?: (id: string) => void;
  className?: string;
}

export default function InteractiveJar3D({
  activeFeatureId = "micro-printing",
  onFeatureSelect,
  className = "",
}: InteractiveJar3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // 3D Tilt & Momentum Physics
  const [rotY, setRotY] = useState<number>(0);
  const [rotX, setRotX] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [glarePos, setGlarePos] = useState<{ x: number; y: number }>({ x: 35, y: 25 });
  const lastPointerPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const velocityRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const animFrameRef = useRef<number>(0);

  // Smooth auto-transition when feature pills are selected
  useEffect(() => {
    if (activeFeatureId === "variable-printing") {
      setIsFlipped(true);
      setRotY(180);
      setRotX(0);
    } else {
      setIsFlipped(false);
      if (activeFeatureId === "food-adhesive") {
        setRotY(8);
        setRotX(-4);
      } else if (activeFeatureId === "micro-printing") {
        setRotY(-6);
        setRotX(2);
      } else if (activeFeatureId === "hologram") {
        setRotY(10);
        setRotX(5);
      } else if (activeFeatureId === "tactile-texture") {
        setRotY(0);
        setRotX(-3);
      } else if (activeFeatureId === "drip-off") {
        setRotY(-4);
        setRotX(4);
      } else if (activeFeatureId === "foiling") {
        setRotY(6);
        setRotX(-2);
      }
    }
  }, [activeFeatureId]);

  // Pointer Drag & Tilt Handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    lastPointerPos.current = { x: e.clientX, y: e.clientY };
    velocityRef.current = { x: 0, y: 0 };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (container) {
      const rect = container.getBoundingClientRect();
      const normX = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
      const normY = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
      setGlarePos({ x: normX, y: normY });
    }

    if (!isDragging) {
      // Subtle hovering tilt when not dragging
      if (container) {
        const rect = container.getBoundingClientRect();
        const offsetX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const offsetY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
        if (!isFlipped) {
          setRotY(offsetX * 12);
          setRotX(-offsetY * 8);
        } else {
          setRotY(180 + offsetX * 12);
          setRotX(-offsetY * 8);
        }
      }
      return;
    }

    const deltaX = e.clientX - lastPointerPos.current.x;
    const deltaY = e.clientY - lastPointerPos.current.y;
    lastPointerPos.current = { x: e.clientX, y: e.clientY };

    velocityRef.current = { x: deltaX * 0.45, y: deltaY * 0.35 };

    setRotY((prev) => prev + deltaX * 0.45);
    setRotX((prev) => Math.max(-20, Math.min(20, prev - deltaY * 0.35)));
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignored
    }
  };

  const resetView = () => {
    setIsFlipped(false);
    setRotY(0);
    setRotX(0);
    velocityRef.current = { x: 0, y: 0 };
  };

  const toggleFlip = () => {
    setIsFlipped((prev) => {
      const next = !prev;
      setRotY(next ? 180 : 0);
      setRotX(0);
      return next;
    });
  };

  // Normalised degree display
  const normalizedDeg = Math.round((((rotY % 360) + 360) % 360));
  const isBackView = normalizedDeg >= 90 && normalizedDeg <= 270;

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className={`relative w-full max-w-[500px] aspect-[1/1.12] flex flex-col items-center justify-center select-none cursor-grab active:cursor-grabbing touch-none ${className}`}
      style={{ perspective: "1200px" }}
      title="Click and drag to rotate the 3D studio jar"
    >
      {/* 3D Tilted Card Stage */}
      <div
        className="relative w-full h-full flex items-center justify-center transition-transform duration-150 ease-out"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateY(${rotY}deg) rotateX(${rotX}deg)`,
        }}
      >
        {/* =====================================================================
            FRONT FACE: ICONIC YELLOW-CAPPED SPORTS NUTRITION JAR
            ===================================================================== */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            isBackView ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <svg
            viewBox="0 0 500 600"
            className="w-full h-full max-h-[580px] drop-shadow-2xl overflow-visible"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Ground Shadow Radial Gradient */}
              <radialGradient id="jarGroundShadow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#0B1120" stopOpacity="0.65" />
                <stop offset="45%" stopColor="#0F172A" stopOpacity="0.35" />
                <stop offset="85%" stopColor="#0F172A" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
              </radialGradient>

              {/* Jar Body Cylindrical Metallic Obsidian Shading */}
              <linearGradient id="jarBodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#080C14" />
                <stop offset="18%" stopColor="#182236" />
                <stop offset="38%" stopColor="#334155" />
                <stop offset="55%" stopColor="#1E293B" />
                <stop offset="82%" stopColor="#0F172A" />
                <stop offset="100%" stopColor="#070A12" />
              </linearGradient>

              {/* Jar Shoulder Ambient Occlusion & Specular */}
              <linearGradient id="jarShoulderGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0F172A" />
                <stop offset="60%" stopColor="#1E293B" />
                <stop offset="100%" stopColor="#0B0F19" />
              </linearGradient>

              {/* VIBRANT GLOSSY SAFETY-YELLOW CAP GRADIENTS */}
              {/* Cap Front Cylinder Gradient */}
              <linearGradient id="capYellowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#854D0E" />
                <stop offset="15%" stopColor="#CA8A04" />
                <stop offset="36%" stopColor="#FEF9C3" />
                <stop offset="55%" stopColor="#FACC15" />
                <stop offset="85%" stopColor="#EAB308" />
                <stop offset="100%" stopColor="#713F12" />
              </linearGradient>

              {/* Cap Top Bevel Ellipse Gradient */}
              <linearGradient id="capTopGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FEF08A" />
                <stop offset="50%" stopColor="#FACC15" />
                <stop offset="100%" stopColor="#CA8A04" />
              </linearGradient>

              {/* Softbox Studio Glare Streak */}
              <linearGradient id="softboxGlare" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.18" />
                <stop offset="35%" stopColor="#FFFFFF" stopOpacity="0.28" />
                <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>

              {/* Label Honeycomb Tech Pattern */}
              <pattern id="hexGrid" width="24" height="24" patternUnits="userSpaceOnUse">
                <path
                  d="M12 0 L24 6.9 L24 20.7 L12 27.6 L0 20.7 L0 6.9 Z"
                  fill="none"
                  stroke="rgba(255,255,255,0.035)"
                  strokeWidth="0.8"
                />
              </pattern>

              {/* Holographic Multi-Spectral Rainbow Gradient */}
              <linearGradient id="holoRainbow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FACC15" stopOpacity="0.8" />
                <stop offset="25%" stopColor="#EC4899" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#00A8CC" stopOpacity="0.8" />
                <stop offset="75%" stopColor="#10B981" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FACC15" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* 1. Ground Contact Shadow & Ambience */}
            <ellipse cx="250" cy="565" rx="175" ry="24" fill="url(#jarGroundShadow)" />
            <ellipse cx="250" cy="558" rx="125" ry="8" fill="#090D16" opacity="0.75" />

            {/* 2. Sculpted Jar Body (Obsidian HDPE Plastic) */}
            <g id="jarSilhouette">
              {/* Neck & Shoulder Silhouette */}
              <path
                d="M 166 126
                   L 166 148
                   C 166 170, 110 185, 110 216
                   L 110 520
                   Q 110 546, 134 546
                   L 366 546
                   Q 390 546, 390 520
                   L 390 216
                   C 390 185, 334 170, 334 148
                   L 334 126
                   Z"
                fill="url(#jarBodyGrad)"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="1.2"
              />

              {/* Bottom Base Chamfer Line */}
              <path
                d="M 124 538 Q 250 550 376 538"
                fill="none"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1.5"
              />
            </g>

            {/* 3. FLUSH VIBRANT GLOSSY YELLOW SCREW-TOP CAP */}
            <g id="yellowScrewCap">
              {/* Neck Thread Contact Shadow underneath cap */}
              <rect x="164" y="122" width="172" height="10" fill="#000000" opacity="0.75" />

              {/* Cap Main Cylindrical Side Wall (Flush on neck at y: 68 to 128) */}
              <rect
                x="158"
                y="68"
                width="184"
                height="60"
                rx="6"
                fill="url(#capYellowGrad)"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="1"
              />

              {/* 24 Precision Vertical Fluted Ribs / Grip Grooves */}
              <g id="capFlutes">
                {[
                  166, 173, 180, 187, 195, 203, 211, 219, 227, 235, 243, 251, 259, 267, 275, 283,
                  291, 299, 307, 314, 321, 328, 334,
                ].map((fx, idx) => (
                  <g key={`flute-${idx}`}>
                    {/* Dark groove shadow */}
                    <line
                      x1={fx}
                      y1="76"
                      x2={fx}
                      y2="122"
                      stroke="#854D0E"
                      strokeWidth="2.2"
                      strokeOpacity="0.7"
                    />
                    {/* White-yellow specular ridge highlight */}
                    <line
                      x1={fx + 1.2}
                      y1="76"
                      x2={fx + 1.2}
                      y2="122"
                      stroke="#FEF9C3"
                      strokeWidth="1.2"
                      strokeOpacity="0.8"
                    />
                  </g>
                ))}
              </g>

              {/* Cap Top 3D Ellipse Surface with Micro-Beveled Lip */}
              <ellipse
                cx="250"
                cy="68"
                rx="92"
                ry="13"
                fill="url(#capTopGrad)"
                stroke="#FEF08A"
                strokeWidth="1.2"
              />

              {/* Concentric Top Depression Ring */}
              <ellipse
                cx="250"
                cy="68"
                rx="64"
                ry="8"
                fill="none"
                stroke="#A16207"
                strokeWidth="1.8"
              />
              <ellipse
                cx="250"
                cy="67.5"
                rx="62"
                ry="7.5"
                fill="none"
                stroke="#FEF9C3"
                strokeWidth="1"
              />
            </g>

            {/* 4. WRAPPED STUDIO LABEL ARTWORK (Crisp Vector Typography & Exact Hierarchy) */}
            <g id="labelSurface">
              <clipPath id="labelClip">
                <rect x="112" y="210" width="276" height="318" rx="8" />
              </clipPath>

              <g clipPath="url(#labelClip)">
                {/* A. Dark Charcoal Background + Hex Grid & Brushed Texture */}
                <rect x="112" y="210" width="276" height="318" fill="#0B0F1A" />
                <rect x="112" y="210" width="276" height="318" fill="url(#hexGrid)" opacity="0.7" />

                {/* Metallic Gold / Yellow Border Frame */}
                <rect
                  x="116"
                  y="214"
                  width="268"
                  height="310"
                  fill="none"
                  stroke="rgba(250, 204, 21, 0.45)"
                  strokeWidth="1.5"
                  rx="4"
                />

                {/* Top CMYK Calibration Bar */}
                <g id="topCMYK">
                  <rect x="120" y="218" width="65" height="4" fill="#00A8CC" />
                  <rect x="185" y="218" width="65" height="4" fill="#EC4899" />
                  <rect x="250" y="218" width="65" height="4" fill="#FACC15" />
                  <rect x="315" y="218" width="65" height="4" fill="#0F172A" />
                </g>

                {/* 1. Header Tracking Subtitle */}
                <text
                  x="124"
                  y="238"
                  fill="#94A3B8"
                  fontSize="8.5"
                  fontWeight="800"
                  letterSpacing="1.2"
                  fontFamily="system-ui, sans-serif"
                >
                  ★ ADVANCED ISOLATE MATRIX
                </text>

                {/* 2. Primary Brand Name (Bold, Striking White Typography) */}
                <text
                  x="122"
                  y="274"
                  fill="#FFFFFF"
                  fontSize="38"
                  fontWeight="900"
                  letterSpacing="1"
                  fontFamily="system-ui, -apple-system, sans-serif"
                >
                  SAMYAK
                </text>

                {/* Yellow Divider Accent */}
                <rect x="124" y="282" width="160" height="3.5" fill="#FACC15" rx="1" />

                {/* 3. Secondary Accent (Giant, High-Impact Bold Yellow Typography) */}
                <text
                  x="122"
                  y="322"
                  fill="#FACC15"
                  fontSize="33"
                  fontWeight="900"
                  letterSpacing="-0.5"
                  fontFamily="system-ui, -apple-system, sans-serif"
                >
                  ISOLATE 1:5
                </text>

                {/* 4. Sub-headline */}
                <text
                  x="124"
                  y="339"
                  fill="#FFFFFF"
                  fontSize="10"
                  fontWeight="800"
                  letterSpacing="0.4"
                  fontFamily="system-ui, sans-serif"
                >
                  FAST MUSCLE GROWTH &amp; RECOVERY
                </text>

                <text
                  x="124"
                  y="352"
                  fill="#94A3B8"
                  fontSize="8"
                  fontWeight="500"
                  fontFamily="system-ui, sans-serif"
                >
                  Micro-Filtered Whey Isolate • Zero Fillers
                </text>

                {/* 5. Clean Bordered Grid: 4 Metric Cards */}
                <g id="nutritionGrid">
                  {/* Card 1: Protein */}
                  <rect
                    x="124"
                    y="362"
                    width="60"
                    height="38"
                    rx="4"
                    fill="rgba(255,255,255,0.05)"
                    stroke="rgba(250,204,21,0.35)"
                    strokeWidth="1"
                  />
                  <text x="130" y="380" fill="#FACC15" fontSize="15" fontWeight="900">
                    75g
                  </text>
                  <text x="130" y="393" fill="#E2E8F0" fontSize="7.5" fontWeight="700">
                    PROTEIN
                  </text>

                  {/* Card 2: BCAA */}
                  <rect
                    x="188"
                    y="362"
                    width="60"
                    height="38"
                    rx="4"
                    fill="rgba(255,255,255,0.05)"
                    stroke="rgba(250,204,21,0.35)"
                    strokeWidth="1"
                  />
                  <text x="194" y="380" fill="#FACC15" fontSize="15" fontWeight="900">
                    15g
                  </text>
                  <text x="194" y="393" fill="#E2E8F0" fontSize="7.5" fontWeight="700">
                    BCAA
                  </text>

                  {/* Card 3: Creatine */}
                  <rect
                    x="252"
                    y="362"
                    width="60"
                    height="38"
                    rx="4"
                    fill="rgba(255,255,255,0.05)"
                    stroke="rgba(250,204,21,0.35)"
                    strokeWidth="1"
                  />
                  <text x="258" y="380" fill="#FACC15" fontSize="15" fontWeight="900">
                    03g
                  </text>
                  <text x="258" y="393" fill="#E2E8F0" fontSize="7.5" fontWeight="700">
                    CREATINE
                  </text>

                  {/* Card 4: Sugar */}
                  <rect
                    x="316"
                    y="362"
                    width="60"
                    height="38"
                    rx="4"
                    fill="rgba(255,255,255,0.05)"
                    stroke="rgba(250,204,21,0.35)"
                    strokeWidth="1"
                  />
                  <text x="322" y="380" fill="#38BDF8" fontSize="15" fontWeight="900">
                    00g
                  </text>
                  <text x="322" y="393" fill="#E2E8F0" fontSize="7.5" fontWeight="700">
                    SUGAR
                  </text>
                </g>

                {/* Net WT Pill & Purity Callout */}
                <g id="netWeightCallouts">
                  <rect
                    x="124"
                    y="408"
                    width="124"
                    height="20"
                    rx="4"
                    fill="rgba(250,204,21,0.12)"
                    stroke="rgba(250,204,21,0.4)"
                    strokeWidth="1"
                  />
                  <text x="130" y="422" fill="#FACC15" fontSize="8.5" fontWeight="800">
                    NET WT: 2.27 KG / 5 LBS
                  </text>

                  <rect
                    x="252"
                    y="408"
                    width="124"
                    height="20"
                    rx="4"
                    fill="rgba(255,255,255,0.05)"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                  />
                  <text x="258" y="422" fill="#E2E8F0" fontSize="8.5" fontWeight="800">
                    PURITY: 99.8% VERIFIED
                  </text>
                </g>

                {/* 6. Footer Seals, Badges & QR Code */}
                <g id="footerBadges">
                  {/* Hologram / Security Seal Box */}
                  <rect
                    x="124"
                    y="436"
                    width="114"
                    height="42"
                    rx="6"
                    fill="url(#holoRainbow)"
                    stroke="#FFFFFF"
                    strokeWidth="1"
                  />
                  <text x="130" y="453" fill="#0F172A" fontSize="8" fontWeight="900">
                    ★ SAMYAK ORIGINAL ★
                  </text>
                  <text x="130" y="468" fill="#0F172A" fontSize="7" fontWeight="700">
                    AUTHENTIC 3D VOID
                  </text>

                  {/* Certifications Crest */}
                  <text x="246" y="452" fill="#FACC15" fontSize="8" fontWeight="800">
                    ISO 9001:2015 &amp; BRC
                  </text>
                  <text x="246" y="464" fill="#94A3B8" fontSize="7" fontWeight="600">
                    100% AUTHENTIC PACKAGING
                  </text>
                  <text x="246" y="474" fill="#64748B" fontSize="6.5" fontWeight="500">
                    FDA 175.105 Cleanroom Protocols
                  </text>

                  {/* Scannable QR Code block */}
                  <rect x="338" y="436" width="38" height="38" fill="#FFFFFF" rx="4" />
                  <rect x="342" y="440" width="10" height="10" fill="#0F172A" />
                  <rect x="344" y="442" width="6" height="6" fill="#FFFFFF" />
                  <rect x="362" y="440" width="10" height="10" fill="#0F172A" />
                  <rect x="364" y="442" width="6" height="6" fill="#FFFFFF" />
                  <rect x="342" y="460" width="10" height="10" fill="#0F172A" />
                  <rect x="344" y="462" width="6" height="6" fill="#FFFFFF" />
                  <rect x="356" y="454" width="4" height="4" fill="#0F172A" />
                  <rect x="364" y="462" width="6" height="6" fill="#0F172A" />
                </g>

                {/* Bottom CMYK Calibration Strip */}
                <g id="bottomCMYK">
                  <rect x="120" y="520" width="65" height="4" fill="#00A8CC" />
                  <rect x="185" y="520" width="65" height="4" fill="#EC4899" />
                  <rect x="250" y="520" width="65" height="4" fill="#FACC15" />
                  <rect x="315" y="520" width="65" height="4" fill="#0F172A" />
                </g>
              </g>
            </g>

            {/* 5. INTERACTIVE FEATURE OVERLAYS (SYNCHRONIZED WITH THE 7 PILLS) */}

            {/* Feature 1: MICRO TEXT PRINTING LOUPE LENS */}
            {activeFeatureId === "micro-printing" && (
              <g id="featureMicroPrintingLoupe" className="animate-in fade-in zoom-in-95 duration-200">
                {/* Glowing Outer Halo */}
                <circle cx="215" cy="425" r="76" fill="rgba(250, 204, 21, 0.22)" />
                <circle cx="215" cy="425" r="58" fill="rgba(250, 204, 21, 0.4)" />

                {/* Loupe Lens Body */}
                <circle cx="215" cy="425" r="48" fill="#090D18" />

                {/* Magnified Sub-millimeter Microtext lines */}
                <text x="176" y="405" fill="#FACC15" fontSize="7" fontWeight="900" fontFamily="monospace">
                  10X OPTICAL ZOOM INSPECTION
                </text>
                <text x="176" y="416" fill="#FFFFFF" fontSize="6.5" fontWeight="800" fontFamily="monospace">
                  SAMYAK SECURITY LABELS
                </text>
                <text x="176" y="426" fill="#38BDF8" fontSize="6.5" fontWeight="800" fontFamily="monospace">
                  AUTH: SIPL-9001-VALID
                </text>
                <text x="176" y="436" fill="#FFFFFF" fontSize="6.5" fontWeight="800" fontFamily="monospace">
                  CTP RES: 4800 DPI PASS
                </text>
                <text x="176" y="446" fill="#F43F5E" fontSize="6" fontWeight="800" fontFamily="monospace">
                  ANTI-CLONING WATERMARK
                </text>

                {/* Reticle Crosshairs */}
                <line x1="205" y1="425" x2="225" y2="425" stroke="#F43F5E" strokeWidth="1" />
                <line x1="215" y1="415" x2="215" y2="435" stroke="#F43F5E" strokeWidth="1" />

                {/* Glass Glare Sheen Arc */}
                <path
                  d="M 180 405 A 44 44 0 0 1 245 405 Z"
                  fill="rgba(255,255,255,0.22)"
                />

                {/* Brass / Yellow Precision Bezel Ring */}
                <circle
                  cx="215"
                  cy="425"
                  r="48"
                  fill="none"
                  stroke="#FACC15"
                  strokeWidth="3.5"
                />
                <circle
                  cx="215"
                  cy="425"
                  r="46"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="1"
                  strokeOpacity="0.8"
                />

                {/* HUD Pill Badge */}
                <rect x="175" y="478" width="80" height="18" rx="9" fill="#FACC15" />
                <text x="187" y="490" fill="#0F172A" fontSize="8" fontWeight="900">
                  10x MICRON
                </text>
              </g>
            )}

            {/* Feature 2: FOOD GRADE ADHESIVE PEEL-BACK CORNER */}
            {activeFeatureId === "food-adhesive" && (
              <g id="featurePeelBackCorner" className="animate-in fade-in duration-200">
                {/* Exposed Adhesive Backing */}
                <polygon points="334,528 388,474 388,528" fill="rgba(250,204,21,0.3)" />

                {/* Hex Polymer Adhesive Mesh Dots */}
                {[
                  [348, 518],
                  [360, 508],
                  [372, 498],
                  [362, 520],
                  [374, 510],
                  [378, 520],
                ].map(([dx, dy], di) => (
                  <circle key={`dot-${di}`} cx={dx} cy={dy} r="2" fill="#FFFFFF" opacity="0.6" />
                ))}

                {/* Curled Release Liner Underside */}
                <polygon
                  points="334,528 388,474 358,498"
                  fill="#E2E8F0"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                />

                {/* Peel Shadow */}
                <polygon points="328,528 388,468 334,528" fill="#000000" opacity="0.4" />

                {/* Adhesive Callout Badge */}
                <rect
                  x="200"
                  y="505"
                  width="170"
                  height="22"
                  rx="6"
                  fill="rgba(15,23,42,0.92)"
                  stroke="#FACC15"
                  strokeWidth="1.2"
                />
                <text x="210" y="520" fill="#FACC15" fontSize="8.5" fontWeight="800">
                  FDA 175.105 &amp; EU 1935/2004 ADHESIVE
                </text>
              </g>
            )}

            {/* Feature 3: HOLOGRAM FOR NON DUPLICACY */}
            {activeFeatureId === "hologram" && (
              <g id="featureHologramSweep" className="animate-in fade-in duration-200">
                <rect
                  x="122"
                  y="434"
                  width="118"
                  height="46"
                  rx="6"
                  fill="url(#holoRainbow)"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                />
                {/* Dynamic Sheen Line */}
                <line
                  x1="126"
                  y1="476"
                  x2="176"
                  y2="436"
                  stroke="#FFFFFF"
                  strokeWidth="4"
                  strokeOpacity="0.8"
                />
                <text x="130" y="453" fill="#0F172A" fontSize="8.5" fontWeight="900">
                  ★ SIPL SECURE ★
                </text>
                <text x="130" y="468" fill="#0F172A" fontSize="7.5" fontWeight="900">
                  AUTHENTIC 3D VOID
                </text>
              </g>
            )}

            {/* Feature 4: TOUCH ME FEEL THE TEXTURE */}
            {activeFeatureId === "tactile-texture" && (
              <g id="featureTactileEmbossing" className="animate-in fade-in duration-200">
                {/* Embossed Dot Relief Grid across brand crest */}
                {[...Array(6)].map((_, r) =>
                  [...Array(10)].map((_, c) => {
                    const bx = 135 + c * 14;
                    const by = 288 + r * 6;
                    return (
                      <g key={`braille-${r}-${c}`}>
                        <circle cx={bx + 0.8} cy={by + 0.8} r="2.2" fill="#000000" opacity="0.6" />
                        <circle cx={bx - 0.4} cy={by - 0.4} r="1.8" fill="#FFFFFF" opacity="0.9" />
                        <circle cx={bx} cy={by} r="1.5" fill="#FACC15" />
                      </g>
                    );
                  })
                )}
                {/* Badge */}
                <rect
                  x="165"
                  y="330"
                  width="170"
                  height="22"
                  rx="6"
                  fill="rgba(15,23,42,0.92)"
                  stroke="#FACC15"
                  strokeWidth="1.2"
                />
                <text x="175" y="344" fill="#FACC15" fontSize="8.5" fontWeight="800">
                  TACTILE SCREEN VARNISH (80µm)
                </text>
              </g>
            )}

            {/* Feature 5: DRIP OFF EFFECT */}
            {activeFeatureId === "drip-off" && (
              <g id="featureDripOffDroplets" className="animate-in fade-in duration-200">
                {[
                  { cx: 160, cy: 245, r: 7 },
                  { cx: 215, cy: 305, r: 10 },
                  { cx: 285, cy: 260, r: 8 },
                  { cx: 335, cy: 310, r: 12 },
                  { cx: 185, cy: 375, r: 9 },
                  { cx: 315, cy: 405, r: 11 },
                ].map((d, di) => (
                  <g key={`drop-${di}`}>
                    {/* Droplet Shadow */}
                    <ellipse
                      cx={d.cx + 2}
                      cy={d.cy + 2}
                      rx={d.r}
                      ry={d.r * 0.9}
                      fill="#000000"
                      opacity="0.45"
                    />
                    {/* Droplet Lens Body */}
                    <circle cx={d.cx} cy={d.cy} r={d.r} fill="rgba(255,255,255,0.3)" />
                    {/* Refraction caustics */}
                    <circle cx={d.cx} cy={d.cy} r={d.r * 0.8} fill="rgba(250,204,21,0.2)" />
                    {/* Specular Glint */}
                    <circle
                      cx={d.cx - d.r * 0.35}
                      cy={d.cy - d.r * 0.35}
                      r={d.r * 0.25}
                      fill="#FFFFFF"
                    />
                  </g>
                ))}
                {/* Badge */}
                <rect
                  x="165"
                  y="496"
                  width="170"
                  height="22"
                  rx="6"
                  fill="rgba(15,23,42,0.92)"
                  stroke="#FACC15"
                  strokeWidth="1.2"
                />
                <text x="175" y="510" fill="#FACC15" fontSize="8.5" fontWeight="800">
                  SELECTIVE UV DRIP-OFF LENSES
                </text>
              </g>
            )}

            {/* Feature 6: GOLD / SILVER FOILING */}
            {activeFeatureId === "foiling" && (
              <g id="featureFoilSweep" className="animate-in fade-in duration-200">
                {/* High-Luster Metallic Gold Sweep overlay */}
                <rect
                  x="116"
                  y="214"
                  width="268"
                  height="310"
                  rx="4"
                  fill="none"
                  stroke="#FEF08A"
                  strokeWidth="3.5"
                />
                <polygon
                  points="120,214 180,214 140,524 116,524"
                  fill="#FFFFFF"
                  opacity="0.25"
                />
                <rect
                  x="165"
                  y="222"
                  width="170"
                  height="22"
                  rx="6"
                  fill="#FACC15"
                  stroke="#FEF9C3"
                  strokeWidth="1.5"
                />
                <text x="178" y="236" fill="#0F172A" fontSize="9" fontWeight="900">
                  HOT FOIL METALLIC LUSTER
                </text>
              </g>
            )}

            {/* 6. Dynamic Softbox Specular Highlight (Moves with cursor coordinate) */}
            <path
              d="M 125 210
                 L 195 210
                 L 150 535
                 L 125 535
                 Z"
              fill="url(#softboxGlare)"
              opacity="0.8"
              style={{
                transform: `translateX(${(glarePos.x - 50) * 0.7}px)`,
                transition: "transform 100ms ease-out",
              }}
            />
          </svg>
        </div>

        {/* =====================================================================
            BACK FACE: CLINICAL NUTRITION & VARIABLE OCR INSPECTION PANEL
            ===================================================================== */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            !isBackView ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <svg
            viewBox="0 0 500 600"
            className="w-full h-full max-h-[580px] drop-shadow-2xl overflow-visible"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Ground Contact Shadow */}
            <ellipse cx="250" cy="565" rx="175" ry="24" fill="url(#jarGroundShadow)" />
            <ellipse cx="250" cy="558" rx="125" ry="8" fill="#090D16" opacity="0.75" />

            {/* Back Jar Silhouette Body */}
            <path
              d="M 166 126
                 L 166 148
                 C 166 170, 110 185, 110 216
                 L 110 520
                 Q 110 546, 134 546
                 L 366 546
                 Q 390 546, 390 520
                 L 390 216
                 C 390 185, 334 170, 334 148
                 L 334 126
                 Z"
              fill="url(#jarBodyGrad)"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1.2"
            />

            {/* Back Yellow Screw Cap */}
            <rect
              x="158"
              y="68"
              width="184"
              height="60"
              rx="6"
              fill="url(#capYellowGrad)"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1"
            />
            {/* Back Cap Flutes */}
            {[166, 178, 190, 202, 214, 226, 238, 250, 262, 274, 286, 298, 310, 322, 334].map(
              (fx, idx) => (
                <line
                  key={`bflute-${idx}`}
                  x1={fx}
                  y1="76"
                  x2={fx}
                  y2="122"
                  stroke="#854D0E"
                  strokeWidth="2"
                  strokeOpacity="0.7"
                />
              )
            )}
            <ellipse cx="250" cy="68" rx="92" ry="13" fill="url(#capTopGrad)" stroke="#FEF08A" strokeWidth="1" />

            {/* Back Inspection White Card */}
            <g id="backWhiteCard">
              <rect
                x="114"
                y="212"
                width="272"
                height="314"
                rx="8"
                fill="#FFFFFF"
                stroke="#CBD5E1"
                strokeWidth="1.5"
              />

              {/* Nutrition Facts Table Header */}
              <text x="130" y="235" fill="#0F172A" fontSize="13" fontWeight="900">
                CLINICAL NUTRITION FACTS
              </text>
              <line x1="130" y1="242" x2="370" y2="242" stroke="#0F172A" strokeWidth="2" />

              {/* Nutrition Rows */}
              {[
                ["Serving Size: 30g (1 Scoop)", "Servings: ~75"],
                ["Calories: 120 kcal", "Protein: 27.5g (92% Yield)"],
                ["Carbohydrates: 0.5g", "BCAA: 6.8g (2:1:1)"],
                ["Total Fat: 0.2g (Zero Trans)", "Glutamine: 5.4g"],
              ].map((row, ri) => {
                const ry = 258 + ri * 15;
                return (
                  <g key={`fact-${ri}`}>
                    <text x="130" y={ry} fill="#1E293B" fontSize="8" fontWeight="600">
                      {row[0]}
                    </text>
                    <text x="260" y={ry} fill="#1E293B" fontSize="8" fontWeight="600">
                      {row[1]}
                    </text>
                    <line x1="130" y1={ry + 3} x2="370" y2={ry + 3} stroke="#E2E8F0" strokeWidth="0.5" />
                  </g>
                );
              })}

              {/* Laser Serialized Variable Printing Box */}
              <rect
                x="126"
                y="326"
                width="248"
                height="146"
                rx="6"
                fill="#F8FAFC"
                stroke="#EAB308"
                strokeWidth="1.5"
              />

              {/* 1D Barcode */}
              <g id="barcode1D">
                {[...Array(38)].map((_, bi) => (
                  <line
                    key={`bcode-${bi}`}
                    x1={138 + bi * 3.6}
                    y1="340"
                    x2={138 + bi * 3.6}
                    y2="385"
                    stroke="#0F172A"
                    strokeWidth={bi % 3 === 0 ? "2.5" : "1.2"}
                  />
                ))}
                <text x="160" y="396" fill="#0F172A" fontSize="8" fontWeight="bold" fontFamily="monospace">
                  8 901234 567891
                </text>
              </g>

              {/* GS1 2D DataMatrix */}
              <g id="gs1Matrix">
                <rect x="295" y="340" width="48" height="48" fill="#0F172A" />
                <rect x="298" y="343" width="42" height="42" fill="#FFFFFF" />
                {[...Array(6)].map((_, my) =>
                  [...Array(6)].map((_, mx) => {
                    if ((mx + my) % 2 === 0 || mx === 0 || my === 5) {
                      return (
                        <rect
                          key={`m-${my}-${mx}`}
                          x={301 + mx * 6}
                          y={346 + my * 6}
                          width="4.5"
                          height="4.5"
                          fill="#0F172A"
                        />
                      );
                    }
                    return null;
                  })
                )}
              </g>

              {/* Variable Alphanumeric Fields */}
              <text x="138" y="416" fill="#0F172A" fontSize="9" fontWeight="bold" fontFamily="monospace">
                BATCH CODE : SYK-2026-X89
              </text>
              <text x="138" y="430" fill="#0F172A" fontSize="9" fontWeight="bold" fontFamily="monospace">
                MFG DATE   : 10/2026
              </text>
              <text x="138" y="444" fill="#0F172A" fontSize="9" fontWeight="bold" fontFamily="monospace">
                EXPIRY     : 09/2028
              </text>
              <text x="138" y="458" fill="#0F172A" fontSize="9" fontWeight="bold" fontFamily="monospace">
                MRP INCL.  : ₹3,499.00
              </text>

              {/* Active Laser Scanning Line (When Variable Printing is Active) */}
              <g id="activeLaserBeam" className="animate-pulse">
                <line x1="126" y1="380" x2="374" y2="380" stroke="#F43F5E" strokeWidth="2.5" />
                <rect x="126" y="375" width="248" height="10" fill="#F43F5E" opacity="0.2" />
                <text x="175" y="486" fill="#22C55E" fontSize="9" fontWeight="900" fontFamily="monospace">
                  ● LASER OCR VERIFIED: GRADE A
                </text>
              </g>

              {/* Footer Note */}
              <text x="130" y="512" fill="#64748B" fontSize="7" fontStyle="italic">
                SIPL High-Speed Direct Thermal &amp; UV Flexo Verification • 150 m/min
              </text>
            </g>
          </svg>
        </div>
      </div>

      {/* Floating Interactive HUD Controls Bar */}
      <div className="absolute bottom-2 inset-x-4 flex items-center justify-between pointer-events-none z-10">
        {/* Angle / Face Badge */}
        <div className="pointer-events-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md text-white text-[11px] font-mono shadow-md border border-slate-700/60">
          <span className="w-2 h-2 rounded-full bg-[#FACC15] animate-pulse" />
          <span>{isBackView ? "180° BACK PANEL" : "0° FRONT FACE"}</span>
        </div>

        {/* Center Toggle / Hint Pill */}
        <button
          type="button"
          onClick={toggleFlip}
          className="pointer-events-auto inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/95 hover:bg-white backdrop-blur-md text-slate-700 text-xs font-semibold shadow-md border border-slate-200/90 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          title="Click to flip between front label and back inspection panel"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#EAB308]" />
          <span>{isBackView ? "Flip to Front Label" : "Flip to Back Panel"}</span>
        </button>

        {/* Reset View Button */}
        <button
          type="button"
          onClick={resetView}
          className="pointer-events-auto p-1.5 rounded-full bg-white/95 hover:bg-white text-slate-600 hover:text-[#CA8A04] shadow-md border border-slate-200 transition-all hover:scale-110 active:scale-95 cursor-pointer"
          title="Reset to Default Front View (0°)"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
