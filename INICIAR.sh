#!/usr/bin/env sh
set -eu
cd "$(dirname "$0")"
if command -v node >/dev/null 2>&1; then exec node serve.mjs; fi
if command -v python3 >/dev/null 2>&1; then exec python3 serve.py; fi
printf 'Se requiere Node.js o Python 3 ya instalado. No se necesita npm ni internet.\n'
exit 1
