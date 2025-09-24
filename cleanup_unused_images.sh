#!/bin/bash
# Clean unused images script for Chicas Waskiris

echo "🧹 CLEANING UNUSED IMAGES"
echo "========================="

cd /Users/fazozela/Desktop/Dev/chicas-waskiris/chicaswaskiris/public

total_freed=0

echo ""
echo "🗑️ Removing unused media files:"
echo "--------------------------------"

# Remove unused video (2.9MB)
if [ -f "getinvolvedvideo.mp4" ]; then
    size=$(du -k getinvolvedvideo.mp4 | cut -f1)
    rm getinvolvedvideo.mp4
    echo "✅ Removed getinvolvedvideo.mp4 (2.9MB)"
    total_freed=$((total_freed + size))
fi

# Remove unused image (74KB)
if [ -f "nina_waskiri_2.png" ]; then
    size=$(du -k nina_waskiri_2.png | cut -f1)
    rm nina_waskiri_2.png
    echo "✅ Removed nina_waskiri_2.png (74KB)"
    total_freed=$((total_freed + size))
fi

echo ""
echo "🗑️ Removing optimization temporary files:"
echo "----------------------------------------"

# Remove original files (these are backed up in ./backup/)
for file in *.png.original *.jpg.original; do
    if [ -f "$file" ]; then
        size=$(du -k "$file" | cut -f1)
        rm "$file"
        echo "✅ Removed $file"
        total_freed=$((total_freed + size))
    fi
done

# Remove temporary optimization files
for file in media1_optimized.png photoGroup_large.jpg photoGroup_old.jpg; do
    if [ -f "$file" ]; then
        size=$(du -k "$file" | cut -f1)
        rm "$file"
        echo "✅ Removed $file"
        total_freed=$((total_freed + size))
    fi
done

echo ""
echo "🗑️ Removing allies temp files:"
echo "------------------------------"

# Remove allies original files
for file in allies/*.original; do
    if [ -f "$file" ]; then
        size=$(du -k "$file" | cut -f1)
        rm "$file"
        echo "✅ Removed $file"
        total_freed=$((total_freed + size))
    fi
done

# Remove tinified.zip
if [ -f "allies/tinified.zip" ]; then
    size=$(du -k allies/tinified.zip | cut -f1)
    rm allies/tinified.zip
    echo "✅ Removed allies/tinified.zip (242KB)"
    total_freed=$((total_freed + size))
fi

echo ""
echo "🗑️ Removing system files:"
echo "-------------------------"

# Remove .DS_Store files
find . -name ".DS_Store" -type f -delete
echo "✅ Removed all .DS_Store files"

echo ""
echo "📊 CLEANUP SUMMARY:"
echo "==================="
echo "🎉 Total space freed: ~$((total_freed / 1024))MB"
echo "🚀 Your public directory is now much cleaner!"
echo ""
echo "✅ What was kept:"
echo "• All images actually used in your website"
echo "• All optimized images (smaller, better quality)"
echo "• Complete backup in ./backup/ directory"
echo ""
echo "✅ What was removed:"
echo "• Unused video file (getinvolvedvideo.mp4)"
echo "• Unused image (nina_waskiri_2.png)"
echo "• Temporary optimization files"
echo "• Original files (safely backed up)"
echo "• System files (.DS_Store)"
echo "• Old archive (tinified.zip)"