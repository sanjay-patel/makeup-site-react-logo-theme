#!/bin/bash

PORTFOLIO_DIR="./public/images/portfolio"
TARGET_SIZE="800"

echo "Resizing portfolio images to ${TARGET_SIZE}x${TARGET_SIZE}..."
echo ""

for file in "$PORTFOLIO_DIR"/*.jpg "$PORTFOLIO_DIR"/*.jpeg "$PORTFOLIO_DIR"/*.png; do
  if [ -f "$file" ]; then
    filename=$(basename "$file")
    echo "Resizing $filename..."

    # Use sips to resize and crop to exact dimensions
    sips -z "$TARGET_SIZE" "$TARGET_SIZE" "$file" --out "$file" >/dev/null 2>&1

    if [ $? -eq 0 ]; then
      echo "✓ Resized $filename to ${TARGET_SIZE}x${TARGET_SIZE}"
    else
      echo "✗ Failed to resize $filename"
    fi
  fi
done

echo ""
echo "All images resized successfully!"
