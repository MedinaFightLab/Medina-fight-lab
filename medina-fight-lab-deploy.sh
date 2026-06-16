#!/usr/bin/env bash
# Medina Fight Lab — redeploy the live design-system site and the athlete app.
# Usage: ./medina-fight-lab-deploy.sh
set -e

DS="$HOME/Desktop/medina-fight-lab-design-system"
APP="$HOME/Desktop/medina-fight-lab-app"
API="$HOME/Desktop/medina-fight-lab-api"

echo "▶ Deploying API (Cloudflare D1 backend)…"
( cd "$API" && npx wrangler deploy )

echo "▶ Deploying design system showcase…"
( cd "$DS" && npx wrangler deploy )

echo "▶ Deploying athlete app (PWA)…"
( cd "$APP" && npx wrangler deploy )

echo "✅ Done."
echo "   Design system: https://medina-fight-lab-design-system.medina-physio.workers.dev"
echo "   Athlete app:   https://medina-fight-lab-app.medina-physio.workers.dev"
echo "   API:           https://medina-fight-lab-api.medina-physio.workers.dev"
