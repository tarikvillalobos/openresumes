"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import { templates } from "@/lib/content";

export function TemplateSelector() {
  const [activeTemplate, setActiveTemplate] = useState(0);

  return (
    <div className="templates-panel reveal">
      <div className="templates-kicker">Templates disponíveis</div>
      {templates.map((template, index) => (
        <button
          className={
            activeTemplate === index ? "template-thumb active" : "template-thumb"
          }
          key={template.name}
          onClick={() => setActiveTemplate(index)}
          type="button"
        >
          <span className="template-preview">
            <span
              className="tp-accent"
              style={
                { "--template-accent": template.color } as CSSProperties
              }
            />
          </span>
          <span className="template-info">
            <span className="template-info-name">{template.name}</span>
            <span className="template-info-desc">{template.description}</span>
          </span>
          {template.badge ? (
            <span className="template-badge">{template.badge}</span>
          ) : null}
        </button>
      ))}

      <div className="templates-note">+ 12 templates a caminho</div>
    </div>
  );
}
