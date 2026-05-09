"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/data/services";
import {
  Link as LinkIcon, Laptop, Cloud, ListTodo,
  Brain, ShoppingCart, CreditCard, ArrowRight,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Link: <LinkIcon size={26} />,
  Laptop: <Laptop size={26} />,
  Cloud: <Cloud size={26} />,
  ListTodo: <ListTodo size={26} />,
  Brain: <Brain size={26} />,
  ShoppingCart: <ShoppingCart size={26} />,
  CreditCard: <CreditCard size={26} />,
};

const gradients: Record<string, string> = {
  Link: "linear-gradient(135deg,#3b82f6,#6366f1)",
  Laptop: "linear-gradient(135deg,#8b5cf6,#ec4899)",
  Cloud: "linear-gradient(135deg,#06b6d4,#3b82f6)",
  ListTodo: "linear-gradient(135deg,#10b981,#14b8a6)",
  Brain: "linear-gradient(135deg,#f97316,#ef4444)",
  ShoppingCart: "linear-gradient(135deg,#ec4899,#f43f5e)",
  CreditCard: "linear-gradient(135deg,#c9a84c,#f5d88a)",
};

export default function Services() {
  return (
    <section
      id="services"
      style={{ background: "#f4f6fb", padding: "6rem 0" }}
    >
      <div className="wrap">
        <motion.div
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">What We Do</span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 4vw, 2.75rem)",
              fontWeight: 800,
              color: "#0a1628",
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
            }}
          >
            Comprehensive Development Services
          </h2>
          <div className="gold-divider" />
          <p
            style={{
              color: "#64748b",
              maxWidth: "540px",
              margin: "1.25rem auto 0",
              fontSize: "1.05rem",
              lineHeight: 1.7,
            }}
          >
            Cutting-edge technologies and proven methodologies to deliver exceptional digital solutions across the UAE and globally.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              className="glass-card"
              style={{ padding: "2rem", display: "flex", flexDirection: "column" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "54px",
                  height: "54px",
                  borderRadius: "1rem",
                  background: gradients[service.icon] || "#1e3a5f",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  marginBottom: "1.25rem",
                  flexShrink: 0,
                  boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                }}
              >
                {iconMap[service.icon]}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "#0a1628",
                  marginBottom: "0.35rem",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  color: "#c9a84c",
                  marginBottom: "0.75rem",
                  letterSpacing: "0.04em",
                }}
              >
                {service.subtitle}
              </p>
              <p
                style={{
                  color: "#64748b",
                  fontSize: "0.875rem",
                  lineHeight: 1.65,
                  marginBottom: "1.25rem",
                  flex: 1,
                }}
              >
                {service.description}
              </p>

              {/* Feature pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
                {service.features.slice(0, 3).map((f) => (
                  <span
                    key={f.title}
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      background: "rgba(201,168,76,0.1)",
                      color: "#a8872f",
                      padding: "0.25rem 0.65rem",
                      borderRadius: "100px",
                      border: "1px solid rgba(201,168,76,0.2)",
                    }}
                  >
                    {f.title}
                  </span>
                ))}
              </div>

              <Link
                href={`/services/${service.slug}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "#1e3a5f",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  fontFamily: "var(--font-display)",
                }}
              >
                Learn More <ArrowRight size={15} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
