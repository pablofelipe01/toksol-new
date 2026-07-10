"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { site } from "@/lib/site-config";

/**
 * Click-to-load 16:9 YouTube embed. Nothing is requested from Google until the
 * visitor presses play, which keeps the cookie policy honest and the hero fast.
 */
export default function VideoEmbed() {
  const [active, setActive] = useState(false);

  return (
    <div className="glass relative aspect-video w-full overflow-hidden rounded-2xl shadow-panel">
      {active ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`${site.video.embed}?autoplay=1&rel=0`}
          title={site.video.title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group absolute inset-0 h-full w-full"
          aria-label={`Play video: ${site.video.title}`}
        >
          <Image
            src={site.video.thumbnail}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 960px"
            className="object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-85"
            unoptimized
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent"
          />
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-solar-flare shadow-[0_10px_50px_-8px_rgba(245,138,7,0.8)] transition-transform duration-300 group-hover:scale-105"
          >
            <Play className="ml-1 h-8 w-8 fill-void text-void" />
          </span>
        </button>
      )}
    </div>
  );
}
