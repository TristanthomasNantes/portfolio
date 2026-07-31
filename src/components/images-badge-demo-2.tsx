"use client";

import { ImagesBadge } from "@/components/ui/images-badge";

export default function ImagesBadgeDemoTwo() {
  return (
    <div className="hero-badge flex w-full items-center justify-start">
      <ImagesBadge
        text="Aperçu de quelques projets"
        images={[
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
        ]}
        href="#projects"
        folderSize={{ width: 48, height: 36 }}
        teaserImageSize={{ width: 40, height: 28 }}
        hoverImageSize={{ width: 140, height: 108 }}
        hoverTranslateY={-110}
        hoverSpread={50}
      />
    </div>
  );
}
